// Lightweight in-memory rate limiter (fixed window). Best-effort: state lives
// per server instance, so on serverless (Vercel) it limits within a warm
// instance but is NOT shared across instances or guaranteed across cold starts.
// It still blunts rapid abuse of sensitive POST routes from a single client.
// For strict, cross-instance limits, swap this for @upstash/ratelimit + Redis.

type Hit = { count: number; resetAt: number };
const buckets = new Map<string, Hit>();

export function rateLimit(key: string, limit: number, windowMs: number): { ok: boolean; retryAfter: number } {
  const now = Date.now();

  // Opportunistic cleanup so the Map can't grow without bound.
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) if (now > v.resetAt) buckets.delete(k);
  }

  const b = buckets.get(key);
  if (!b || now > b.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfter: 0 };
  }
  b.count++;
  if (b.count > limit) return { ok: false, retryAfter: Math.ceil((b.resetAt - now) / 1000) };
  return { ok: true, retryAfter: 0 };
}

// Best-effort client identity from proxy headers (Vercel sets x-forwarded-for).
export function clientKey(req: Request): string {
  const h = req.headers;
  const xff = h.get("x-forwarded-for") ?? "";
  return xff.split(",")[0].trim() || h.get("x-real-ip") || "unknown";
}
