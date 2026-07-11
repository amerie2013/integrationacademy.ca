-- Saved + live-shareable teaching whiteboards. Run once in the Supabase SQL editor.
create table if not exists whiteboards (
  id          uuid primary key default gen_random_uuid(),
  owner_id    uuid not null references profiles (id) on delete cascade,
  title       text not null default 'Untitled board',
  data        jsonb not null default '{}'::jsonb,
  is_live     boolean not null default false,
  updated_at  timestamptz not null default now()
);
create index if not exists whiteboards_owner_idx on whiteboards (owner_id, updated_at desc);

alter table whiteboards enable row level security;

-- Owner can do everything with their own boards.
drop policy if exists "wb owner all" on whiteboards;
create policy "wb owner all" on whiteboards
  for all using (owner_id = auth.uid()) with check (owner_id = auth.uid());

-- Anyone (incl. students via a share link) can READ a board while it is live.
drop policy if exists "wb read live" on whiteboards;
create policy "wb read live" on whiteboards
  for select using (is_live or owner_id = auth.uid());

-- Enable Realtime so live viewers receive UPDATEs (idempotent).
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'whiteboards'
  ) then
    alter publication supabase_realtime add table whiteboards;
  end if;
end $$;
