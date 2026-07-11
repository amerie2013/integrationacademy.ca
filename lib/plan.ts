// Membership tiers and feature entitlements.
//
// Tiers are stored in the existing profiles.subscription_plan column as plan IDs
// like "gold_monthly" / "platinum_annual"; this module maps those to a Tier and
// answers the only question premium features ask: "is this user entitled?".
//
//   const { tier, has } = await loadPlan();
//   if (has("ai_tutor")) { ...unlock... } else { <PremiumGate feature="ai_tutor"> }
import { getSubscriptionInfo, type SubInfo } from "./subscription";

export type Tier = "free" | "gold" | "platinum";

export const TIER_RANK: Record<Tier, number> = { free: 0, gold: 1, platinum: 2 };
export const TIER_LABEL: Record<Tier, string> = { free: "Free", gold: "Gold", platinum: "Platinum" };

/** Map a stored plan ID to its tier. Legacy "student_*" subscribers map to Gold. */
export function tierOfPlan(plan: string | null | undefined): Tier {
  const p = (plan ?? "").toLowerCase();
  if (p.startsWith("platinum")) return "platinum";
  if (p.startsWith("gold")) return "gold";
  if (p.startsWith("student")) return "gold"; // grandfather old student plans
  return "free";
}

export type Feature =
  | "ai_tutor"
  | "adaptive_practice"
  | "live_tutoring"
  | "parent_reports"
  | "exam_packs"
  | "certificates"
  | "priority_support"
  | "dedicated_tutor"
  | "weekly_live";

/** Minimum tier each premium feature requires. */
export const FEATURE_MIN_TIER: Record<Feature, Tier> = {
  ai_tutor: "gold",
  adaptive_practice: "gold",
  live_tutoring: "gold",
  parent_reports: "gold",
  exam_packs: "gold",
  certificates: "gold",
  priority_support: "gold",
  dedicated_tutor: "platinum",
  weekly_live: "platinum",
};

export const FEATURE_LABEL: Record<Feature, string> = {
  ai_tutor: "AI math tutor",
  adaptive_practice: "Adaptive practice & mastery",
  live_tutoring: "Live 1:1 tutoring",
  parent_reports: "Parent progress reports",
  exam_packs: "Exam-prep packs",
  certificates: "Certificates of completion",
  priority_support: "Priority support",
  dedicated_tutor: "Dedicated tutor",
  weekly_live: "Guaranteed weekly live session",
};

type SubLike = Pick<SubInfo, "isActive" | "plan" | "role"> | null | undefined;

/** Effective tier: staff get everything; otherwise tier of an active plan, else Free. */
export function effectiveTier(sub: SubLike): Tier {
  if (sub && (sub.role === "admin" || sub.role === "teacher")) return "platinum";
  if (!sub || !sub.isActive) return "free";
  return tierOfPlan(sub.plan);
}

export function hasTier(sub: SubLike, tier: Tier): boolean {
  return TIER_RANK[effectiveTier(sub)] >= TIER_RANK[tier];
}

export function hasFeature(sub: SubLike, feature: Feature): boolean {
  return TIER_RANK[effectiveTier(sub)] >= TIER_RANK[FEATURE_MIN_TIER[feature]];
}

/** Load the current user's plan + a convenient entitlement checker. */
export async function loadPlan() {
  const sub = await getSubscriptionInfo();
  return {
    sub,
    tier: effectiveTier(sub),
    has: (f: Feature) => hasFeature(sub, f),
    atLeast: (t: Tier) => hasTier(sub, t),
  };
}
