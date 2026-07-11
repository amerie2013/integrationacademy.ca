-- Store images dropped onto a graph as files (not inline base64), so saved
-- figures and embed iframe URLs stay tiny. Run once in the Supabase SQL editor.

insert into storage.buckets (id, name, public)
values ('graph-images', 'graph-images', true)
on conflict (id) do nothing;

-- Signed-in teachers/admins building lessons can upload.
drop policy if exists "auth upload graph-images" on storage.objects;
create policy "auth upload graph-images" on storage.objects
  for insert to authenticated with check (bucket_id = 'graph-images');

drop policy if exists "auth update graph-images" on storage.objects;
create policy "auth update graph-images" on storage.objects
  for update to authenticated using (bucket_id = 'graph-images');

-- Anyone can READ, so embedded graph iframes load for every student.
drop policy if exists "read graph-images" on storage.objects;
create policy "read graph-images" on storage.objects
  for select using (bucket_id = 'graph-images');
