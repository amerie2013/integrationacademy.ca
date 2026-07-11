-- ============================================================
-- EQAO Grade 9 Assessment of Mathematics — prep module.
--
-- Phase 1 (now): a pool of figure-enabled questions tagged by STRAND and
-- DIFFICULTY, used for strand-by-strand practice.
-- Phase 2 (later): the same pool is assembled into a two-session / two-stage
-- simulated assessment. The `difficulty` tag drives adaptive stage routing and
-- `eqao_attempts.mode/session/stage/level` already model the simulation, so the
-- upgrade needs no schema rework.
--
-- Run once in the Supabase SQL Editor.
-- ============================================================

create table if not exists eqao_questions (
  id          uuid primary key default gen_random_uuid(),
  -- number | algebra | data | geometry_measurement | financial_literacy
  strand      text not null,
  difficulty  text not null default 'medium',          -- easy | medium | hard (drives Phase-2 staging)
  -- reuses lib/quiz.ts QKind: multiple_choice | multiple_select | true_false |
  -- numeric | math_expr | short_answer | fill_blank | matching | ordering
  kind        text not null,
  prompt      text not null,                            -- supports $LaTeX$
  -- {type:'svg', svg:'<svg…>'}  or  {type:'graph', data:{…}}  or null
  figure      jsonb,
  choices     jsonb,
  answer      jsonb,
  tolerance   numeric,
  points      numeric not null default 1,
  feedback    text,
  created_at  timestamptz not null default now(),
  constraint eqao_strand_chk check (strand in
    ('number','algebra','data','geometry_measurement','financial_literacy')),
  constraint eqao_difficulty_chk check (difficulty in ('easy','medium','hard'))
);

create index if not exists eqao_questions_strand_idx on eqao_questions (strand, difficulty);

-- A student's practice run or (Phase 2) simulated assessment.
create table if not exists eqao_attempts (
  id                 uuid primary key default gen_random_uuid(),
  student_id         uuid not null references profiles (id) on delete cascade,
  mode               text not null default 'practice',  -- practice | simulation
  strand             text,                              -- set for practice runs
  session            text,                              -- Phase 2: 'A' | 'B'
  stage              int,                               -- Phase 2: 1 | 2
  answers            jsonb,
  score              numeric,
  max_score          numeric,
  percent            numeric,
  level              int,                               -- Phase 2: achievement level 1-4
  time_spent_seconds int,
  submitted_at       timestamptz,
  created_at         timestamptz not null default now()
);

create index if not exists eqao_attempts_student_idx on eqao_attempts (student_id, created_at desc);

-- ── Row-level security ──────────────────────────────────────
alter table eqao_questions enable row level security;
alter table eqao_attempts  enable row level security;

-- Questions: any signed-in user may read (students practise); only admins write.
drop policy if exists "eqao questions readable" on eqao_questions;
create policy "eqao questions readable" on eqao_questions
  for select using (auth.uid() is not null);

drop policy if exists "eqao questions admin writes" on eqao_questions;
create policy "eqao questions admin writes" on eqao_questions
  for all using (is_admin()) with check (is_admin());

-- Attempts: a student owns their own rows; staff may read all.
drop policy if exists "eqao attempts own" on eqao_attempts;
create policy "eqao attempts own" on eqao_attempts
  for all using (student_id = auth.uid()) with check (student_id = auth.uid());

drop policy if exists "eqao attempts staff read" on eqao_attempts;
create policy "eqao attempts staff read" on eqao_attempts
  for select using (is_staff());
