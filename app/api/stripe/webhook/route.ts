import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

// Created lazily so `next build` can collect this route without the env vars
// (instantiating Stripe with no key throws at module load).
let _stripe: Stripe | null = null;
const getStripe = () => (_stripe ??= new Stripe(process.env.STRIPE_SECRET_KEY!));
const makeAdmin = () => createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
let _admin: ReturnType<typeof makeAdmin> | null = null;
const getAdmin = () => (_admin ??= makeAdmin());

export async function POST(req: NextRequest) {
  const stripe = getStripe();
  const supabaseAdmin = getAdmin();
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") ?? "";

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    console.error("Webhook signature error:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.supabase_user_id;
    const plan = session.metadata?.plan;
    const courseId = session.metadata?.course_id;

    if (userId && plan) {
      // All plans are one-time with a fixed, term-based expiry set at checkout.
      const expiresAt = session.metadata?.expires_at ?? null;

      // Per-COURSE grant — the real access record. kind derived from the plan.
      if (courseId) {
        await supabaseAdmin.from("course_grants").insert({
          user_id: userId,
          course_id: courseId,
          kind: plan.startsWith("tutor") ? "teacher" : "student",
          plan,
          status: "active",
          expires_at: expiresAt,
          stripe_customer_id: (session.customer as string) ?? null,
          stripe_subscription_id: (session.subscription as string) ?? null,
        });
      }

      // Coarse profile flag kept for badges / "can reach the class form" UI —
      // real access is governed per-course by course_grants above.
      await supabaseAdmin
        .from("profiles")
        .update({
          subscription_status: "active",
          subscription_plan: plan,
          subscription_expires_at: expiresAt,
        })
        .eq("id", userId);

      if (plan.startsWith("tutor")) {
        const { data: prof } = await supabaseAdmin.from("profiles").select("class_quota").eq("id", userId).single();
        await supabaseAdmin.from("profiles").update({ class_quota: ((prof as any)?.class_quota ?? 0) + 1 }).eq("id", userId);
      }
    }
  }

  if (event.type === "invoice.payment_succeeded") {
    const invoice = event.data.object as Stripe.Invoice;
    const customerId = invoice.customer as string;
    const subId = (invoice as any).subscription as string | null;
    // Renewal: reactivate the grant(s) for this subscription.
    if (subId) {
      await supabaseAdmin.from("course_grants").update({ status: "active", updated_at: new Date().toISOString() }).eq("stripe_subscription_id", subId);
    }
    if (customerId) {
      const { data: profile } = await supabaseAdmin
        .from("profiles")
        .select("id")
        .eq("stripe_customer_id", customerId)
        .single();
      if (profile) {
        await supabaseAdmin
          .from("profiles")
          .update({ subscription_status: "active", subscription_expires_at: null })
          .eq("id", profile.id);
      }
    }
  }

  if (
    event.type === "customer.subscription.deleted" ||
    event.type === "customer.subscription.paused"
  ) {
    const sub = event.data.object as Stripe.Subscription;
    // Revoke exactly the course this subscription paid for.
    await supabaseAdmin.from("course_grants").update({ status: "cancelled", updated_at: new Date().toISOString() }).eq("stripe_subscription_id", sub.id);
    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("id")
      .eq("stripe_customer_id", sub.customer as string)
      .single();
    if (profile) {
      await supabaseAdmin
        .from("profiles")
        .update({ subscription_status: "cancelled" })
        .eq("id", profile.id);
    }
  }

  if (event.type === "invoice.payment_failed") {
    const invoice = event.data.object as Stripe.Invoice;
    const subId = (invoice as any).subscription as string | null;
    if (subId) {
      await supabaseAdmin.from("course_grants").update({ status: "past_due", updated_at: new Date().toISOString() }).eq("stripe_subscription_id", subId);
    }
    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("id")
      .eq("stripe_customer_id", invoice.customer as string)
      .single();
    if (profile) {
      await supabaseAdmin
        .from("profiles")
        .update({ subscription_status: "past_due" })
        .eq("id", profile.id);
    }
  }

  return NextResponse.json({ received: true });
}
