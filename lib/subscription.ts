import { supabase } from "./supabase";

// High-school / university platform. Mirrors the account + billing model of the
// K-8 sister site (same `profiles` columns) but with adult-oriented plans.

export type SubscriptionStatus =
  | "active"
  | "trialing"
  | "inactive"
  | "cancelled"
  | "past_due";

export type SubscriptionPlan =
  | "student_monthly"
  | "student_annual"
  | "tutor_monthly"
  | "tutor_annual"
  | null;

export type SubInfo = {
  status: SubscriptionStatus;
  plan: SubscriptionPlan;
  expiresAt: string | null;
  isActive: boolean;
  level: string | null;
  role: string | null;
};

/** Fetches the current user's subscription info from their profile. */
export async function getSubscriptionInfo(): Promise<SubInfo | null> {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) return null;

  const { data } = await supabase
    .from("profiles")
    .select(
      "subscription_status, subscription_plan, subscription_expires_at, level, role",
    )
    .eq("id", session.user.id)
    .single();

  if (!data) return null;

  const status: SubscriptionStatus =
    (data.subscription_status as SubscriptionStatus) ?? "inactive";
  const plan: SubscriptionPlan =
    (data.subscription_plan as SubscriptionPlan) ?? null;
  const expiresAt: string | null = data.subscription_expires_at ?? null;

  const notExpired = !expiresAt || new Date(expiresAt) > new Date();
  const isActive =
    (status === "active" || status === "trialing") && notExpired;

  const level =
    data.level ?? (session.user.user_metadata?.level as string | null) ?? null;
  const role =
    data.role ?? (session.user.user_metadata?.role as string | null) ?? null;

  if (!data.level && level) {
    await supabase.from("profiles").update({ level, role }).eq("id", session.user.id);
  }

  return { status, plan, expiresAt, isActive, level, role };
}

/** Human-readable plan label */
export function planLabel(plan: SubscriptionPlan): string {
  const labels: Record<NonNullable<SubscriptionPlan>, string> = {
    student_monthly: "Student Monthly ($19.99/mo)",
    student_annual: "Student Annual ($179/year)",
    tutor_monthly: "Instructor Monthly ($39.99/mo)",
    tutor_annual: "Instructor Annual ($349/year)",
  };
  if (!plan) return "No subscription";
  return labels[plan] ?? plan;
}

/** One year from today, used for annual one-time plans. */
export function oneYearFromNow(): Date {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  return d;
}

/**
 * Fixed, term-based expiry for a one-time purchase:
 *   • *_monthly → exactly 1 month after purchase
 *   • *_annual  → a term pass: bought Jul 1–Aug 31 expires Aug 31 (summer);
 *                 otherwise expires the coming Jun 30 (school year).
 * (Months are 0-indexed: Jun=5, Jul=6, Aug=7, Sep=8.)
 */
export function planExpiry(plan: string, now: Date = new Date()): Date {
  if (plan.endsWith("_monthly")) {
    const d = new Date(now);
    d.setUTCMonth(d.getUTCMonth() + 1);
    return d;
  }
  const y = now.getUTCFullYear();
  const m = now.getUTCMonth();
  if (m === 6 || m === 7) return new Date(Date.UTC(y, 7, 31, 23, 59, 59));   // Jul/Aug → Aug 31 this year
  const expYear = m >= 8 ? y + 1 : y;                                        // Sep–Dec → next Jun 30; Jan–Jun → this Jun 30
  return new Date(Date.UTC(expYear, 5, 30, 23, 59, 59));
}
