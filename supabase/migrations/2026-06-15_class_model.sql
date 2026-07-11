-- ============================================================
-- Class model: admin creates OPEN classes for a course; a teacher
-- CLAIMS one to teach; teacher hides (locks) content per class and
-- builds quizzes from the bank for that class. Run once.
-- ============================================================

-- A class belongs to a course; teacher_id is null until a teacher claims it.
alter table classes add column if not exists course_id uuid references courses (id) on delete cascade;
alter table classes alter column teacher_id drop not null;

-- Per-class content locks. A row means that item is HIDDEN from this class
-- (default is "all unlocked", so we only store what the teacher hides).
create table if not exists class_locks (
  class_id   uuid not null references classes (id) on delete cascade,
  item_type  text not null,            -- 'lesson' | 'quiz' | 'assignment'
  item_id    uuid not null,
  primary key (class_id, item_type, item_id)
);
alter table class_locks enable row level security;

-- ── classes RLS ──
-- staff browse all classes (to claim open ones); members read their class.
drop policy if exists "classes readable" on classes;
create policy "classes readable" on classes for select using (is_staff() or is_class_member(id));
-- admin full control kept via existing "admin writes classes".
-- teacher can claim an open class and manage their own.
drop policy if exists "teacher claims or manages class" on classes;
create policy "teacher claims or manages class" on classes for update
  using (is_staff() and (teacher_id is null or teacher_id = auth.uid()))
  with check (teacher_id = auth.uid() or is_admin());

-- ── class_locks RLS ──
drop policy if exists "class locks readable" on class_locks;
create policy "class locks readable" on class_locks for select
  using (is_admin() or is_class_teacher(class_id) or is_class_member(class_id));
drop policy if exists "teacher manages class locks" on class_locks;
create policy "teacher manages class locks" on class_locks for all
  using (is_admin() or is_class_teacher(class_id))
  with check (is_admin() or is_class_teacher(class_id));

-- ── teacher builds quizzes for their class (class_id set) ──
drop policy if exists "teacher writes class quizzes" on quizzes;
create policy "teacher writes class quizzes" on quizzes for all
  using (class_id is not null and is_class_teacher(class_id))
  with check (class_id is not null and is_class_teacher(class_id));
drop policy if exists "teacher writes class quiz questions" on quiz_questions;
create policy "teacher writes class quiz questions" on quiz_questions for all
  using (exists (select 1 from quizzes q where q.id = quiz_questions.quiz_id and q.class_id is not null and is_class_teacher(q.class_id)))
  with check (exists (select 1 from quizzes q where q.id = quiz_questions.quiz_id and q.class_id is not null and is_class_teacher(q.class_id)));
