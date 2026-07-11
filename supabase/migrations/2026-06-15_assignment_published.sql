-- Add publish/draft control to assignments (default true so existing stay visible).
alter table assignments add column if not exists published boolean not null default true;
