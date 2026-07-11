-- ============================================================
-- Enforce the paid-content paywall at the DATABASE level (RLS).
--
-- SUPERSEDES 2026-06-27_classes_and_paywall.sql (which was never applied) and
-- reconciles it with 2026-07-06_class_announcements_and_homework.sql so that:
--   • content (lessons / worksheets / quizzes / quiz_questions / course-wide
--     assignments) is readable ONLY by staff, an ACTIVE subscriber, or a member
--     of a class for that course (class students are free — their teacher pays);
--   • class-specific homework stays visible ONLY to that class's members.
-- Enrollment ("my courses") no longer grants access on its own.
--
-- Matches lib/subscription.ts isActive: status in ('active','trialing') AND not
-- expired. Helpers is_admin/is_staff/is_class_teacher/is_class_member come from
-- 2026-06-15_roles.sql. Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

-- Per-class billing: each class a teacher opens consumes one paid "class seat".
alter table profiles add column if not exists class_quota int not null default 0;

-- ── Access helpers ──
create or replace function has_active_sub() returns boolean
  language sql security definer stable set search_path = public as $$
  select exists (
    select 1 from profiles p
    where p.id = auth.uid()
      and p.subscription_status in ('active', 'trialing')
      and (p.subscription_expires_at is null or p.subscription_expires_at > now())
  );
$$;

create or replace function in_course_class(cid uuid) returns boolean
  language sql security definer stable set search_path = public as $$
  select exists (
    select 1 from class_students cs join classes c on c.id = cs.class_id
    where cs.student_id = auth.uid() and c.course_id = cid
  );
$$;

-- unified gate for STUDENTS: staff, or paid, or in a class for the course
create or replace function course_access(cid uuid) returns boolean
  language sql security definer stable set search_path = public as $$
  select is_staff() or has_active_sub() or in_course_class(cid);
$$;

-- ── Teacher class creation gated on an active subscription + a free seat ──
drop policy if exists "teacher creates class" on classes;
create policy "teacher creates class" on classes
  for insert with check (
    is_admin() or (
      is_staff() and teacher_id = auth.uid() and has_active_sub()
      and (select count(*) from classes c where c.teacher_id = auth.uid())
          < (select coalesce(class_quota, 0) from profiles where id = auth.uid())
    )
  );
drop policy if exists "teacher deletes own class" on classes;
create policy "teacher deletes own class" on classes
  for delete using (is_admin() or teacher_id = auth.uid());

-- ── Content reads gated on course_access ──
drop policy if exists "lessons readable" on lessons;
create policy "lessons readable" on lessons for select using (
  is_staff() or (lessons.published and course_access(lessons.course_id))
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

-- Assignments: PAYWALL course-wide (class_id null) + CLASS-SCOPE homework
-- (class_id set → only that class's members). Combines the paywall gate with the
-- per-class scoping from the announcements/homework migration.
drop policy if exists "assignments readable" on assignments;
create policy "assignments readable" on assignments for select using (
  is_staff()
  or (assignments.class_id is null and assignments.published and course_access(assignments.course_id))
  or (assignments.class_id is not null and assignments.published and is_class_member(assignments.class_id))
);
