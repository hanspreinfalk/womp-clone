"use client";

import {
  Search,
  ChevronLeft,
  ChevronRight,
  Upload,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import { useScene, type SceneObjectType } from "./scene-context";

const primitives: { type: SceneObjectType; label: string; icon: React.ReactNode }[] = [
  {
    type: "cube",
    label: "Cube",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 14l10-6 10 6v12l-10 6-10-6z" />
        <path d="M10 14l10 6 10-6" />
        <path d="M20 20v12" />
      </svg>
    ),
  },
  {
    type: "cylinder",
    label: "Cylinder",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="20" cy="12" rx="10" ry="4" />
        <path d="M10 12v16c0 2.2 4.5 4 10 4s10-1.8 10-4V12" />
      </svg>
    ),
  },
  {
    type: "sphere",
    label: "Sphere",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="20" cy="20" r="12" />
        <ellipse cx="20" cy="20" rx="12" ry="4" />
      </svg>
    ),
  },
  {
    type: "text",
    label: "Text",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 12h20M20 12v18M14 12v2M26 12v2" />
      </svg>
    ),
  },
  {
    type: "cone",
    label: "Cone",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 8L8 30h24L20 8z" />
        <ellipse cx="20" cy="30" rx="12" ry="3" />
      </svg>
    ),
  },
];

const curves: { type: SceneObjectType; label: string; icon: React.ReactNode }[] = [
  {
    type: "default",
    label: "Default",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 28Q14 8 20 20Q26 32 32 12" />
      </svg>
    ),
  },
  {
    type: "droplet",
    label: "Droplet",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 6C20 6 10 18 10 24a10 10 0 0020 0C30 18 20 6 20 6z" />
      </svg>
    ),
  },
  {
    type: "square",
    label: "Square",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="8" width="24" height="24" rx="1" />
      </svg>
    ),
  },
  {
    type: "s-shaped",
    label: "S shaped",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8Q28 8 28 20Q28 32 12 32" />
      </svg>
    ),
  },
  {
    type: "donut",
    label: "Donut",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="20" cy="20" r="12" />
        <circle cx="20" cy="20" r="5" />
      </svg>
    ),
  },
];

const communityFiles = [
  { name: "Coffe follow along", color: "bg-yellow-300" },
  { name: "Bone", color: "bg-gray-900" },
  { name: "Skull Bolter", color: "bg-blue-400" },
];

const smartTemplates = [
  { name: "Custom Keycap...", color: "bg-pink-200" },
  { name: "Artisan Keycap", color: "bg-pink-300" },
  { name: "Radial Grid", color: "bg-amber-200" },
];

export function ObjectsPanel() {
  const { addObject } = useScene();

  return (
    <div className="flex flex-col w-[340px] min-w-[340px] border-r border-gray-200 bg-white overflow-y-auto">
      {/* Search */}
      <div className="px-3 py-3">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
          <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search in all"
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
          />
        </div>
      </div>

      {/* Objects section */}
      <div className="px-3 pb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-900">Objects</span>
          <div className="flex items-center gap-1">
            <button className="text-gray-400 hover:text-gray-600">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-1">
          {primitives.map((p) => (
            <button
              key={p.type}
              onClick={() => addObject(p.type)}
              className="flex flex-col items-center gap-1 py-2 px-1 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-600 transition-colors"
            >
              {p.icon}
              <span className="text-[10px]">{p.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Curves section */}
      <div className="px-3 pb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-900">Curves</span>
          <div className="flex items-center gap-1">
            <button className="text-gray-400 hover:text-gray-600">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-1">
          {curves.map((c) => (
            <button
              key={c.type}
              onClick={() => addObject(c.type)}
              className="flex flex-col items-center gap-1 py-2 px-1 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-600 transition-colors"
            >
              {c.icon}
              <span className="text-[10px]">{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3D objects library */}
      <div className="px-3 pb-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-gray-900">3D objects library</span>
            <HelpCircle className="w-3.5 h-3.5 text-gray-400" />
            <AlertTriangle className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">Upload</button>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">See all</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="cursor-pointer group">
            <div className="aspect-square rounded-lg bg-red-100 overflow-hidden flex items-center justify-center">
              <div className="w-12 h-16 bg-red-400 rounded-lg" />
            </div>
            <p className="text-[11px] text-gray-600 mt-1 truncate">A-very-cool-an...</p>
          </div>
          <div className="cursor-pointer group">
            <div className="aspect-square rounded-lg bg-red-100 overflow-hidden flex items-center justify-center">
              <div className="w-12 h-16 bg-red-500 rounded-lg" />
            </div>
            <p className="text-[11px] text-gray-600 mt-1 truncate">A-very-cool-an...</p>
          </div>
        </div>
      </div>

      {/* Community files */}
      <div className="px-3 pb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-900">Community files</span>
          <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-gray-600">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">See all</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {communityFiles.map((f, i) => (
            <div key={i} className="cursor-pointer">
              <div className={`aspect-square rounded-lg ${f.color} overflow-hidden`} />
              <p className="text-[11px] text-gray-600 mt-1 truncate">{f.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* My projects */}
      <div className="px-3 pb-3">
        <span className="text-sm font-semibold text-gray-900">My projects</span>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="cursor-pointer">
            <div className="aspect-square rounded-lg bg-amber-100 overflow-hidden flex items-center justify-center">
              <div className="w-8 h-8 bg-amber-400 rounded" />
            </div>
            <p className="text-[11px] text-gray-600 mt-1 truncate">Untitled 1766468</p>
          </div>
        </div>
      </div>

      {/* Smart templates */}
      <div className="px-3 pb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-gray-900">Smart templates</span>
            <span className="text-amber-500">&#9733;</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-gray-400 hover:text-gray-600">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">See all</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {smartTemplates.map((t, i) => (
            <div key={i} className="cursor-pointer">
              <div className={`aspect-square rounded-lg ${t.color} overflow-hidden`} />
              <p className="text-[11px] text-gray-600 mt-1 truncate">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
