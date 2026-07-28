-- Allow a submission to carry multiple attachments (up to 5, enforced client-
-- side). Each element is { url, name, size }. The legacy single-file columns
-- (file_url / file_name) are kept and mirror the FIRST file, so existing readers
-- keep working while views migrate to the array.

alter table submissions add column if not exists files jsonb not null default '[]'::jsonb;

notify pgrst, 'reload schema';
