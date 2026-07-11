"use client";

import { SiteHeader } from "../../../components/SiteHeader";
import { Whiteboard } from "../../../components/Whiteboard";

export default function WhiteboardPage() {
  return (
    <main style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />
      <div style={{ flex: 1, minHeight: 0 }}>
        <Whiteboard />
      </div>
    </main>
  );
}
