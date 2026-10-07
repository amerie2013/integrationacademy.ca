-- Foundations games (basic arithmetic fluency): one row per finished play session.
-- Students write their own rows straight from the browser (RLS: student_id must be
-- their own uid); teachers/admins read everything to spot who is weak at what.
--
-- `missed` holds a short list of {q, a} (prompt + correct answer) so a teacher can
-- see WHICH facts a student keeps missing, not just a percentage.

create table if not exists game_attempts (
  id          uuid primary key default gen_random_uuid(),
  student_id  uuid not null references profiles (id) on delete cascade,
  game        text not null,                       -- e.g. 'fact-heat', 'sign-flip', 'skill-check'
  level       int  not null default 1,             -- level the student finished on
  score       int  not null default 0,
  correct     int  not null default 0,
  total       int  not null default 0,
  avg_ms      int,                                 -- mean time per answer, ms
  missed      jsonb not null default '[]'::jsonb,
  played_at   timestamptz not null default now()
);
grant select on public.game_attempts to anon;
grant select, insert, update, delete on public.game_attempts to authenticated;
grant select, insert, update, delete on public.game_attempts to service_role;

create index if not exists game_attempts_student_idx on game_attempts (student_id, game, played_at desc);
create index if not exists game_attempts_played_idx on game_attempts (played_at desc);

alter table game_attempts enable row level security;

drop policy if exists "student inserts own game attempt" on game_attempts;
drop policy if exists "student reads own game attempts" on game_attempts;
drop policy if exists "staff reads game attempts" on game_attempts;

create policy "student inserts own game attempt" on game_attempts
  for insert with check (auth.uid() = student_id);

create policy "student reads own game attempts" on game_attempts
  for select using (auth.uid() = student_id);

create policy "staff reads game attempts" on game_attempts
  for select using (
    exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('teacher', 'admin'))
  );

notify pgrst, 'reload schema';
