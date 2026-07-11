-- ============================================================
-- Class announcements + teacher-assigned homework.
--
-- 1) announcements: a class teacher (or admin) posts a note to a class; class
--    members read it. 2) assignments gain class_id + created_by so a teacher can
--    create homework scoped to THEIR class (with a due_date), not just admins.
--    Course-wide assignments keep class_id = NULL.
--
-- Helpers is_admin() / is_staff() / is_class_teacher() / is_class_member() are in
-- 2026-06-15_roles.sql. Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

-- ── Announcements ──
create table if not exists announcements (
  id         uuid primary key default gen_random_uuid(),
  class_id   uuid not null references classes (id) on delete cascade,
  author_id  uuid references profiles (id) on delete set null,
  body       text not null,
  created_at timestamptz not null default now()
);
alter table announcements enable row level security;

drop policy if exists "class staff write announcements" on announcements;
create policy "class staff write announcements" on announcements
  for all using (is_class_teacher(class_id) or is_admin())
  with check (is_class_teacher(class_id) or is_admin());

drop policy if exists "class members read announcements" on announcements;
create policy "class members read announcements" on announcements
  for select using (is_class_member(class_id) or is_class_teacher(class_id) or is_admin());

create index if not exists announcements_class_idx on announcements (class_id, created_at desc);

-- ── Teacher-assigned homework: scope assignments to a class ──
alter table assignments add column if not exists class_id   uuid references classes (id) on delete cascade;
alter table assignments add column if not exists created_by uuid references profiles (id) on delete set null;

-- Read: staff read all; course-wide assignments (class_id null) for enrolled
-- students; class-specific assignments only for that class's members (no cross-
-- class leakage).
drop policy if exists "assignments readable" on assignments;
create policy "assignments readable" on assignments for select using (
  is_staff()
  or (class_id is null and exists (
        select 1 from enrollments e where e.course_id = assignments.course_id and e.student_id = auth.uid()))
  or (class_id is not null and is_class_member(class_id))
);

-- Write: a class teacher can create/edit/delete assignments for their own class.
-- (Admins keep full control via the existing "admin writes assignments" policy.)
drop policy if exists "teacher writes class assignments" on assignments;
create policy "teacher writes class assignments" on assignments
  for all using (class_id is not null and is_class_teacher(class_id))
  with check (class_id is not null and is_class_teacher(class_id));
