-- ============================================================
-- PER-COURSE billing. Replaces the site-wide subscription model: a student or
-- teacher pays for ONE course and unlocks only that course.
--
--   • course_grants: one row per (user, course) purchase — kind student|teacher,
--     plan, status, expiry, Stripe ids. The Stripe webhook (service role) writes
--     these; admins may comp them.
--   • course_access(cid) = admin OR an ACTIVE grant for THIS course OR membership
--     in a class for the course (class students are free via their teacher).
--   • Teachers are no longer blanket-staff for content — they access a course only
--     if they hold a grant for it (decision: buying a course gives learner access).
--   • Teacher class creation needs a FREE teacher seat for that course
--     (one class per purchase).
--
-- Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

create table if not exists course_grants (
  id                     uuid primary key default gen_random_uuid(),
  user_id                uuid not null references profiles (id) on delete cascade,
  course_id              uuid not null references courses (id) on delete cascade,
  kind                   text not null default 'student' check (kind in ('student', 'teacher')),
  plan                   text,
  status                 text not null default 'active',
  expires_at             timestamptz,
  stripe_subscription_id text,
  stripe_customer_id     text,
  created_at             timestamptz not null default now(),
  updated_at             timestamptz not null default now()
);
create index if not exists course_grants_user_course_idx on course_grants (user_id, course_id);
create index if not exists course_grants_sub_idx on course_grants (stripe_subscription_id);
alter table course_grants enable row level security;

drop policy if exists "user reads own grants" on course_grants;
create policy "user reads own grants" on course_grants for select using (user_id = auth.uid());
drop policy if exists "admin reads grants" on course_grants;
create policy "admin reads grants" on course_grants for select using (is_admin());
drop policy if exists "admin writes grants" on course_grants;
create policy "admin writes grants" on course_grants for all using (is_admin()) with check (is_admin());

-- ── Access helpers ──
create or replace function has_course_grant(cid uuid) returns boolean
  language sql security definer stable set search_path = public as $$
  select exists (
    select 1 from course_grants g
    where g.user_id = auth.uid() and g.course_id = cid
      and g.status in ('active', 'trialing')
      and (g.expires_at is null or g.expires_at > now())
  );
$$;

-- free teacher seats for a course = active teacher grants held
create or replace function teacher_seats(cid uuid) returns int
  language sql security definer stable set search_path = public as $$
  select count(*)::int from course_grants g
  where g.user_id = auth.uid() and g.course_id = cid and g.kind = 'teacher'
    and g.status in ('active', 'trialing')
    and (g.expires_at is null or g.expires_at > now());
$$;

-- per-course gate: admin, or an active grant for this course, or in a class for it
create or replace function course_access(cid uuid) returns boolean
  language sql security definer stable set search_path = public as $$
  select is_admin() or has_course_grant(cid) or in_course_class(cid);
$$;

-- ── Content reads: is_admin() (NOT is_staff) + per-course course_access ──
drop policy if exists "lessons readable" on lessons;
create policy "lessons readable" on lessons for select using (
  is_admin() or (lessons.published and course_access(lessons.course_id))
);
drop policy if exists "worksheets readable" on worksheets;
create policy "worksheets readable" on worksheets for select using (
  is_admin() or (worksheets.published and course_access(worksheets.course_id))
);
drop policy if exists "quizzes readable" on quizzes;
create policy "quizzes readable" on quizzes for select using (
  is_admin() or (quizzes.published and course_access(quizzes.course_id))
);
drop policy if exists "quiz questions readable" on quiz_questions;
create policy "quiz questions readable" on quiz_questions for select using (
  is_admin() or exists (
    select 1 from quizzes q
    where q.id = quiz_questions.quiz_id and q.published and course_access(q.course_id)
  )
);
drop policy if exists "assignments readable" on assignments;
create policy "assignments readable" on assignments for select using (
  is_admin()
  or (assignments.class_id is null and assignments.published and course_access(assignments.course_id))
  or (assignments.class_id is not null and assignments.published and is_class_member(assignments.class_id))
);

-- ── Teacher class creation: one class per purchased teacher seat for the course ──
drop policy if exists "teacher creates class" on classes;
create policy "teacher creates class" on classes for insert with check (
  is_admin() or (
    teacher_id = auth.uid()
    and teacher_seats(classes.course_id) > (
      select count(*) from classes c
      where c.teacher_id = auth.uid() and c.course_id = classes.course_id
    )
  )
);
