-- Let the owner open a live board to guest drawing. Run once in the Supabase
-- SQL editor, after 2026-06-17_whiteboards.sql.
--
-- Guests (including anonymous viewers via the share link) never get direct
-- UPDATE access to the row — that stays owner-only (see "wb owner all" in
-- 2026-06-17_whiteboards.sql), so a guest can't rename the board, end the
-- live session, or overwrite someone else's strokes. Instead they call
-- append_board_shape(), a narrow SECURITY DEFINER RPC that: (1) only runs
-- while the owner has both is_live and draw_open on, (2) locks the row
-- (`for update`) so concurrent appends from different guests can't race each
-- other, and (3) can only append one shape to one page's array — never
-- delete, reorder, or touch any other column.
alter table whiteboards add column if not exists draw_open boolean not null default false;

create or replace function append_board_shape(p_board_id uuid, p_page int, p_shape jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_is_live boolean;
  v_draw_open boolean;
  v_data jsonb;
  v_pages jsonb;
  v_page jsonb;
begin
  select is_live, draw_open, data into v_is_live, v_draw_open, v_data
  from whiteboards where id = p_board_id for update;

  if not found then
    raise exception 'board not found';
  end if;
  if not (v_is_live and v_draw_open) then
    raise exception 'drawing is not open on this board';
  end if;
  if p_page < 0 or p_page > 200 then
    raise exception 'invalid page';
  end if;

  v_pages := coalesce(v_data -> 'pages', '[]'::jsonb);
  while jsonb_array_length(v_pages) <= p_page loop
    v_pages := v_pages || jsonb_build_array('[]'::jsonb);
  end loop;
  v_page := coalesce(v_pages -> p_page, '[]'::jsonb) || jsonb_build_array(p_shape);
  v_pages := jsonb_set(v_pages, array[p_page::text], v_page);
  v_data := jsonb_set(coalesce(v_data, '{}'::jsonb), '{pages}', v_pages);

  update whiteboards set data = v_data, updated_at = now() where id = p_board_id;
end;
$$;

-- Anyone can call it — the checks inside (is_live and draw_open) are what
-- actually gate access, same trust model as the "wb read live" policy.
grant execute on function append_board_shape(uuid, int, jsonb) to anon, authenticated;
