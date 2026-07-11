-- ============================================================
-- Tighten class-quiz question permissions to match the UI.
--
-- Before: a class teacher had FOR ALL on quiz_questions of their class quizzes,
-- so the API allowed UPDATING an existing question's text/answer (even though no
-- UI exposes that). The intended model is: teachers ASSEMBLE quizzes from the
-- admin-authored bank (insert snapshots) and delete/rebuild — never rewrite a
-- question. This replaces FOR ALL with INSERT + DELETE only (no UPDATE).
--
-- The build flow (insert bank snapshots) and delete/rebuild both still work.
-- Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

drop policy if exists "teacher writes class quiz questions" on quiz_questions;
drop policy if exists "teacher inserts class quiz questions" on quiz_questions;
drop policy if exists "teacher deletes class quiz questions" on quiz_questions;

create policy "teacher inserts class quiz questions" on quiz_questions
  for insert
  with check (exists (
    select 1 from quizzes q
    where q.id = quiz_questions.quiz_id and q.class_id is not null and is_class_teacher(q.class_id)
  ));

create policy "teacher deletes class quiz questions" on quiz_questions
  for delete
  using (exists (
    select 1 from quizzes q
    where q.id = quiz_questions.quiz_id and q.class_id is not null and is_class_teacher(q.class_id)
  ));

-- Note: teachers keep FOR ALL on the quizzes row itself (title/settings/delete of
-- their own class quizzes) — only the QUESTIONS are now add/remove-only for them.
-- Admins retain full control via the existing "admin writes quiz questions" policy.
