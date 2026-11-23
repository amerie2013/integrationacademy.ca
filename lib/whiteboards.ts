import { supabase } from "./supabase";
import type { BoardData, Shape } from "./wbdraw";

export type WB = { id: string; title: string; data: BoardData; is_live: boolean; draw_open: boolean; owner_id: string; updated_at: string };

export type WBSummary = Pick<WB, "id" | "title" | "is_live" | "updated_at">;

/**
 * The signed-in user's boards, newest first — titles and dates only.
 * Never select `data` here: boards with imported PDFs/images run to megabytes
 * each, and pulling every one at once hits the database statement timeout
 * (which used to surface as an empty "No saved boards yet" list).
 */
export async function listMine(): Promise<{ signedIn: boolean; items: WBSummary[]; error?: string }> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return { signedIn: false, items: [] };
  const { data, error } = await supabase
    .from("whiteboards")
    .select("id,title,is_live,updated_at")
    .eq("owner_id", session.user.id)
    .order("updated_at", { ascending: false });
  if (error) return { signedIn: true, items: [], error: error.message };
  return { signedIn: true, items: (data ?? []) as WBSummary[] };
}

export async function getBoard(id: string): Promise<WB | null> {
  const { data } = await supabase.from("whiteboards").select("*").eq("id", id).single();
  return (data as WB) ?? null;
}

export async function createBoard(title: string, data: BoardData): Promise<{ id?: string; error?: string }> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return { error: "Sign in to save boards." };
  const { data: row, error } = await supabase
    .from("whiteboards")
    .insert({ owner_id: session.user.id, title, data })
    .select("id")
    .single();
  if (error) return { error: error.message };
  return { id: row!.id };
}

export async function deleteBoard(id: string): Promise<{ error?: string }> {
  const { error } = await supabase.from("whiteboards").delete().eq("id", id);
  return { error: error?.message };
}

/** Copy a saved board (all pages) into a new board owned by the current user. */
export async function duplicateBoard(id: string, title: string): Promise<{ id?: string; error?: string }> {
  const src = await getBoard(id);
  if (!src) return { error: "Couldn't load that board to copy it." };
  return createBoard(title, src.data);
}

export async function saveBoard(id: string, patch: Partial<Pick<WB, "title" | "data" | "is_live" | "draw_open">>): Promise<{ error?: string }> {
  const { error } = await supabase.from("whiteboards").update({ ...patch, updated_at: new Date().toISOString() }).eq("id", id);
  return { error: error?.message };
}

/**
 * Append one shape to one page of a live board, without needing owner-level
 * write access. Safe for guests: the append_board_shape() RPC only succeeds
 * while the owner has draw_open on, and locks the row so concurrent guest
 * strokes can't race each other (see the 2026-08-28 migration).
 */
export async function appendBoardShape(id: string, page: number, shape: Shape): Promise<{ error?: string }> {
  const { error } = await supabase.rpc("append_board_shape", { p_board_id: id, p_page: page, p_shape: shape });
  return { error: error?.message };
}

/** Subscribe to live UPDATEs of a board. Returns a cleanup function. */
export function subscribeBoard(id: string, onChange: (data: BoardData, isLive: boolean, drawOpen: boolean) => void): () => void {
  const ch = supabase
    .channel(`wb-${id}`)
    .on("postgres_changes", { event: "UPDATE", schema: "public", table: "whiteboards", filter: `id=eq.${id}` }, (payload: any) => {
      onChange(payload.new.data as BoardData, payload.new.is_live as boolean, payload.new.draw_open as boolean);
    })
    .subscribe();
  return () => { supabase.removeChannel(ch); };
}
