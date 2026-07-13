-- Editable worksheet content for the in-browser worksheet editor.
-- Stores the structured text (intro / Learn-the-Concept / examples / questions)
-- so an admin can edit it in the browser and regenerate the PDF server-side.
-- The existing PDF columns (worksheet_url, answers_url, …) are untouched, and
-- the existing admin row-update policy already covers this new column.

alter table public.worksheets
  add column if not exists content jsonb;

comment on column public.worksheets.content is
  'Structured worksheet source: { grade, title, intro, lesson:[[h,b]], examples:[[t,prompt,soln]], questions:[[t,prompt,answer]] }. Edited via /teacher/worksheets/[id]; rendered to PDF by the regenerate route.';
