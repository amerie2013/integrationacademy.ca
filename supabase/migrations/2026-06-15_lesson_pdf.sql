-- Adds downloadable PDF support to lessons.
-- Run this in the Supabase SQL Editor (safe to run once).

-- 1. Columns on lessons
alter table lessons add column if not exists pdf_url  text;
alter table lessons add column if not exists pdf_name text;

-- 2. Public storage bucket for lesson PDFs
insert into storage.buckets (id, name, public)
values ('lesson-pdfs', 'lesson-pdfs', true)
on conflict (id) do nothing;

-- 3. Storage policies: anyone can read; signed-in users can upload/update
drop policy if exists "public read lesson pdfs" on storage.objects;
create policy "public read lesson pdfs" on storage.objects
  for select using (bucket_id = 'lesson-pdfs');

drop policy if exists "auth upload lesson pdfs" on storage.objects;
create policy "auth upload lesson pdfs" on storage.objects
  for insert to authenticated with check (bucket_id = 'lesson-pdfs');

drop policy if exists "auth update lesson pdfs" on storage.objects;
create policy "auth update lesson pdfs" on storage.objects
  for update to authenticated using (bucket_id = 'lesson-pdfs');
