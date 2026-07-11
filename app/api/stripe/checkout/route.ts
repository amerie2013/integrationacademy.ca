import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { planExpiry } from "../../../../lib/subscription";
import { rateLimit, clientKey } from "../../../../lib/rateLimit";

// Created lazily so `next build` can collect this route without the env vars
// (instantiating Stripe with no key throws at module load).
let _stripe: Stripe | null = null;
const getStripe = () => (_stripe ??= new Stripe(process.env.STRIPE_SECRET_KEY!));
const makeAdmin = () => createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
let _admin: ReturnType<typeof makeAdmin> | null = null;
const getAdmin = () => (_admin ??= makeAdmin());

const PRICE_IDS: Record<string, string | undefined> = {
  student_monthly: process.env.STRIPE_PRICE_STUDENT_MONTHLY,
  student_annual: process.env.STRIPE_PRICE_STUDENT_ANNUAL,
  tutor_monthly: process.env.STRIPE_PRICE_TUTOR_MONTHLY,
  tutor_annual: process.env.STRIPE_PRICE_TUTOR_ANNUAL,
};

export async function POST(req: NextRequest) {
  try {
    const rl = rateLimit(`checkout:${clientKey(req)}`, 10, 60_000);
    if (!rl.ok) {
      return NextResponse.json({ error: "Too many requests. Please wait a moment and try again." }, { status: 429, headers: { "Retry-After": String(rl.retryAfter) } });
    }
    const stripe = getStripe();
    const supabaseAdmin = getAdmin();
    const { plan, userId, userEmail, courseId } = (await req.json()) as {
      plan: string;
      userId: string;
      userEmail: string;
      courseId: string;
    };

    if (!PRICE_IDS[plan]) {
      return NextResponse.json({ error: "Invalid or unconfigured plan" }, { status: 400 });
    }
    if (!courseId) {
      return NextResponse.json({ error: "No course specified for purchase" }, { status: 400 });
    }

    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("stripe_customer_id, full_name")
      .eq("id", userId)
      .single();

    let customerId = profile?.stripe_customer_id ?? "";
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: userEmail,
        name: profile?.full_name ?? userEmail,
        metadata: { supabase_user_id: userId },
      });
      customerId = customer.id;
      await supabaseAdmin
        .from("profiles")
        .update({ stripe_customer_id: customerId })
        .eq("id", userId);
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      success_url: `${appUrl}/courses/${courseId}?purchased=true`,
      cancel_url: `${appUrl}/courses/${courseId}?cancelled=true`,
      metadata: {
        supabase_user_id: userId,
        plan,
        course_id: courseId,
        expires_at: planExpiry(plan).toISOString(),
      },
      mode: "payment", // all plans are one-time with a fixed, term-based expiry
      line_items: [{ price: PRICE_IDS[plan]!, quantity: 1 }],
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
