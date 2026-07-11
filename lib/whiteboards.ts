import { supabase } from "./supabase";
import type { BoardData } from "./wbdraw";

export type WB = { id: string; title: string; data: BoardData; is_live: boolean; owner_id: string; updated_at: string };

export async function listMine(): Promise<{ supported: boolean; items: WB[] }> {
  const { data, error } = await supabase.from("whiteboards").select("*").order("updated_at", { ascending: false });
  if (error) return { supported: false, items: [] };
  return { supported: true, items: (data ?? []) as WB[] };
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

export async function saveBoard(id: string, patch: Partial<Pick<WB, "title" | "data" | "is_live">>): Promise<{ error?: string }> {
  const { error } = await supabase.from("whiteboards").update({ ...patch, updated_at: new Date().toISOString() }).eq("id", id);
  return { error: error?.message };
}

/** Subscribe to live UPDATEs of a board. Returns a cleanup function. */
export function subscribeBoard(id: string, onChange: (data: BoardData, isLive: boolean) => void): () => void {
  const ch = supabase
    .channel(`wb-${id}`)
    .on("postgres_changes", { event: "UPDATE", schema: "public", table: "whiteboards", filter: `id=eq.${id}` }, (payload: any) => {
      onChange(payload.new.data as BoardData, payload.new.is_live as boolean);
    })
    .subscribe();
  return () => { supabase.removeChannel(ch); };
}
