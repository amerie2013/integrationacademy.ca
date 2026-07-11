import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { rateLimit, clientKey } from "../../../../lib/rateLimit";

// Created lazily so `next build` can collect this route without the env vars
// (instantiating Stripe with no key throws at module load).
let _stripe: Stripe | null = null;
const getStripe = () => (_stripe ??= new Stripe(process.env.STRIPE_SECRET_KEY!));
const makeAdmin = () => createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
let _admin: ReturnType<typeof makeAdmin> | null = null;
const getAdmin = () => (_admin ??= makeAdmin());

export async function POST(req: NextRequest) {
  try {
    const rl = rateLimit(`portal:${clientKey(req)}`, 10, 60_000);
    if (!rl.ok) {
      return NextResponse.json({ error: "Too many requests. Please wait a moment and try again." }, { status: 429, headers: { "Retry-After": String(rl.retryAfter) } });
    }
    const stripe = getStripe();
    const supabaseAdmin = getAdmin();
    const { userId } = (await req.json()) as { userId: string };

    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", userId)
      .single();

    if (!profile?.stripe_customer_id) {
      return NextResponse.json({ error: "No Stripe customer found" }, { status: 404 });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
    const session = await stripe.billingPortal.sessions.create({
      customer: profile.stripe_customer_id,
      return_url: `${appUrl}/dashboard`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Portal error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
