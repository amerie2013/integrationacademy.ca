-- ============================================================
-- Pricing polish: All-access plan + free Chapter 1 preview.
--
--   • All-access: a course_grants row with course_id NULL (plan 'allaccess_*')
--     unlocks every PUBLISHED course. Private/unpublished courses stay behind
--     their own class code or grant.
--   • Free preview: lessons.free_preview = true lets anyone (signed in or not)
--     read that published lesson. Seeded for every lesson numbered "1.x", so
--     Chapter 1 of each course is free to try. Worksheets, assignments and quizzes
--     stay paid.
--
-- Run once in the Supabase SQL Editor. Idempotent.
-- ============================================================

-- ── All-access grants ──
alter table course_grants alter column course_id drop not null;

create or replace function has_course_grant(cid uuid) returns boolean
  language sql security definer stable set search_path = public as $$
  select exists (
    select 1 from course_grants g
    where g.user_id = auth.uid()
      and g.status in ('active', 'trialing')
      and (g.expires_at is null or g.expires_at > now())
      and (
        g.course_id = cid
        or (g.course_id is null and exists (select 1 from courses c where c.id = cid and c.published))
      )
  );
$$;

-- ── Free Chapter 1 preview ──
alter table lessons add column if not exists free_preview boolean not null default false;

update lessons set free_preview = true where title ~ '^1\.\d' and not free_preview;

-- keep it true for Chapter 1 lessons re-inserted by the seed/publish scripts
create or replace function lessons_default_free_preview() returns trigger
  language plpgsql set search_path = public as $$
begin
  if new.title ~ '^1\.\d' then new.free_preview := true; end if;
  return new;
end;
$$;
drop trigger if exists lessons_default_free_preview on lessons;
create trigger lessons_default_free_preview before insert on lessons
  for each row execute function lessons_default_free_preview();

drop policy if exists "lessons readable" on lessons;
create policy "lessons readable" on lessons for select using (
  is_admin() or (lessons.published and (lessons.free_preview or course_access(lessons.course_id)))
);

-- lesson PDFs of a free-preview lesson are downloadable too (signed-in users)
drop policy if exists "read lesson-pdfs files" on storage.objects;
create policy "read lesson-pdfs files" on storage.objects for select to authenticated using (
  bucket_id = 'lesson-pdfs'
  and (is_admin() or exists (
        select 1 from lessons l
        where l.id = ((storage.foldername(name))[1])::uuid
          and ((l.published and l.free_preview) or course_access(l.course_id))))
);
