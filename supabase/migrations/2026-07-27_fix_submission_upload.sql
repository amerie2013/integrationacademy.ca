-- FIX: student assignment uploads fail with
--   "new row violates row-level security policy"
--
-- The storage INSERT policy that lets a signed-in student upload to the
-- `submissions` bucket ended up missing or altered in the live DB. Re-establish
-- the full, correct set cleanly (drop-then-create, so it's safe to re-run).
--
-- Model: any authenticated user may WRITE to the submissions bucket (students
-- upload their own work); READS stay locked to the file's owner + the course
-- teacher + admins (from 2026-07-24). Uploads use upsert, so UPDATE needs a
-- matching with-check too.

-- INSERT — the one that was rejecting uploads.
drop policy if exists "auth upload submissions" on storage.objects;
create policy "auth upload submissions" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'submissions');

-- UPDATE — needed because .upload(..., { upsert: true }) overwrites on re-submit.
drop policy if exists "auth update submissions" on storage.objects;
create policy "auth update submissions" on storage.objects
  for update to authenticated
  using (bucket_id = 'submissions')
  with check (bucket_id = 'submissions');

-- SELECT — unchanged from 2026-07-24 (owner + course teacher + admin), restated
-- here so this file fully defines the bucket's policy set.
drop policy if exists "read submissions files" on storage.objects;
create policy "read submissions files" on storage.objects for select to authenticated using (
  bucket_id = 'submissions' and (
    is_admin()
    or exists (
      select 1 from submissions s
      where s.assignment_id = ((storage.foldername(name))[1])::uuid
        and s.student_id = auth.uid()
        and position(name in coalesce(s.file_url, '')) > 0
    )
    or exists (
      select 1 from assignments a join courses c on c.id = a.course_id
      where a.id = ((storage.foldername(name))[1])::uuid
        and c.teacher_id = auth.uid()
    )
  )
);

notify pgrst, 'reload schema';
