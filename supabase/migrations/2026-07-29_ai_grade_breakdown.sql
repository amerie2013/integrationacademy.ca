-- Per-question AI grade breakdown. The grader now scores each assignment
-- question out of 10; store the array so re-opening a submission shows the same
-- breakdown without re-calling the model.
alter table submission_ai_grades add column if not exists breakdown jsonb;

notify pgrst, 'reload schema';
