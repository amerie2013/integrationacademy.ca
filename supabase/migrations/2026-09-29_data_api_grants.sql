-- Supabase is ending automatic Data API grants for new tables on Oct 30, 2026 (existing
-- tables keep their current grants and are unaffected). This migration explicitly grants
-- every existing table the same access the old implicit default gave it, so a fresh project,
-- a preview branch, or a local `supabase db reset` run after that date still works exactly
-- like today. Row Level Security (already enabled on every table below) still governs which
-- rows anon/authenticated can actually see or change — these grants only make the tables
-- reachable through the Data API at all. Safe to re-run.

do $$
declare
  t text;
begin
  foreach t in array array[
    'profiles','courses','lessons','quizzes','quiz_questions','quiz_attempts','assignments',
    'submissions','enrollments','classes','class_students','class_locks','class_order','graphs',
    'bank_questions','materials','whiteboards','worksheets','eqao_questions','eqao_attempts',
    'announcements','lesson_progress','course_grants','tutor_threads','tutor_messages',
    'practice_answers','submission_ai_grades','class_assignments','worksheet_progress'
  ]
  loop
    execute format('grant select on public.%I to anon', t);
    execute format('grant select, insert, update, delete on public.%I to authenticated', t);
    execute format('grant select, insert, update, delete on public.%I to service_role', t);
  end loop;
end $$;

notify pgrst, 'reload schema';
