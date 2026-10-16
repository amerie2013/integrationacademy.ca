"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../../lib/supabase";
import { SlideDeck } from "../../../../components/SlideDeck";
import { Block } from "../../../../lib/blocks";
import { previewBlocks } from "../../../../lib/lessonPreview";
import { accentClass } from "../../../../lib/courseAccent";

export default function LessonSlidesPage() {
  const params = useParams();
  const lessonId = params.id as string;
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [courseCode, setCourseCode] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    (async () => {
      const preview = await previewBlocks(lessonId);
      const { data: row } = await supabase
        .from("lessons")
        .select("title, blocks, course_id")
        .eq("id", lessonId)
        .single();
      // dev-only preview also works signed out (no DB row visible): use its title.
      const data = row ?? (preview ? { title: preview.title, blocks: preview.blocks, course_id: null } : null);
      if (!data) setNotFound(true);
      else {
        setTitle(data.title ?? "");
        setBlocks(preview?.blocks ?? (Array.isArray(data.blocks) ? (data.blocks as Block[]) : []));
        if (data.course_id) {
          const { data: c } = await supabase.from("courses").select("code").eq("id", data.course_id).single();
          setCourseCode(c?.code ?? null);
        }
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

  return <div className={accentClass(courseCode)}><SlideDeck title={title} blocks={blocks} /></div>;
}
