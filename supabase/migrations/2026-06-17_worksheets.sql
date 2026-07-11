-- "Worksheets" — printable PDF practice sets that live as their own group in a
-- course (alongside Lessons / Assignments / Quizzes). Each row has a main
-- worksheet PDF and an answer-key / compact PDF. Run once in the Supabase SQL
-- editor. is_admin() comes from 2026-06-15_roles.sql.

create table if not exists worksheets (
  id             uuid primary key default gen_random_uuid(),
  course_id      uuid not null references courses (id) on delete cascade,
  code           text not null,
  title          text not null,
  position       int  not null default 0,
  worksheet_url  text,
  worksheet_name text,
  answers_url    text,
  answers_name   text,
  published      boolean not null default true,
  created_at     timestamptz not null default now(),
  unique (course_id, code)
);
create index if not exists worksheets_idx on worksheets (course_id, position);

alter table worksheets enable row level security;

drop policy if exists "worksheets readable" on worksheets;
create policy "worksheets readable" on worksheets
  for select using (published or is_admin());

drop policy if exists "admin writes worksheets" on worksheets;
create policy "admin writes worksheets" on worksheets
  for all using (is_admin()) with check (is_admin());

-- public storage bucket for the PDF files
insert into storage.buckets (id, name, public) values ('worksheets', 'worksheets', true)
  on conflict (id) do nothing;

drop policy if exists "read worksheet files" on storage.objects;
create policy "read worksheet files" on storage.objects
  for select using (bucket_id = 'worksheets');

drop policy if exists "auth upload worksheet files" on storage.objects;
create policy "auth upload worksheet files" on storage.objects
  for insert to authenticated with check (bucket_id = 'worksheets');

drop policy if exists "auth update worksheet files" on storage.objects;
create policy "auth update worksheet files" on storage.objects
  for update to authenticated using (bucket_id = 'worksheets');
