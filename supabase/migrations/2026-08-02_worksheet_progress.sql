-- ============================================================
-- Worksheet activity tracking (mirrors 2026-07-06_lesson_progress.sql).
--
-- Records, per student per worksheet: how many times they opened it and when
-- they first/last viewed it. Feeds the "worksheets read" component of the
-- teacher's per-student OVERALL GRADE (student activity page). We can only
-- observe that a worksheet was OPENED, not that it was truly read.
--
-- Writes go through a SECURITY DEFINER RPC that acts on auth.uid() and safely
-- INCREMENTS the count. RLS governs READS: a student sees their own, a class
-- teacher sees their students (teaches_student), an admin sees all. Helpers
-- is_admin() / teaches_student() are defined in 2026-06-15_roles.sql.
--
-- Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

create table if not exists worksheet_progress (
  id              uuid primary key default gen_random_uuid(),
  student_id      uuid not null references profiles (id) on delete cascade,
  worksheet_id    uuid not null references worksheets (id) on delete cascade,
  course_id       uuid references courses (id) on delete cascade,
  view_count      int not null default 0,
  first_viewed_at timestamptz not null default now(),
  last_viewed_at  timestamptz not null default now(),
  unique (student_id, worksheet_id)
);

alter table worksheet_progress enable row level security;

-- ── READ policies ──
drop policy if exists "student reads own worksheet progress" on worksheet_progress;
create policy "student reads own worksheet progress" on worksheet_progress
  for select using (student_id = auth.uid());

drop policy if exists "teacher reads class worksheet progress" on worksheet_progress;
create policy "teacher reads class worksheet progress" on worksheet_progress
  for select using (teaches_student(student_id));

drop policy if exists "admin reads worksheet progress" on worksheet_progress;
create policy "admin reads worksheet progress" on worksheet_progress
  for select using (is_admin());

-- Writes are performed by the SECURITY DEFINER function below.

-- ── record a view (upsert, incrementing the count) ──
create or replace function record_worksheet_view(p_worksheet uuid) returns void
  language plpgsql security definer set search_path = public as $$
declare v_course uuid;
begin
  if auth.uid() is null then return; end if;
  select course_id into v_course from worksheets where id = p_worksheet;
  insert into worksheet_progress (student_id, worksheet_id, course_id, view_count)
    values (auth.uid(), p_worksheet, v_course, 1)
  on conflict (student_id, worksheet_id) do update
    set view_count     = worksheet_progress.view_count + 1,
        last_viewed_at = now(),
        course_id      = coalesce(worksheet_progress.course_id, excluded.course_id);
end; $$;

grant execute on function record_worksheet_view(uuid) to authenticated;
