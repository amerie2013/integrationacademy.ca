-- PDF / file "materials" for lessons, assignments, and quizzes. Run once in the
-- Supabase SQL editor. Each item can have ONE 'main' PDF (shown in an embedded
-- viewer) plus any number of 'attachment' files (downloads). is_admin() is
-- defined in 2026-06-15_roles.sql.

create table if not exists materials (
  id          uuid primary key default gen_random_uuid(),
  owner_type  text not null check (owner_type in ('lesson','assignment','quiz')),
  owner_id    uuid not null,
  kind        text not null default 'attachment' check (kind in ('main','attachment')),
  url         text not null,
  name        text,
  size_bytes  bigint,
  position    int  not null default 0,
  created_at  timestamptz not null default now()
);
create index if not exists materials_owner_idx on materials (owner_type, owner_id);

alter table materials enable row level security;

drop policy if exists "materials readable" on materials;
create policy "materials readable" on materials for select using (true);

drop policy if exists "admin writes materials" on materials;
create policy "admin writes materials" on materials for all using (is_admin()) with check (is_admin());

-- public storage bucket for the uploaded files
insert into storage.buckets (id, name, public) values ('materials', 'materials', true)
  on conflict (id) do nothing;

drop policy if exists "auth upload materials" on storage.objects;
create policy "auth upload materials" on storage.objects
  for insert to authenticated with check (bucket_id = 'materials');

drop policy if exists "auth update materials" on storage.objects;
create policy "auth update materials" on storage.objects
  for update to authenticated using (bucket_id = 'materials');

drop policy if exists "auth delete materials" on storage.objects;
create policy "auth delete materials" on storage.objects
  for delete to authenticated using (bucket_id = 'materials');

drop policy if exists "read materials files" on storage.objects;
create policy "read materials files" on storage.objects
  for select using (bucket_id = 'materials');
