-- Let a CLASS teacher open their students' submitted files.
--
-- The read policy from 2026-07-27 recognised the file's owner (student), the
-- COURSE owner, and admins — but not a class teacher who isn't the course owner.
-- On .ca the admin owns the courses while teachers run classes, so class
-- teachers were grading blind: they could see the typed answer and enter a
-- grade, but the attached photo/PDF wouldn't open.
--
-- Add a clause mirroring the existing "teacher reads class submissions" table
-- policy: a submitted file has a submissions row whose file_url points at it, so
-- match that row and check teaches_student() (class membership). Identifying the
-- student via the row (not the path) avoids casting the filename prefix.

drop policy if exists "read submissions files" on storage.objects;
create policy "read submissions files" on storage.objects for select to authenticated using (
  bucket_id = 'submissions' and (
    is_admin()
    -- the student who uploaded it (path prefix; works at upload time, pre-submit)
    or left(split_part(name, '/', 2), 36) = auth.uid()::text
    -- the course owner
    or exists (
      select 1 from assignments a join courses c on c.id = a.course_id
      where a.id = ((storage.foldername(name))[1])::uuid
        and c.teacher_id = auth.uid()
    )
    -- the class teacher of the student who submitted this file
    or exists (
      select 1 from submissions s
      where s.assignment_id = ((storage.foldername(name))[1])::uuid
        and position(name in coalesce(s.file_url, '')) > 0
        and teaches_student(s.student_id)
    )
  )
);

notify pgrst, 'reload schema';
