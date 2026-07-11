-- ============================================================
-- Let a CLASS TEACHER grade their OWN students' work.
--
-- Background: the roles migration (2026-06-15_roles.sql) gave teachers SELECT on
-- `submissions` and `quiz_attempts` for their class students (via teaches_student()),
-- and the grading migration (2026-06-16_grading.sql) added UPDATE policies for
-- ADMINS only. So a non-admin class teacher could VIEW their students' attempts and
-- submissions but not save a grade / manual quiz points / feedback (RLS blocked it).
--
-- These two policies add matching UPDATE access scoped to the teacher's own students
-- (teaches_student(student_id) — a class the teacher owns contains that student).
-- teaches_student() is a SECURITY DEFINER helper defined in 2026-06-15_roles.sql.
--
-- Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

-- Assignment submissions: a class teacher can grade their own students.
drop policy if exists "teacher updates class submissions" on submissions;
create policy "teacher updates class submissions" on submissions
  for update using (teaches_student(student_id)) with check (teaches_student(student_id));

-- Quiz attempts: a class teacher can award manual points / leave a comment
-- for their own students.
drop policy if exists "teacher updates class attempts" on quiz_attempts;
create policy "teacher updates class attempts" on quiz_attempts
  for update using (teaches_student(student_id)) with check (teaches_student(student_id));
