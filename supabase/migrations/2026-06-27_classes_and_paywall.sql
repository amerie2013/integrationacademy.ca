-- ============================================================
-- (A) Teachers create & manage their own classes — but ONLY with an active
--     subscription (admins are exempt).
-- (B) Paywall: a student accesses a course's content only if they have an
--     ACTIVE subscription OR they're a member of a class for that course
--     (free, via a teacher's join code). Staff always read.
-- Helpers is_admin/is_staff/is_class_teacher come from earlier migrations.
-- Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

-- Per-class billing: each class a teacher opens consumes one paid "class seat".
-- The Stripe webhook increments this per tutor-plan purchase; admins can also set
-- it in the member-plans page. (Prices are unchanged — this just counts seats.)
alter table profiles add column if not exists class_quota int not null default 0;

-- ── Access helpers (defined first so policies can use them) ──
create or replace function has_active_sub() returns boolean
  language sql security definer stable set search_path = public as $$
  select exists (
    select 1 from profiles p
    where p.id = auth.uid()
      and p.subscription_status in ('active', 'trialing')
      and (p.subscription_expires_at is null or p.subscription_expires_at > now())
  );
$$;

-- member of any class for this course → free access through their teacher
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

-- ── (A) Teacher-owned classes ──
-- Per-class billing: a teacher may create a class only with an active
-- subscription AND a free paid seat (classes_owned < class_quota). Each extra
-- class needs another paid seat (another subscription). Admins are exempt.
drop policy if exists "teacher creates class" on classes;
create policy "teacher creates class" on classes
  for insert with check (
    is_admin() or (
      is_staff() and teacher_id = auth.uid() and has_active_sub()
      and (select count(*) from classes c where c.teacher_id = auth.uid())
          < (select coalesce(class_quota, 0) from profiles where id = auth.uid())
    )
  );
-- teachers can delete their own classes. (UPDATE/manage already covered by
-- "teacher claims or manages class" from the class-model migration.)
drop policy if exists "teacher deletes own class" on classes;
create policy "teacher deletes own class" on classes
  for delete using (is_admin() or teacher_id = auth.uid());

-- ── (B) Re-gate content reads on course_access (was: any enrollment) ──
drop policy if exists "lessons readable" on lessons;
create policy "lessons readable" on lessons for select using (
  is_staff() or (lessons.published and course_access(lessons.course_id))
);

drop policy if exists "assignments readable" on assignments;
create policy "assignments readable" on assignments for select using (
  is_staff() or (assignments.published and course_access(assignments.course_id))
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

drop policy if exists "worksheets readable" on worksheets;
create policy "worksheets readable" on worksheets for select using (
  is_admin() or (worksheets.published and course_access(worksheets.course_id))
);

-- Enrollment still exists for "my courses" tracking, but no longer grants
-- content access on its own — a paid subscription or class membership does.
