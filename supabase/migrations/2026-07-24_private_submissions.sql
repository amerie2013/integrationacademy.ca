-- Student assignment uploads were left in a PUBLIC bucket when the other content
-- buckets (worksheets, materials, lesson-pdfs) were locked down on 2026-07-06.
-- That meant anyone with (or guessing) a URL could open another student's
-- submitted homework without signing in. Close it: private bucket, reads limited
-- to the file's owner, the course's teacher, and admins.
--
-- Objects are stored at `{assignmentId}/{studentId}-{ts}-{name}`, so the first
-- path segment is the assignment id — the same foldername()[1] trick the other
-- private-bucket policies use.

update storage.buckets set public = false where id = 'submissions';

drop policy if exists "read submissions files" on storage.objects;
create policy "read submissions files" on storage.objects for select to authenticated using (
  bucket_id = 'submissions' and (
    is_admin()
    -- The student who uploaded it: one of their submission rows points at this
    -- exact object. position() (not LIKE) so the sanitiser's underscores can't
    -- act as wildcards.
    or exists (
      select 1 from submissions s
      where s.assignment_id = ((storage.foldername(name))[1])::uuid
        and s.student_id = auth.uid()
        and position(name in coalesce(s.file_url, '')) > 0
    )
    -- The teacher who owns the course this assignment belongs to (mirrors the
    -- existing "teacher reads submissions" table policy).
    or exists (
      select 1 from assignments a join courses c on c.id = a.course_id
      where a.id = ((storage.foldername(name))[1])::uuid
        and c.teacher_id = auth.uid()
    )
  )
);

notify pgrst, 'reload schema';
