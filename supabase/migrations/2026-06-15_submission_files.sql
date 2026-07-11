-- Allow file attachments on assignment submissions. Run once.

alter table submissions add column if not exists file_url  text;
alter table submissions add column if not exists file_name text;

insert into storage.buckets (id, name, public)
values ('submissions', 'submissions', true)
on conflict (id) do nothing;

drop policy if exists "auth upload submissions" on storage.objects;
create policy "auth upload submissions" on storage.objects
  for insert to authenticated with check (bucket_id = 'submissions');

drop policy if exists "auth update submissions" on storage.objects;
create policy "auth update submissions" on storage.objects
  for update to authenticated using (bucket_id = 'submissions');

drop policy if exists "read submissions files" on storage.objects;
create policy "read submissions files" on storage.objects
  for select using (bucket_id = 'submissions');
