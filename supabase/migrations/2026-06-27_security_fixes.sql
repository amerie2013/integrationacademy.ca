-- ============================================================
-- Security hardening — fixes from the RLS review (docs/RLS-REVIEW.md).
-- Safe to run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

-- ── FIX 1 (CRITICAL): privilege escalation via profile self-update ──
-- The base "own profile update" policy lets a user update their own row with no
-- column restriction, so a regular user could set role='admin' or grant
-- themselves subscription_status='active'. RLS can't restrict columns, so we
-- freeze the sensitive columns with a BEFORE UPDATE trigger. Admins (is_admin())
-- and the service role (Stripe webhook / seed scripts) may still change them.
create or replace function protect_profile_columns()
returns trigger language plpgsql as $$
begin
  -- current_user is the DB role: 'service_role'/'postgres'/'supabase_admin'
  -- for trusted server contexts; 'authenticated' for normal app users.
  if current_user in ('service_role', 'postgres', 'supabase_admin', 'supabase_auth_admin') or is_admin() then
    return new;
  end if;
  new.role                    := old.role;
  new.subscription_status     := old.subscription_status;
  new.subscription_plan       := old.subscription_plan;
  new.subscription_expires_at := old.subscription_expires_at;
  new.stripe_customer_id      := old.stripe_customer_id;
  return new;
end;
$$;

drop trigger if exists protect_profile_columns_trg on profiles;
create trigger protect_profile_columns_trg
  before update on profiles
  for each row execute function protect_profile_columns();

-- ── FIX 2 (MEDIUM): restrict admin-content storage writes to admins ──
-- These buckets hold admin-authored files; previously ANY authenticated user
-- could upload/overwrite. Service-role scripts bypass RLS, so publish jobs are
-- unaffected. The 'submissions' bucket stays open to authenticated (students
-- upload their own work).
drop policy if exists "auth upload materials" on storage.objects;
create policy "admin upload materials" on storage.objects
  for insert to authenticated with check (bucket_id = 'materials' and is_admin());
drop policy if exists "auth update materials" on storage.objects;
create policy "admin update materials" on storage.objects
  for update to authenticated using (bucket_id = 'materials' and is_admin());
drop policy if exists "auth delete materials" on storage.objects;
create policy "admin delete materials" on storage.objects
  for delete to authenticated using (bucket_id = 'materials' and is_admin());

drop policy if exists "auth upload worksheet files" on storage.objects;
create policy "admin upload worksheet files" on storage.objects
  for insert to authenticated with check (bucket_id = 'worksheets' and is_admin());
drop policy if exists "auth update worksheet files" on storage.objects;
create policy "admin update worksheet files" on storage.objects
  for update to authenticated using (bucket_id = 'worksheets' and is_admin());

-- graph-images: lesson-builders (staff) only, not every student.
drop policy if exists "auth upload graph-images" on storage.objects;
create policy "staff upload graph-images" on storage.objects
  for insert to authenticated with check (bucket_id = 'graph-images' and is_staff());
drop policy if exists "auth update graph-images" on storage.objects;
create policy "staff update graph-images" on storage.objects
  for update to authenticated using (bucket_id = 'graph-images' and is_staff());

-- ── FIX 3 (LOW): students should only see PUBLISHED lessons ──
-- Defence in depth: enrolled students could read draft/unpublished lessons.
drop policy if exists "lessons readable" on lessons;
create policy "lessons readable" on lessons for select using (
  is_staff()
  or (lessons.published and exists (
        select 1 from enrollments e
        where e.course_id = lessons.course_id and e.student_id = auth.uid()))
);

-- NOTE (HIGH, decision required — NOT changed here): content access is gated by
-- self-serve enrollment, not by an active subscription. Any signed-in user can
-- insert their own enrollments and read all lessons/worksheets for free. If
-- courses are meant to be paid, gate enrollment or content reads on
-- subscription_status='active'. See docs/RLS-REVIEW.md §2.
