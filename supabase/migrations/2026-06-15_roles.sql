-- ============================================================
-- Role model
--   admin   : creates/edits ALL content + manages classes
--   teacher : VIEW-ONLY over the students in classes assigned to them
--   student : learns; joins a class with a code
-- Run this once in the Supabase SQL Editor.
-- ============================================================

-- profiles.email (so admins can identify/assign teachers)
alter table profiles add column if not exists email text;
update profiles p set email = u.email from auth.users u where u.id = p.id and p.email is null;

-- new-user trigger now also stores email
create or replace function handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name, role, level, email)
  values (
    new.id,
    new.raw_user_meta_data ->> 'full_name',
    coalesce(new.raw_user_meta_data ->> 'role', 'student'),
    new.raw_user_meta_data ->> 'level',
    new.email
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

-- ── SECURITY DEFINER helpers (bypass RLS → no policy recursion) ──
create or replace function is_admin() returns boolean
  language sql security definer stable set search_path = public as $$
  select exists (select 1 from profiles where id = auth.uid() and role = 'admin');
$$;

create or replace function is_class_teacher(cid uuid) returns boolean
  language sql security definer stable set search_path = public as $$
  select exists (select 1 from classes where id = cid and teacher_id = auth.uid());
$$;

create or replace function is_class_member(cid uuid) returns boolean
  language sql security definer stable set search_path = public as $$
  select exists (select 1 from class_students where class_id = cid and student_id = auth.uid());
$$;

create or replace function teaches_student(sid uuid) returns boolean
  language sql security definer stable set search_path = public as $$
  select exists (
    select 1 from class_students cs join classes c on c.id = cs.class_id
    where cs.student_id = sid and c.teacher_id = auth.uid()
  );
$$;

-- ── CONTENT: admins write, everyone reads published / enrolled ──
drop policy if exists "teacher manages courses" on courses;
drop policy if exists "published courses readable" on courses;
drop policy if exists "courses readable" on courses;
drop policy if exists "admin writes courses" on courses;
create policy "courses readable" on courses for select using (published or is_admin());
create policy "admin writes courses" on courses for all using (is_admin()) with check (is_admin());

drop policy if exists "teacher writes lessons" on lessons;
drop policy if exists "course content readable" on lessons;
create policy "lessons readable" on lessons for select using (
  is_admin() or exists (select 1 from enrollments e where e.course_id = lessons.course_id and e.student_id = auth.uid())
);
create policy "admin writes lessons" on lessons for all using (is_admin()) with check (is_admin());

drop policy if exists "teacher writes assignments" on assignments;
drop policy if exists "assignments readable" on assignments;
create policy "assignments readable" on assignments for select using (
  is_admin() or exists (select 1 from enrollments e where e.course_id = assignments.course_id and e.student_id = auth.uid())
);
create policy "admin writes assignments" on assignments for all using (is_admin()) with check (is_admin());

drop policy if exists "quizzes readable" on quizzes;
drop policy if exists "teacher writes quizzes" on quizzes;
create policy "quizzes readable" on quizzes for select using (
  is_admin() or (published and exists (select 1 from enrollments e where e.course_id = quizzes.course_id and e.student_id = auth.uid()))
);
create policy "admin writes quizzes" on quizzes for all using (is_admin()) with check (is_admin());

drop policy if exists "quiz questions readable" on quiz_questions;
drop policy if exists "teacher writes quiz questions" on quiz_questions;
create policy "quiz questions readable" on quiz_questions for select using (
  is_admin() or exists (
    select 1 from quizzes q where q.id = quiz_questions.quiz_id and q.published
      and exists (select 1 from enrollments e where e.course_id = q.course_id and e.student_id = auth.uid())
  )
);
create policy "admin writes quiz questions" on quiz_questions for all using (is_admin()) with check (is_admin());

-- ── CLASSES: admins manage; teachers & members read ──
drop policy if exists "teacher manages classes" on classes;
create policy "classes readable" on classes for select using (
  is_admin() or teacher_id = auth.uid() or is_class_member(id)
);
create policy "admin writes classes" on classes for all using (is_admin()) with check (is_admin());

create policy "class members readable" on class_students for select using (
  is_admin() or student_id = auth.uid() or is_class_teacher(class_id)
);
create policy "admin manages class members" on class_students for all using (is_admin()) with check (is_admin());

-- student self-join by code (definer → inserts safely without exposing classes)
create or replace function join_class(p_code text) returns text
  language plpgsql security definer set search_path = public as $$
declare cid uuid; cname text;
begin
  select id, name into cid, cname from classes where join_code = upper(trim(p_code));
  if cid is null then raise exception 'Invalid class code'; end if;
  insert into class_students (class_id, student_id) values (cid, auth.uid()) on conflict do nothing;
  return cname;
end;
$$;

-- ── PROFILES: admin reads all; teacher reads their class students ──
drop policy if exists "teacher reads enrolled students" on profiles;
drop policy if exists "admin reads profiles" on profiles;
drop policy if exists "teacher reads class students" on profiles;
create policy "admin reads profiles" on profiles for select using (is_admin());
create policy "teacher reads class students" on profiles for select using (teaches_student(id));

-- ── ATTEMPTS / SUBMISSIONS: admin all; teacher their class students ──
drop policy if exists "teacher reads attempts" on quiz_attempts;
create policy "admin reads attempts" on quiz_attempts for select using (is_admin());
create policy "teacher reads class attempts" on quiz_attempts for select using (teaches_student(student_id));

drop policy if exists "teacher reads submissions" on submissions;
create policy "admin reads submissions" on submissions for select using (is_admin());
create policy "teacher reads class submissions" on submissions for select using (teaches_student(student_id));
