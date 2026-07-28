-- Per-class due dates. Assignments are shared course curriculum (admin-owned),
-- but each class runs on its own schedule — so a teacher setting a due date must
-- affect ONLY their class, not the course assignment (which would change it for
-- every class + the admin). This table holds each class's own due date; the
-- assignments.due_date column stays as the admin's course-level default.

create table if not exists class_assignments (
  class_id      uuid not null references classes (id) on delete cascade,
  assignment_id uuid not null references assignments (id) on delete cascade,
  due_date      timestamptz,
  updated_at    timestamptz not null default now(),
  primary key (class_id, assignment_id)
);

alter table class_assignments enable row level security;

-- Readable by: admins, the class's teacher, and students enrolled in the class
-- (so a student sees their own class's due date). Writes go through the
-- service-role API route (/api/class-assignment), which gates to teacher/admin.
drop policy if exists "read class assignment schedule" on class_assignments;
create policy "read class assignment schedule" on class_assignments for select using (
  is_admin()
  or exists (select 1 from classes c where c.id = class_assignments.class_id and c.teacher_id = auth.uid())
  or exists (select 1 from class_students cs where cs.class_id = class_assignments.class_id and cs.student_id = auth.uid())
);

notify pgrst, 'reload schema';
