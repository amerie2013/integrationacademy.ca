"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import { FoundationsStatsView } from "../../../components/FoundationsStatsView";
import type { Attempt } from "../../../lib/foundationsStats";

// A student's own Foundations stats. Reads their own game_attempts rows (RLS).
export default function MyFoundationsStats() {
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(true);
  const [attempts, setAttempts] = useState<Attempt[]>([]);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { setSignedIn(false); setLoading(false); return; }
      const since = new Date(Date.now() - 90 * 864e5).toISOString();
      const { data } = await supabase
        .from("game_attempts")
        .select("game, level, score, correct, total, avg_ms, missed, played_at")
        .eq("student_id", session.user.id)
        .gte("played_at", since)
        .order("played_at", { ascending: false })
        .limit(1000);
      setAttempts((data ?? []) as Attempt[]);
      setLoading(false);
    })();
  }, []);

  return <FoundationsStatsView loading={loading} signedIn={signedIn} attempts={attempts} />;
}
