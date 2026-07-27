-- AI grade suggestions (teacher-assist). The AI drafts a mark + feedback; the
-- teacher makes the final call. Kept in a SEPARATE table on purpose: the
-- `submissions` "student owns submission" policy lets a student read their own
-- row, so storing the draft there would leak it to the student before the
-- teacher decides. This table is staff-only — students have no access at all.
--
-- Writes happen server-side via the service role (app/api/grade-suggest), so no
-- insert/update policy is needed for clients; the select policy is defence in
-- depth (staff only), and students are never granted read.

create table if not exists submission_ai_grades (
  submission_id uuid primary key references submissions (id) on delete cascade,
  mark          numeric,
  max_points    numeric,
  feedback      text,
  used_image    boolean not null default false,
  model         text,
  created_at    timestamptz not null default now()
);

alter table submission_ai_grades enable row level security;

-- Only admins and the teachers responsible for the student may read a draft.
drop policy if exists "staff reads ai grades" on submission_ai_grades;
create policy "staff reads ai grades" on submission_ai_grades for select using (
  is_admin()
  or exists (
    select 1 from submissions s
      join assignments a on a.id = s.assignment_id
      join courses c on c.id = a.course_id
    where s.id = submission_ai_grades.submission_id
      and (c.teacher_id = auth.uid() or teaches_student(s.student_id))
  )
);

notify pgrst, 'reload schema';
