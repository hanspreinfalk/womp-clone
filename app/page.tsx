"use client";

import { LeftIconSidebar } from "@/components/womp/left-icon-sidebar";
import { LeftPanel } from "@/components/womp/left-panel";
import { ObjectsPanel } from "@/components/womp/objects-panel";
import { Viewport } from "@/components/womp/viewport";
import { RightPanel } from "@/components/womp/right-panel";
import { SceneProvider, useScene } from "@/components/womp/scene-context";

function EditorLayout() {
  const { activePanel } = useScene();

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white text-sm">
      <LeftIconSidebar />
      {activePanel === "list" && <LeftPanel />}
      {activePanel === "objects" && <ObjectsPanel />}
      <Viewport />
      <RightPanel />
    </div>
  );
}

export default function Home() {
  return (
    <SceneProvider>
      <EditorLayout />
    </SceneProvider>
  );
}
