import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

// Admin-only promo codes. Creating one makes a Stripe coupon (percent off) +
// a customer-facing promotion code; checkout has allow_promotion_codes:true so
// buyers can enter it. Only the account's admins can manage these.

let _stripe: Stripe | null = null;
const getStripe = () => (_stripe ??= new Stripe(process.env.STRIPE_SECRET_KEY!));
const makeAdmin = () =>
  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, { auth: { persistSession: false } });
let _admin: ReturnType<typeof makeAdmin> | null = null;
const getAdmin = () => (_admin ??= makeAdmin());

async function requireAdmin(req: NextRequest): Promise<{ ok: true } | { ok: false; res: NextResponse }> {
  const token = (req.headers.get("authorization") ?? "").replace(/^Bearer /, "");
  if (!token) return { ok: false, res: NextResponse.json({ error: "Not signed in." }, { status: 401 }) };
  const admin = getAdmin();
  const { data: userData, error } = await admin.auth.getUser(token);
  if (error || !userData?.user) return { ok: false, res: NextResponse.json({ error: "Session expired — sign in again." }, { status: 401 }) };
  const { data: prof } = await admin.from("profiles").select("role").eq("id", userData.user.id).single();
  if (prof?.role !== "admin") return { ok: false, res: NextResponse.json({ error: "Admins only." }, { status: 403 }) };
  return { ok: true };
}

// GET → list promotion codes
export async function GET(req: NextRequest) {
  const gate = await requireAdmin(req);
  if (!gate.ok) return gate.res;
  try {
    const stripe = getStripe();
    const list = await stripe.promotionCodes.list({ limit: 100, expand: ["data.promotion.coupon"] });
    const codes = list.data.map((p) => {
      const c = (p as any).promotion?.coupon as Stripe.Coupon | undefined;
      return {
        id: p.id, code: p.code, active: p.active,
        percent_off: c?.percent_off ?? null,
        duration: c?.duration ?? null,
        duration_in_months: c?.duration_in_months ?? null,
        times_redeemed: p.times_redeemed,
        max_redemptions: p.max_redemptions ?? null,
      };
    });
    return NextResponse.json({ codes });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST → { action: "create", code, percentOff, duration, months? } | { action: "deactivate", id }
export async function POST(req: NextRequest) {
  const gate = await requireAdmin(req);
  if (!gate.ok) return gate.res;
  const stripe = getStripe();
  const body = await req.json().catch(() => ({} as any));

  if (body?.action === "deactivate") {
    const id = String(body?.id ?? "");
    if (!id) return NextResponse.json({ error: "Missing code id." }, { status: 400 });
    try {
      await stripe.promotionCodes.update(id, { active: false });
      return NextResponse.json({ ok: true });
    } catch (err: any) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }

  // create
  const code = String(body?.code ?? "").trim().toUpperCase().replace(/\s+/g, "");
  const percentOff = Number(body?.percentOff);
  const duration = String(body?.duration ?? "once"); // once | forever | repeating
  const months = Number(body?.months);
  if (!code || !/^[A-Z0-9]{3,}$/.test(code)) {
    return NextResponse.json({ error: "Code must be at least 3 letters/numbers, no spaces." }, { status: 400 });
  }
  if (!(percentOff > 0 && percentOff <= 100)) {
    return NextResponse.json({ error: "Percentage must be between 1 and 100." }, { status: 400 });
  }
  try {
    const couponParams: Stripe.CouponCreateParams = { percent_off: percentOff, duration: duration as Stripe.CouponCreateParams.Duration };
    if (duration === "repeating") couponParams.duration_in_months = months > 0 ? months : 1;
    const coupon = await stripe.coupons.create(couponParams);
    const promo = await stripe.promotionCodes.create({ code, promotion: { type: "coupon", coupon: coupon.id } });
    return NextResponse.json({ ok: true, code: promo.code });
  } catch (err: any) {
    return NextResponse.json({ error: err.message?.includes("already") ? `Code "${code}" is already in use — pick another.` : (err.message || "Could not create code.") }, { status: 400 });
  }
}
