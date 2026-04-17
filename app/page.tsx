"use client";

import { LeftIconSidebar } from "@/components/womp/left-icon-sidebar";
import { LeftPanel } from "@/components/womp/left-panel";
import { Viewport } from "@/components/womp/viewport";
import { RightPanel } from "@/components/womp/right-panel";

export default function Home() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white text-sm">
      <LeftIconSidebar />
      <LeftPanel />
      <Viewport />
      <RightPanel />
    </div>
  );
}
