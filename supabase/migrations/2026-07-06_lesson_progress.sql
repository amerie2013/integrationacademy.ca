-- ============================================================
-- Lesson activity tracking.
--
-- Records, per student per lesson: how many times they opened it, when they
-- first/last viewed it, and whether they marked it complete. Powers the teacher's
-- per-student activity page ("which lessons has this student worked through").
--
-- Writes go through two SECURITY DEFINER RPCs (so a view safely INCREMENTS the
-- count and preserves first_viewed_at, and completion is a simple toggle) that act
-- on auth.uid(). RLS governs READS: a student sees their own, a class teacher sees
-- their students (teaches_student), an admin sees all. Helpers is_admin() /
-- teaches_student() are defined in 2026-06-15_roles.sql.
--
-- Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

create table if not exists lesson_progress (
  id              uuid primary key default gen_random_uuid(),
  student_id      uuid not null references profiles (id) on delete cascade,
  lesson_id       uuid not null references lessons (id) on delete cascade,
  course_id       uuid references courses (id) on delete cascade,
  view_count      int not null default 0,
  first_viewed_at timestamptz not null default now(),
  last_viewed_at  timestamptz not null default now(),
  completed       boolean not null default false,
  completed_at    timestamptz,
  unique (student_id, lesson_id)
);

alter table lesson_progress enable row level security;

-- ── READ policies ──
drop policy if exists "student reads own progress" on lesson_progress;
create policy "student reads own progress" on lesson_progress
  for select using (student_id = auth.uid());

drop policy if exists "teacher reads class progress" on lesson_progress;
create policy "teacher reads class progress" on lesson_progress
  for select using (teaches_student(student_id));

drop policy if exists "admin reads progress" on lesson_progress;
create policy "admin reads progress" on lesson_progress
  for select using (is_admin());

-- Writes are performed by the SECURITY DEFINER functions below (no direct
-- client INSERT/UPDATE policy needed).

-- ── record a view (upsert, incrementing the count) ──
create or replace function record_lesson_view(p_lesson uuid) returns void
  language plpgsql security definer set search_path = public as $$
declare v_course uuid;
begin
  if auth.uid() is null then return; end if;
  select course_id into v_course from lessons where id = p_lesson;
  insert into lesson_progress (student_id, lesson_id, course_id, view_count)
    values (auth.uid(), p_lesson, v_course, 1)
  on conflict (student_id, lesson_id) do update
    set view_count     = lesson_progress.view_count + 1,
        last_viewed_at = now(),
        course_id      = coalesce(lesson_progress.course_id, excluded.course_id);
end; $$;

-- ── set / clear the completion flag ──
create or replace function set_lesson_complete(p_lesson uuid, p_done boolean) returns void
  language plpgsql security definer set search_path = public as $$
declare v_course uuid;
begin
  if auth.uid() is null then return; end if;
  select course_id into v_course from lessons where id = p_lesson;
  insert into lesson_progress (student_id, lesson_id, course_id, view_count, completed, completed_at)
    values (auth.uid(), p_lesson, v_course, 0, p_done, case when p_done then now() else null end)
  on conflict (student_id, lesson_id) do update
    set completed    = p_done,
        completed_at = case when p_done then now() else null end;
end; $$;

grant execute on function record_lesson_view(uuid) to authenticated;
grant execute on function set_lesson_complete(uuid, boolean) to authenticated;
