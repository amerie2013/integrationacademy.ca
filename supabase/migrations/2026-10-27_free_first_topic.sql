-- ============================================================
-- Free preview narrowed to topic 1.1, for signed-in users only.
--
-- Replaces the "whole Chapter 1, open to everyone" preview from
-- 2026-10-26_all_access_and_free_preview.sql. Now, in every course, the 1.1
-- lesson, the 1.1 worksheet (+ answer key) and the 1.1 assignment (with the AI
-- tutor) are free — but only to someone with an account. Visitors who are not
-- signed in see nothing until they register. The 1.1 practice questions are
-- opened by the /api/practice route (the bank is served server-side).
--
-- Topic 1.1 is matched by title/code: "1.1 Power Functions", worksheet code
-- "1.1", "Assignment 1.1 — …", "Free Response 1.1 — …", "Devoir 1.1 — …".
-- Never 1.10, 1.11, …
--
-- Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

create or replace function is_first_topic(t text) returns boolean
  language sql immutable as $$
  select coalesce(t ~ '^([^0-9]+ )?1\.1([^0-9]|$)', false);
$$;

-- ── Flags ──
alter table lessons     add column if not exists free_preview boolean not null default false;
alter table worksheets  add column if not exists free_preview boolean not null default false;
alter table assignments add column if not exists free_preview boolean not null default false;

update lessons     set free_preview = is_first_topic(title) where free_preview is distinct from is_first_topic(title);
update worksheets  set free_preview = is_first_topic(code)  where free_preview is distinct from is_first_topic(code);
update assignments set free_preview = (class_id is null and is_first_topic(title))
  where free_preview is distinct from (class_id is null and is_first_topic(title));

-- keep the flags right for rows re-inserted or renamed by the publish scripts
create or replace function lessons_default_free_preview() returns trigger
  language plpgsql set search_path = public as $$
begin
  new.free_preview := is_first_topic(new.title);
  return new;
end;
$$;
drop trigger if exists lessons_default_free_preview on lessons;
create trigger lessons_default_free_preview before insert or update of title on lessons
  for each row execute function lessons_default_free_preview();

create or replace function worksheets_default_free_preview() returns trigger
  language plpgsql set search_path = public as $$
begin
  new.free_preview := is_first_topic(new.code);
  return new;
end;
$$;
drop trigger if exists worksheets_default_free_preview on worksheets;
create trigger worksheets_default_free_preview before insert or update of code on worksheets
  for each row execute function worksheets_default_free_preview();

-- class homework (class_id set) is never part of the free preview
create or replace function assignments_default_free_preview() returns trigger
  language plpgsql set search_path = public as $$
begin
  new.free_preview := new.class_id is null and is_first_topic(new.title);
  return new;
end;
$$;
drop trigger if exists assignments_default_free_preview on assignments;
create trigger assignments_default_free_preview before insert or update of title, class_id on assignments
  for each row execute function assignments_default_free_preview();

-- ── Row access: free rows need a signed-in user ──
drop policy if exists "lessons readable" on lessons;
create policy "lessons readable" on lessons for select using (
  is_admin()
  or (lessons.published and (
        (lessons.free_preview and auth.uid() is not null)
        or course_access(lessons.course_id)))
);

drop policy if exists "worksheets readable" on worksheets;
create policy "worksheets readable" on worksheets for select using (
  is_admin()
  or (worksheets.published and (
        (worksheets.free_preview and auth.uid() is not null)
        or course_access(worksheets.course_id)))
);

drop policy if exists "assignments readable" on assignments;
create policy "assignments readable" on assignments for select using (
  is_admin()
  or (assignments.class_id is null and assignments.published and (
        (assignments.free_preview and auth.uid() is not null)
        or course_access(assignments.course_id)))
  or (assignments.class_id is not null and assignments.published and is_class_member(assignments.class_id))
);

-- ── Files (storage policies are already "to authenticated") ──
drop policy if exists "read worksheets files" on storage.objects;
create policy "read worksheets files" on storage.objects for select to authenticated using (
  bucket_id = 'worksheets'
  and (is_admin()
       or course_access(((storage.foldername(name))[1])::uuid)
       or exists (
            select 1 from worksheets w
            where w.published and w.free_preview
              and w.course_id = ((storage.foldername(name))[1])::uuid
              and (position(('/worksheets/' || name) in coalesce(w.worksheet_url, '')) > 0
                   or position(('/worksheets/' || name) in coalesce(w.answers_url, '')) > 0)))
);

drop policy if exists "read lesson-pdfs files" on storage.objects;
create policy "read lesson-pdfs files" on storage.objects for select to authenticated using (
  bucket_id = 'lesson-pdfs'
  and (is_admin() or exists (
        select 1 from lessons l
        where l.id = ((storage.foldername(name))[1])::uuid
          and ((l.published and l.free_preview) or course_access(l.course_id))))
);

create or replace function storage_material_free(objname text) returns boolean
  language sql stable set search_path = public as $$
  select case (storage.foldername(objname))[1]
    when 'lesson'     then exists (select 1 from lessons     where id = ((storage.foldername(objname))[2])::uuid and published and free_preview)
    when 'assignment' then exists (select 1 from assignments where id = ((storage.foldername(objname))[2])::uuid and published and free_preview)
    else false end;
$$;

drop policy if exists "read materials files" on storage.objects;
create policy "read materials files" on storage.objects for select to authenticated using (
  bucket_id = 'materials'
  and (is_admin() or course_access(storage_material_course(name)) or storage_material_free(name))
);

notify pgrst, 'reload schema';
