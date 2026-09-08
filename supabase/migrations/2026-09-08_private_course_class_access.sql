-- ============================================================
-- Private (unlisted) courses: let a course stay unpublished — hidden from the
-- public /courses catalog and from everyone by default — while still being
-- fully visible to whoever the admin has actually granted access to: a
-- student who joined via a class join_code, OR a teacher holding a
-- course_grants seat for it (the same two ways course_access() already gates
-- lesson/quiz/worksheet content — see 2026-07-06_per_course_billing.sql).
--
-- Today "courses readable" only allows `published or is_admin()`, so an
-- unpublished course's row (title/description) is invisible to everyone else,
-- even someone course_access() would already let read the lessons — breaking
-- their course page before it can even fetch the lessons.
--
-- Run once in the Supabase SQL Editor. Idempotent. Supersedes the first
-- version of this migration (which only covered class_students, missing the
-- teacher-holds-a-grant case).
-- ============================================================

drop policy if exists "courses readable" on courses;
create policy "courses readable" on courses for select using (
  published or course_access(id)
);
