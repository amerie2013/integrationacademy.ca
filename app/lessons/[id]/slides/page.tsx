"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../../lib/supabase";
import { SlideDeck } from "../../../../components/SlideDeck";
import { Block } from "../../../../lib/blocks";

export default function LessonSlidesPage() {
  const params = useParams();
  const lessonId = params.id as string;
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("lessons")
        .select("title, blocks")
        .eq("id", lessonId)
        .single();
      if (!data) setNotFound(true);
      else {
        setTitle(data.title ?? "");
        setBlocks(Array.isArray(data.blocks) ? (data.blocks as Block[]) : []);
      }
      setLoading(false);
    })();
  }, [lessonId]);

  if (loading)
    return (
      <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", color: "#cbd5e1", background: "#0f172a" }}>
        Loading slides…
      </main>
    );
  if (notFound)
    return (
      <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", color: "#cbd5e1", background: "#0f172a" }}>
        This lesson isn't available.
      </main>
    );

  return <SlideDeck title={title} blocks={blocks} />;
}
