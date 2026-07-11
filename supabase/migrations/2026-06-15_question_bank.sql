-- ============================================================
-- Question bank: admins author/edit a pool of questions tagged by
-- topic + difficulty + type. Teachers pick from it to build class quizzes.
-- Run once in the Supabase SQL Editor.
-- ============================================================

create table if not exists bank_questions (
  id          uuid primary key default gen_random_uuid(),
  course_id   uuid references courses (id) on delete cascade,
  lesson_id   uuid references lessons (id) on delete set null,
  topic       text,                                  -- e.g. "1.1 Number Sets & Their Subsets"
  difficulty  text not null default 'medium',        -- easy | medium | hard
  -- single_choice | multiple_select | true_false | numeric |
  -- short_answer | fill_blank | matching | ordering
  kind        text not null,
  prompt      text not null,                         -- supports $LaTeX$
  image_url   text,
  choices     jsonb,
  answer      jsonb,
  tolerance   numeric,
  points      numeric not null default 1,
  feedback    text,
  created_at  timestamptz not null default now()
);

-- staff = admin or teacher
create or replace function is_staff() returns boolean
  language sql security definer stable set search_path = public as $$
  select exists (select 1 from profiles where id = auth.uid() and role in ('admin', 'teacher'));
$$;

alter table bank_questions enable row level security;

drop policy if exists "bank readable by staff" on bank_questions;
create policy "bank readable by staff" on bank_questions for select using (is_staff());

drop policy if exists "admin writes bank" on bank_questions;
create policy "admin writes bank" on bank_questions for all using (is_admin()) with check (is_admin());

-- Quizzes may belong to a class (teacher-assembled) as well as a course (admin).
alter table quizzes add column if not exists class_id   uuid references classes (id) on delete cascade;
alter table quizzes add column if not exists created_by uuid;

-- Track provenance of a copied question (snapshot from the bank).
alter table quiz_questions add column if not exists bank_id uuid;
