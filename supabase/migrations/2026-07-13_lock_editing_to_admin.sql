-- ============================================================
-- Lock shared-curriculum editing to ADMIN only.
--
-- These 5 policies (from the original K-8-style design) let a teacher who
-- "owns" a course write its lessons/assignments/quizzes — and even create a
-- course — via the API, bypassing the admin-only editor screens. Dropping them
-- closes that gap.
--
-- Everything teachers legitimately do still works, via policies that REMAIN:
--   • Build quizzes from the bank for their class  → "teacher writes class quizzes",
--     "teacher writes class quiz questions", "teacher inserts/deletes class quiz questions"
--   • Post class announcements / homework          → "teacher writes class assignments"
--   • Manage classes, grading, read the bank       → their class/staff-read policies
-- And ADMIN keeps full write access via the "admin writes …" policies.
--
-- Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

drop policy if exists "teacher manages courses"       on courses;
drop policy if exists "teacher writes lessons"        on lessons;
drop policy if exists "teacher writes assignments"    on assignments;
drop policy if exists "teacher writes quizzes"        on quizzes;
drop policy if exists "teacher writes quiz questions" on quiz_questions;

notify pgrst, 'reload schema';
