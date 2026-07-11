-- ============================================================
-- Integration Academy (.ca) — High School & University
-- Full schema for a NEW, separate Supabase project.
-- Run this in the Supabase SQL Editor once after creating the project.
-- ============================================================

-- ── PROFILES ────────────────────────────────────────────────
-- One row per auth user. Mirrors the K-8 site's account model
-- (role + subscription) but uses `level` instead of `grade`.
create table if not exists profiles (
  id                       uuid primary key references auth.users (id) on delete cascade,
  full_name                text,
  role                     text not null default 'student',  -- student | teacher | admin
  level                    text,                             -- 9..12 | college | university
  school_name              text,
  bio                      text,
  photo_url                text,
  stripe_customer_id       text,
  subscription_status      text default 'inactive',
  subscription_plan        text,
  subscription_expires_at  timestamptz,
  created_at               timestamptz not null default now()
);

-- Auto-create a profile row when a new auth user signs up,
-- copying role/level from the sign-up metadata.
create or replace function handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, role, level)
  values (
    new.id,
    new.raw_user_meta_data ->> 'full_name',
    coalesce(new.raw_user_meta_data ->> 'role', 'student'),
    new.raw_user_meta_data ->> 'level'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- ── COURSES ─────────────────────────────────────────────────
create table if not exists courses (
  id          uuid primary key default gen_random_uuid(),
  teacher_id  uuid not null references profiles (id) on delete cascade,
  code        text,
  title       text not null,
  description text,
  level       text,
  published   boolean not null default false,
  created_at  timestamptz not null default now()
);

-- ── LESSONS ─────────────────────────────────────────────────
create table if not exists lessons (
  id          uuid primary key default gen_random_uuid(),
  course_id   uuid not null references courses (id) on delete cascade,
  title       text not null,
  body        text,             -- legacy plain text (optional)
  blocks      jsonb not null default '[]',  -- block-based content: text, math, image, graph, animation, video, callout
  pdf_url     text,             -- optional downloadable PDF version
  pdf_name    text,
  position    int  not null default 0,
  published   boolean not null default false,
  created_at  timestamptz not null default now()
);

-- ── QUIZZES ─────────────────────────────────────────────────
create table if not exists quizzes (
  id                    uuid primary key default gen_random_uuid(),
  course_id             uuid not null references courses (id) on delete cascade,
  lesson_id             uuid references lessons (id) on delete set null,
  title                 text not null,
  description           text,
  -- timing
  time_limit_minutes    int,                  -- null = untimed
  available_from        timestamptz,          -- opens at
  available_until       timestamptz,          -- closes at
  due_date              timestamptz,
  -- attempts
  attempts_allowed      int,                  -- null = unlimited
  -- presentation
  shuffle_questions     boolean not null default false,
  shuffle_choices       boolean not null default false,
  one_question_per_page boolean not null default false,
  allow_backtracking    boolean not null default true,
  -- grading / feedback
  passing_score         numeric,              -- percent, e.g. 50
  show_answers          text not null default 'after_submit', -- after_submit | after_close | never
  show_score            boolean not null default true,
  published             boolean not null default false,
  created_at            timestamptz not null default now()
);

create table if not exists quiz_questions (
  id          uuid primary key default gen_random_uuid(),
  quiz_id     uuid not null references quizzes (id) on delete cascade,
  -- multiple_choice | multiple_select | true_false | numeric |
  -- short_answer | fill_blank | matching | ordering | long_answer
  kind        text not null default 'multiple_choice',
  prompt      text not null,         -- supports LaTeX ($...$ / $$...$$)
  image_url   text,                  -- optional figure
  choices     jsonb,                 -- MC/MS: [{id,text}]; matching: {left:[],right:[]}; ordering: [items]
  answer      jsonb,                 -- correct answer(s); shape depends on kind
  tolerance   numeric,               -- numeric questions: +/- tolerance
  points      numeric not null default 1,
  feedback    text,                  -- shown after answering
  position    int not null default 0
);

-- ── QUIZ ATTEMPTS ───────────────────────────────────────────
create table if not exists quiz_attempts (
  id            uuid primary key default gen_random_uuid(),
  quiz_id       uuid not null references quizzes (id) on delete cascade,
  student_id    uuid not null references profiles (id) on delete cascade,
  attempt_no    int not null default 1,
  answers       jsonb not null default '{}',  -- { questionId: answer }
  score         numeric,                      -- points earned (auto + manual)
  max_score     numeric,
  percent       numeric,
  passed        boolean,
  needs_grading boolean not null default false, -- has ungraded long_answer questions
  manual_grades jsonb not null default '{}',   -- { questionId: pointsAwarded } for long_answer
  teacher_comment text,
  started_at    timestamptz not null default now(),
  submitted_at  timestamptz,
  time_spent_seconds int
);

-- ── ASSIGNMENTS ─────────────────────────────────────────────
create table if not exists assignments (
  id          uuid primary key default gen_random_uuid(),
  course_id   uuid not null references courses (id) on delete cascade,
  title       text not null,
  description text,
  due_date    timestamptz,
  created_at  timestamptz not null default now()
);

create table if not exists submissions (
  id            uuid primary key default gen_random_uuid(),
  assignment_id uuid not null references assignments (id) on delete cascade,
  student_id    uuid not null references profiles (id) on delete cascade,
  content       text,
  grade         numeric,
  feedback      text,
  submitted_at  timestamptz not null default now(),
  unique (assignment_id, student_id)
);

-- ── ENROLLMENTS (individual students OR class members) ───────
create table if not exists enrollments (
  id         uuid primary key default gen_random_uuid(),
  student_id uuid not null references profiles (id) on delete cascade,
  course_id  uuid not null references courses (id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (student_id, course_id)
);

-- ── CLASSES (optional teacher-led grouping) ──────────────────
create table if not exists classes (
  id         uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references profiles (id) on delete cascade,
  name       text not null,
  join_code  text unique,
  created_at timestamptz not null default now()
);

create table if not exists class_students (
  class_id   uuid not null references classes (id) on delete cascade,
  student_id uuid not null references profiles (id) on delete cascade,
  primary key (class_id, student_id)
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
alter table profiles       enable row level security;
alter table courses        enable row level security;
alter table lessons        enable row level security;
alter table quizzes        enable row level security;
alter table quiz_questions enable row level security;
alter table assignments    enable row level security;
alter table submissions    enable row level security;
alter table enrollments    enable row level security;
alter table classes        enable row level security;
alter table class_students enable row level security;
alter table quiz_attempts  enable row level security;

-- profiles: a user can see/update only their own row
create policy "own profile read"   on profiles for select using (auth.uid() = id);
create policy "own profile update" on profiles for update using (auth.uid() = id);

-- teachers can read profiles of students enrolled in their courses (for gradebook)
create policy "teacher reads enrolled students" on profiles for select using (
  exists (
    select 1 from enrollments e join courses c on c.id = e.course_id
    where e.student_id = profiles.id and c.teacher_id = auth.uid()
  )
);

-- courses: published courses readable by all; teachers manage their own
create policy "published courses readable" on courses for select
  using (published = true or teacher_id = auth.uid());
create policy "teacher manages courses" on courses for all
  using (teacher_id = auth.uid()) with check (teacher_id = auth.uid());

-- lessons / quizzes / questions / assignments: readable to enrolled students
-- and the owning teacher; writable by the owning teacher.
create policy "course content readable" on lessons for select using (
  exists (select 1 from courses c where c.id = lessons.course_id
          and (c.teacher_id = auth.uid()
               or exists (select 1 from enrollments e
                          where e.course_id = c.id and e.student_id = auth.uid())))
);
create policy "teacher writes lessons" on lessons for all using (
  exists (select 1 from courses c where c.id = lessons.course_id and c.teacher_id = auth.uid())
) with check (
  exists (select 1 from courses c where c.id = lessons.course_id and c.teacher_id = auth.uid())
);

create policy "teacher writes assignments" on assignments for all using (
  exists (select 1 from courses c where c.id = assignments.course_id and c.teacher_id = auth.uid())
) with check (
  exists (select 1 from courses c where c.id = assignments.course_id and c.teacher_id = auth.uid())
);
create policy "assignments readable" on assignments for select using (
  exists (select 1 from courses c where c.id = assignments.course_id
          and (c.teacher_id = auth.uid()
               or exists (select 1 from enrollments e
                          where e.course_id = c.id and e.student_id = auth.uid())))
);

-- enrollments: students manage their own
create policy "student enrolls self" on enrollments for all
  using (student_id = auth.uid()) with check (student_id = auth.uid());

-- submissions: students manage their own; teachers can read for their courses
create policy "student owns submission" on submissions for all
  using (student_id = auth.uid()) with check (student_id = auth.uid());
create policy "teacher reads submissions" on submissions for select using (
  exists (select 1 from assignments a join courses c on c.id = a.course_id
          where a.id = submissions.assignment_id and c.teacher_id = auth.uid())
);

-- quizzes: readable to enrolled students (when published) + owning teacher;
-- writable by owning teacher.
create policy "quizzes readable" on quizzes for select using (
  exists (select 1 from courses c where c.id = quizzes.course_id
          and (c.teacher_id = auth.uid()
               or (quizzes.published and exists (select 1 from enrollments e
                          where e.course_id = c.id and e.student_id = auth.uid()))))
);
create policy "teacher writes quizzes" on quizzes for all using (
  exists (select 1 from courses c where c.id = quizzes.course_id and c.teacher_id = auth.uid())
) with check (
  exists (select 1 from courses c where c.id = quizzes.course_id and c.teacher_id = auth.uid())
);

-- quiz_questions: same access as their parent quiz
create policy "quiz questions readable" on quiz_questions for select using (
  exists (select 1 from quizzes q join courses c on c.id = q.course_id
          where q.id = quiz_questions.quiz_id
          and (c.teacher_id = auth.uid()
               or (q.published and exists (select 1 from enrollments e
                          where e.course_id = c.id and e.student_id = auth.uid()))))
);
create policy "teacher writes quiz questions" on quiz_questions for all using (
  exists (select 1 from quizzes q join courses c on c.id = q.course_id
          where q.id = quiz_questions.quiz_id and c.teacher_id = auth.uid())
) with check (
  exists (select 1 from quizzes q join courses c on c.id = q.course_id
          where q.id = quiz_questions.quiz_id and c.teacher_id = auth.uid())
);

-- quiz_attempts: students own their attempts; teachers can read attempts for their courses
create policy "student owns attempt" on quiz_attempts for all
  using (student_id = auth.uid()) with check (student_id = auth.uid());
create policy "teacher reads attempts" on quiz_attempts for select using (
  exists (select 1 from quizzes q join courses c on c.id = q.course_id
          where q.id = quiz_attempts.quiz_id and c.teacher_id = auth.uid())
);

-- classes: teachers manage their own
create policy "teacher manages classes" on classes for all
  using (teacher_id = auth.uid()) with check (teacher_id = auth.uid());
