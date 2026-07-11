-- Allow staff to WRITE grades & feedback. Run once in the Supabase SQL editor.
--
-- Background: the roles migration gave admin/teacher only SELECT on submissions and
-- quiz_attempts — there was no UPDATE policy, so saving a grade/feedback (assignment
-- grading UI) or manual quiz points was blocked by RLS. These policies fix that.
-- is_admin() is defined in 2026-06-15_roles.sql.

-- Assignment submissions: admin can grade.
drop policy if exists "admin updates submissions" on submissions;
create policy "admin updates submissions" on submissions
  for update using (is_admin()) with check (is_admin());

-- Quiz attempts: admin can award manual points / leave a comment.
drop policy if exists "admin updates attempts" on quiz_attempts;
create policy "admin updates attempts" on quiz_attempts
  for update using (is_admin()) with check (is_admin());
