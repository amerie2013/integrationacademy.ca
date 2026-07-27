-- FIX: student uploads fail with "new row violates row-level security policy".
--
-- Root cause (introduced by 2026-07-24_private_submissions.sql): the SELECT
-- policy identified a student's own submission file by joining to a matching
-- `submissions` table row. Supabase's uploader inserts the object with a
-- RETURNING clause, so the uploader must also pass the SELECT policy on the
-- just-created row. But at upload time there is no submissions row yet — that's
-- written when the student clicks Submit — so the read-back was denied and
-- surfaced (misleadingly) as an INSERT RLS violation.
--
-- Fix: identify the owner by PATH, which is known at upload time. Objects are
-- stored at `{assignmentId}/{studentId}-{ts}-{name}`, so the owning student's
-- uid is the 36-char prefix of the filename. Privacy is unchanged: owner +
-- course teacher + admin. This also lets a student preview their own file
-- immediately after upload (before Submit), which the old policy blocked.

drop policy if exists "read submissions files" on storage.objects;
create policy "read submissions files" on storage.objects for select to authenticated using (
  bucket_id = 'submissions' and (
    is_admin()
    -- the student who uploaded it: their uid prefixes the filename
    or left(split_part(name, '/', 2), 36) = auth.uid()::text
    -- the teacher who owns the course this assignment belongs to
    or exists (
      select 1 from assignments a join courses c on c.id = a.course_id
      where a.id = ((storage.foldername(name))[1])::uuid
        and c.teacher_id = auth.uid()
    )
  )
);

notify pgrst, 'reload schema';
