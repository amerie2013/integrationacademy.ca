-- ============================================================
-- Close the storage paywall hole: the worksheets / materials / lesson-pdfs
-- buckets were PUBLIC, so the PDF files were downloadable by direct URL even
-- though the table rows were access-gated. Make them PRIVATE and gate downloads
-- by course_access, matching the per-course paywall. The app now serves these
-- via short-lived SIGNED urls (lib/storage.ts), which are RLS-checked.
--
-- Paths: worksheets = '<course_id>/<file>'; lesson-pdfs = '<lesson_id>/<file>';
-- materials = '<owner_type>/<owner_id>/<file>'. Uploads are unaffected (admins
-- upload; service-role publish scripts bypass RLS).
--
-- Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

update storage.buckets set public = false where id in ('worksheets', 'materials', 'lesson-pdfs');

-- worksheets: first path folder is the course_id
drop policy if exists "read worksheets files" on storage.objects;
create policy "read worksheets files" on storage.objects for select to authenticated using (
  bucket_id = 'worksheets'
  and (is_admin() or course_access(((storage.foldername(name))[1])::uuid))
);

-- lesson-pdfs: first path folder is the lesson id → its course
drop policy if exists "read lesson-pdfs files" on storage.objects;
create policy "read lesson-pdfs files" on storage.objects for select to authenticated using (
  bucket_id = 'lesson-pdfs'
  and (is_admin() or course_access(
        (select l.course_id from lessons l where l.id = ((storage.foldername(name))[1])::uuid)))
);

-- materials: '<owner_type>/<owner_id>/...' → map the owner to its course
create or replace function storage_material_course(objname text) returns uuid
  language sql stable set search_path = public as $$
  select case (storage.foldername(objname))[1]
    when 'lesson'     then (select course_id from lessons     where id = ((storage.foldername(objname))[2])::uuid)
    when 'assignment' then (select course_id from assignments where id = ((storage.foldername(objname))[2])::uuid)
    when 'quiz'       then (select course_id from quizzes     where id = ((storage.foldername(objname))[2])::uuid)
    else null end;
$$;

drop policy if exists "read materials files" on storage.objects;
create policy "read materials files" on storage.objects for select to authenticated using (
  bucket_id = 'materials'
  and (is_admin() or course_access(storage_material_course(name)))
);
