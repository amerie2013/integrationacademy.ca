-- ============================================================
-- Adds a language tag to courses so a French offering of a course (e.g. a
-- French MTH1W) can exist as its own courses row, distinct from the English
-- one, while every child table (lessons, assignments, quizzes,
-- bank_questions, worksheets) keeps working unchanged since they all key
-- off course_id only.
--
-- Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

alter table courses add column if not exists language text not null default 'en'
  check (language in ('en', 'fr'));

create index if not exists courses_language_idx on courses (language);

notify pgrst, 'reload schema';
