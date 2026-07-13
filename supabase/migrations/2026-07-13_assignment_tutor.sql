-- ============================================================
-- Assignment "hint" tutor: a stricter, hint-only tutor teachers can enable on
-- an assignment. It never gives full solutions, and assignments have no stored
-- answer key, so there is nothing for it to leak.
-- Extends the tutor tables to also key on an assignment (not just a lesson).
-- Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

-- Per-assignment teacher toggle (off by default; teachers opt in).
alter table assignments
  add column if not exists tutor_enabled boolean not null default false;

-- Tutor threads/messages may now belong to an assignment instead of a lesson.
alter table tutor_threads alter column lesson_id drop not null;
alter table tutor_threads add column if not exists assignment_id uuid references assignments (id) on delete cascade;

alter table tutor_messages alter column lesson_id drop not null;
alter table tutor_messages add column if not exists assignment_id uuid references assignments (id) on delete cascade;

-- One thread per student per assignment (partial: lesson threads keep their own
-- unique (user_id, lesson_id) constraint).
create unique index if not exists tutor_threads_user_assignment_uidx
  on tutor_threads (user_id, assignment_id) where assignment_id is not null;
create index if not exists tutor_threads_assignment_idx on tutor_threads (assignment_id);
create index if not exists tutor_messages_assignment_idx on tutor_messages (assignment_id);

-- RLS unchanged: existing "own rows" (user_id = auth.uid()) and admin policies
-- already cover assignment rows.

-- Refresh the API schema cache so the new columns are usable immediately.
notify pgrst, 'reload schema';
