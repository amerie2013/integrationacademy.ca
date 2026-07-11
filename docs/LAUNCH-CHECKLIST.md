# Launch Checklist — integrationacademy.ca

Two parts: **✅ Done in the code** (verified, nothing for you to do) and
**👉 You do next** (operational steps that need your Vercel / Supabase / Stripe
accounts and DNS — I can't do these from here). The "You do next" list is in
priority order; do them top to bottom.

---

## ✅ Done in the code (verified)

- **Legal & marketing pages** — `/terms`, `/privacy`, `/refund-policy`, `/about`, `/contact`, plus a site footer linking to them.
- **SEO** — `app/robots.ts`, `app/sitemap.ts`, and OG/meta/favicon in `app/layout.tsx`.
- **Error UX** — custom 404 (`app/not-found.tsx`) and error boundary (`app/error.tsx`).
- **Security headers** — `next.config.ts` (HSTS, X-Frame-Options SAMEORIGIN, nosniff, Referrer-Policy, Permissions-Policy).
- **Security/RLS review** — `docs/RLS-REVIEW.md`; the fixes are in migration `2026-06-27_security_fixes.sql` (you run it — see step 1).
- **Analytics** — Vercel Analytics wired in (activates once deployed; turn it on in the Vercel dashboard).
- **Rate-limiting** — `lib/rateLimit.ts` on the Stripe checkout/portal routes (10/min/IP). Webhook is signature-protected.
- **Build health** — `tsc` is clean (0 errors).
- **Billing code** — Stripe checkout/portal/webhook routes + pricing page.

---

## 👉 You do next (in this order)

### 1. Run the new SQL migrations (most important — security)
In Supabase → SQL Editor, run, in order:
1. `supabase/migrations/2026-06-27_security_fixes.sql` — **closes a critical hole** where any logged-in user could make themselves an admin or grant themselves a paid plan.
2. `supabase/migrations/2026-06-27_teacher_quiz_questions.sql` — limits teachers to add/remove (not rewrite) questions in their own class quizzes.
3. `supabase/migrations/2026-06-27_classes_and_paywall.sql` — lets teachers create their own classes, and gates course content on **active subscription OR class membership** (class students are free). **Required** for both the teacher "Create class" button and the paywall to actually work.
4. (Confirm the rest of `supabase/migrations/` are applied — they are, per my check.)

### 2. Decide the paywall (product decision — see RLS-REVIEW.md §2)
Right now **any signed-in user can self-enrol and read paid content for free** — the subscription is only enforced in the UI, not the database. Decide:
- **Keep open / freemium** → do nothing, or
- **Gate on subscription** → I add a small policy/migration so content requires `subscription_status = 'active'` (or a free-course flag). Tell me which and I'll write it.

### 3. Deploy to Vercel
- Push to GitHub, import into Vercel (Next.js auto-detected).
- Set every variable from `.env.example` (Production + Preview), including `NEXT_PUBLIC_APP_URL=https://integrationacademy.ca`.
- Add the domain `integrationacademy.ca` (+ `www`) and update DNS at your registrar.
- Turn on **Analytics** and confirm **Database backups** (Supabase → Database → Backups).

### 4. Configure Supabase auth for the live domain
- Auth → URL Configuration: Site URL `https://integrationacademy.ca`, redirect URLs `https://integrationacademy.ca/**` (otherwise email confirm / `/verify-email` / password reset break).
- Auth → Email templates: brand the confirm-signup + reset-password emails; verify the sender domain (consider custom SMTP for volume).

### 5. Stripe — go live
- Switch dashboard to **Live mode**.
- Create the 4 products/prices (student & tutor × monthly & annual); copy the **live** price IDs into `STRIPE_PRICE_*`, and the live `STRIPE_SECRET_KEY`.
- Developers → Webhooks: add `https://integrationacademy.ca/api/stripe/webhook`, events `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`; copy the signing secret into `STRIPE_WEBHOOK_SECRET`.
- Run one real test purchase; confirm `profiles.subscription_*` updates and the billing portal opens.

### 6. End-to-end QA on the live site
- **Student:** sign up → confirm email → subscribe → enrol → lesson (graphs render) → quiz (auto-grades) → assignment → `/progress`.
- **Teacher:** claim a class → reorder/lock content → build a quiz from the bank → grade a submission.
- **Admin:** author/edit a lesson, quiz, assignment.
- Spot-check footer legal links, the 404 page, and mobile layout.

### 7. Housekeeping
- Free disk space on the **E: drive** (it hit 100% during dev) before any local production build.
- Optional later: Upstash for cross-instance rate-limits; a tested Content-Security-Policy.

---

*Not a gap, for reference:* teachers are **view-only** by design (admins grade) — that's intentional, not missing.
