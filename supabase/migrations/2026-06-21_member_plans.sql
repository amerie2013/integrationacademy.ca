-- Let admins view all members and grant/adjust their plan (Gold/Platinum comps,
-- manual sales, support, and testing before Stripe is live). is_admin() comes
-- from 2026-06-15_roles.sql. Plans live in the existing profiles columns
-- (subscription_plan / subscription_status / subscription_expires_at) — no new
-- columns needed.
drop policy if exists "admin reads profiles" on profiles;
create policy "admin reads profiles" on profiles
  for select using (is_admin());

drop policy if exists "admin updates profiles" on profiles;
create policy "admin updates profiles" on profiles
  for update using (is_admin()) with check (is_admin());
