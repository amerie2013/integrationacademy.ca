-- Let staff (teachers/admins) read lessons & assignments so a teacher can
-- curate (lock/unlock) the content of the class they teach. Run once.

drop policy if exists "lessons readable" on lessons;
create policy "lessons readable" on lessons for select using (
  is_staff() or exists (select 1 from enrollments e where e.course_id = lessons.course_id and e.student_id = auth.uid())
);

drop policy if exists "assignments readable" on assignments;
create policy "assignments readable" on assignments for select using (
  is_staff() or exists (select 1 from enrollments e where e.course_id = assignments.course_id and e.student_id = auth.uid())
);
