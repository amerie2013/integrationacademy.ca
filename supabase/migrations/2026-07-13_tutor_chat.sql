-- ============================================================
-- AI lesson tutor chat (DeepSeek). One thread per student per lesson.
-- Students read/write their own messages only. Admins can read all.
-- Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

create table if not exists tutor_threads (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references profiles (id) on delete cascade,
  lesson_id   uuid not null references lessons (id) on delete cascade,
  course_id   uuid references courses (id) on delete set null,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  unique (user_id, lesson_id)
);

create index if not exists tutor_threads_user_idx on tutor_threads (user_id);
create index if not exists tutor_threads_lesson_idx on tutor_threads (lesson_id);

create table if not exists tutor_messages (
  id          uuid primary key default gen_random_uuid(),
  thread_id   uuid not null references tutor_threads (id) on delete cascade,
  user_id     uuid not null references profiles (id) on delete cascade,
  lesson_id   uuid not null references lessons (id) on delete cascade,
  role        text not null check (role in ('user', 'assistant')),
  content     text not null,
  created_at  timestamptz not null default now()
);

create index if not exists tutor_messages_thread_idx on tutor_messages (thread_id, created_at);
create index if not exists tutor_messages_user_day_idx on tutor_messages (user_id, created_at)
  where role = 'user';

alter table tutor_threads enable row level security;
alter table tutor_messages enable row level security;

-- ── Threads ──
drop policy if exists "student reads own tutor threads" on tutor_threads;
create policy "student reads own tutor threads" on tutor_threads
  for select using (user_id = auth.uid());

drop policy if exists "admin reads tutor threads" on tutor_threads;
create policy "admin reads tutor threads" on tutor_threads
  for select using (is_admin());

-- Inserts/updates go through the API (service role) after auth checks.

-- ── Messages ──
drop policy if exists "student reads own tutor messages" on tutor_messages;
create policy "student reads own tutor messages" on tutor_messages
  for select using (user_id = auth.uid());

drop policy if exists "admin reads tutor messages" on tutor_messages;
create policy "admin reads tutor messages" on tutor_messages
  for select using (is_admin());
