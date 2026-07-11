# Security / RLS Review — integrationacademy.ca

Reviewed: June 27, 2026. Scope: Supabase row-level security across `supabase/schema.sql`
and all migrations, plus server-side key handling and the Stripe webhook.

**Overall:** the model is sound — content writes are admin-only (`is_admin()`),
students own their own attempts/submissions, teachers are scoped to their class
students via `SECURITY DEFINER` helpers, the service-role key is server-only (no
client leak), and the Stripe webhook verifies signatures. The issues below were
found; fixes for the safe ones are in `supabase/migrations/2026-06-27_security_fixes.sql`.

---

## 🔴 CRITICAL — privilege escalation via profile self-update  → FIXED
**Where:** `schema.sql` `own profile update` policy: `for update using (auth.uid() = id)` with no `with check` / column restriction.
**Risk:** RLS controls *which rows* a user may update, not *which columns*. A logged-in user could run `update profiles set role='admin' where id = auth.uid()` and become an admin (full content control), or set `subscription_status='active'` / `subscription_plan` to grant themselves a paid plan for free.
**Fix (applied in migration):** a `BEFORE UPDATE` trigger (`protect_profile_columns`) freezes `role`, `subscription_status`, `subscription_plan`, `subscription_expires_at`, and `stripe_customer_id` for normal users. Admins (`is_admin()`) and the service role (Stripe webhook, seed scripts) can still change them, so the member-plans admin UI and billing keep working.

## 🟠 HIGH — no server-side paywall (decision required, NOT auto-changed)
**Where:** `student enrolls self` allows inserting an enrollment for *any* course; `lessons/assignments/worksheets readable` gate on enrollment only, never on `subscription_status`.
**Risk:** any signed-in user can self-enroll in every course and read all lessons/worksheets without paying. The subscription is effectively enforced only in the UI, not the database.
**Why not auto-fixed:** this is a product decision — you may intend freemium, or to gate at checkout. If courses are paid, gate it at the DB:
- restrict self-enroll: `with check (student_id = auth.uid() and (<course is free> or exists(select 1 from profiles p where p.id = auth.uid() and p.subscription_status = 'active')))`, **or**
- add `and <subscriber check>` to the student branch of the `*_readable` content policies.
Add a `courses.is_free` flag if you want a free tier.

## 🟡 MEDIUM — over-permissive storage writes  → FIXED
**Where:** `materials`, `worksheets`, and `graph-images` buckets allowed `insert/update` (materials also `delete`) by **any** authenticated user.
**Risk:** a student could upload or overwrite files in these public buckets (abuse / hosting arbitrary files / clobbering legitimate PDFs).
**Fix (applied):** restricted `materials`/`worksheets` writes to `is_admin()` and `graph-images` writes to `is_staff()`. Service-role publish scripts bypass RLS, so they're unaffected. The `submissions` bucket intentionally stays open to authenticated users (students upload their own work).

## 🟡 LOW — enrolled students could read unpublished lessons  → FIXED
**Where:** `lessons readable` checked enrollment but not `published`.
**Fix (applied):** student branch now requires `lessons.published`. (Quizzes already gated on `published`; `quiz_questions` likewise.)

## 🟢 LOW / informational (no change needed)
- **Live whiteboards** are world-readable when `is_live = true` (`wb read live`), with no share-token check. Board IDs are unguessable UUIDs, so risk is low; add a token if boards may contain sensitive content.
- **`graphs` insert** is open to any authenticated user (saved calculator figures). Low-impact; consider a per-user rate limit if abused.
- **Class claiming**: any teacher can claim any unclaimed class (`teacher claims or manages class`). This matches the intended “teachers claim open classes” model — confirm it's desired vs. admin-assignment.
- **Two UPDATE policies on `profiles`** (`own profile update` + `admin updates profiles`) coexist; that's fine — the new trigger governs columns regardless of which policy admits the row.

## ✅ Verified good
- Content writes (`courses/lessons/quizzes/quiz_questions/assignments/worksheets/materials/bank_questions`) are `is_admin()`-only.
- `quiz_attempts` / `submissions`: students own their rows; staff read only their class students; admins grade via dedicated UPDATE policies.
- `SUPABASE_SERVICE_ROLE_KEY` appears only in server files (`app/api/stripe/*`, `lib/supabase-admin.ts`) — never in a `"use client"` module.
- Stripe webhook validates the signature with `stripe.webhooks.constructEvent`.
- `SECURITY DEFINER` helpers (`is_admin/is_staff/is_class_*/teaches_student/join_class`) all `set search_path = public` (prevents search-path hijacking).

---

### To apply
Run `supabase/migrations/2026-06-27_security_fixes.sql` in the Supabase SQL Editor.
Then decide on the HIGH paywall item above before launch if courses are paid.
