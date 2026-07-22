-- Practice history: remember what students practise so we can show growth,
-- surface weak topics, and rebuild sets from questions they got wrong.
--
-- One row per QUESTION ANSWERED (not per set) — that makes the two queries we
-- actually care about trivial: "average score per topic" is a group-by, and
-- "questions I got wrong" is a where-clause. Sets are recoverable via set_id.
--
-- Deliberately NO foreign key on question_id: the question banks get re-seeded
-- in bulk (2400 rows/course), and a cascade would delete a student's entire
-- practice history every time a bank is rebuilt. An orphaned uuid just drops
-- out of "redo my mistakes" on its own.

create table if not exists practice_answers (
  id          uuid primary key default gen_random_uuid(),
  set_id      uuid not null,                                          -- groups one practice set together
  student_id  uuid not null references profiles (id) on delete cascade,
  course_id   uuid not null references courses (id) on delete cascade,
  question_id uuid not null,                                          -- bank_questions.id, intentionally un-FK'd
  topic       text,
  correct     boolean not null,
  points      numeric not null default 0,
  max_points  numeric not null default 1,
  answered_at timestamptz not null default now()
);

-- "my weak topics in this course" and "my recent sets"
create index if not exists practice_answers_student_course_idx
  on practice_answers (student_id, course_id, answered_at desc);
-- "questions I got wrong" (partial: wrong answers are the minority we query)
create index if not exists practice_answers_wrong_idx
  on practice_answers (student_id, course_id, question_id) where not correct;

alter table practice_answers enable row level security;

-- Students read their own history. Writes go through the service role in
-- /api/practice (grading is server-side), so no insert policy is needed here.
create policy "student reads own practice" on practice_answers
  for select using (auth.uid() = student_id);

-- Staff can see the practice effort of students they teach, mirroring the
-- existing "teacher reads submissions" policy.
create policy "staff reads student practice" on practice_answers
  for select using (
    exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('teacher', 'admin'))
  );

notify pgrst, 'reload schema';
