-- Saved calculator figures, referenced by a short id in embed links so the
-- iframe URL stays tiny even when the figure contains uploaded images.
create table if not exists public.graphs (
  id uuid primary key default gen_random_uuid(),
  data jsonb not null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.graphs enable row level security;

-- Anyone can READ a saved figure, so embedded iframes load for every student.
drop policy if exists "graphs public read" on public.graphs;
create policy "graphs public read" on public.graphs for select using (true);

-- Only signed-in users (teachers/admins building lessons) can CREATE figures.
drop policy if exists "graphs insert auth" on public.graphs;
create policy "graphs insert auth" on public.graphs for insert with check (auth.uid() is not null);
