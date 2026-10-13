-- ============================================================
-- Lock a teacher's class quizzes to that class.
--
-- "quizzes readable" (2026-07-06_per_course_billing.sql) grants read access to
-- anyone with course_access(course_id) — it never checks class_id. That means
-- a second teacher who holds their own access grant for the SAME course could
-- read (and take) a quiz the first teacher built for THEIR class, since
-- course_access only proves "paid for this course," not "member of this
-- class." Admin-authored, course-wide quizzes (class_id is null) are meant to
-- stay shared with anyone holding course access — only class-tagged quizzes
-- need locking down to their own teacher + students.
--
-- Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

drop policy if exists "quizzes readable" on quizzes;
create policy "quizzes readable" on quizzes for select using (
  is_admin()
  or (quizzes.class_id is null and quizzes.published and course_access(quizzes.course_id))
  or (quizzes.class_id is not null and (
        is_class_teacher(quizzes.class_id)
        or (quizzes.published and is_class_member(quizzes.class_id))
      ))
);

drop policy if exists "quiz questions readable" on quiz_questions;
create policy "quiz questions readable" on quiz_questions for select using (
  is_admin() or exists (
    select 1 from quizzes q
    where q.id = quiz_questions.quiz_id
      and (
        (q.class_id is null and q.published and course_access(q.course_id))
        or (q.class_id is not null and (
              is_class_teacher(q.class_id)
              or (q.published and is_class_member(q.class_id))
            ))
      )
  )
);

notify pgrst, 'reload schema';
