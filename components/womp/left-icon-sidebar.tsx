"use client";

import {
  Home,
  Pencil,
  Box,
  Circle,
  Sun,
  GitBranch,
  Wifi,
  Download,
  MoreHorizontal,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { useBryanChat } from "@/app/bryan-widget";
import { useScene } from "./scene-context";

export function LeftIconSidebar() {
  const { toggle } = useBryanChat();
  const { activePanel, setActivePanel } = useScene();

  const topItems = [
    { icon: Home, label: "Home", hasDropdown: false, panel: null as "list" | "objects" | null },
    { icon: Pencil, label: "Draw", hasDropdown: true, panel: null as "list" | "objects" | null },
    { icon: Box, label: "Objects", hasDropdown: false, panel: "objects" as const },
    { icon: Circle, label: "Material", hasDropdown: false, panel: null as "list" | "objects" | null },
    { icon: Sun, label: "Lighting", hasDropdown: false, panel: null as "list" | "objects" | null },
    { icon: GitBranch, label: "Functions", hasDropdown: false, panel: null as "list" | "objects" | null },
  ];

  const bottomItems = [
    { icon: Wifi },
    { icon: Download },
    { icon: MoreHorizontal },
  ];

  return (
    <div className="flex flex-col items-center justify-between w-[56px] min-w-[56px] border-r border-gray-200 bg-white py-2">
      {/* Top icons */}
      <div className="flex flex-col items-center gap-1">
        {topItems.map((item) => {
          const isActive = item.panel !== null && activePanel === item.panel;
          return (
            <button
              key={item.label}
              onClick={() => {
                if (item.panel !== null) {
                  setActivePanel(activePanel === item.panel ? "list" : item.panel);
                }
              }}
              className={`flex flex-col items-center justify-center w-[48px] py-1.5 rounded-lg text-[10px] transition-colors ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-5 h-5 mb-0.5" strokeWidth={1.5} />
              <span className="leading-tight flex items-center gap-0.5">
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-2.5 h-2.5" />}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom icons */}
      <div className="flex flex-col items-center gap-1">
        {bottomItems.map((item, i) => (
          <button
            key={i}
            className="flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <item.icon className="w-5 h-5" strokeWidth={1.5} />
          </button>
        ))}
        {/* Help button - opens Bryan chat */}
        <button
          onClick={toggle}
          className="flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <HelpCircle className="w-5 h-5" strokeWidth={1.5} />
        </button>
        {/* User avatar */}
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-semibold mt-1">
          H
        </button>
      </div>
    </div>
  );
}
