"use client";

import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Crosshair,
  Grid3X3,
  LayoutGrid,
  Columns2,
  Type,
  Shuffle,
  Spline,
} from "lucide-react";

export function Viewport() {
  return (
    <div className="flex-1 relative bg-[#f0f0f0] overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(200,200,200,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,200,200,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }} />

      {/* 3D Scene placeholder - gradient floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%]" style={{
        background: 'linear-gradient(to bottom, transparent, rgba(220,220,225,0.6))',
      }} />

      {/* Placeholder 3D object silhouette */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[400px] relative opacity-20">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-blue-400 rounded-lg transform rotate-12" />
          <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 w-[180px] h-[250px] bg-red-400 rounded-full" />
        </div>
      </div>

      {/* Navigation gizmo - top right */}
      <div className="absolute top-6 right-20 flex flex-col items-center">
        <button className="text-gray-400 hover:text-gray-600">
          <ChevronUp className="w-5 h-5" />
        </button>
        <div className="flex items-center">
          <button className="text-gray-400 hover:text-gray-600">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="w-12 h-12 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-[10px] text-gray-500 font-medium shadow-sm">
            <span className="text-gray-400 text-[9px]">left</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Right side tools */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        <button className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 shadow-sm">
          <Grid3X3 className="w-4 h-4" />
        </button>
        <button className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 shadow-sm">
          <Crosshair className="w-4 h-4" />
        </button>
        <button className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 shadow-sm">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
          </svg>
        </button>
        <div className="my-2" />
        <button className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 shadow-sm">
          <LayoutGrid className="w-4 h-4" />
        </button>
        <button className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 shadow-sm">
          <Columns2 className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom toolbar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white rounded-xl border border-gray-200 px-2 py-1.5 shadow-sm">
        <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="7" cy="7" r="1.5" />
            <circle cx="12" cy="7" r="1.5" />
            <circle cx="17" cy="7" r="1.5" />
            <circle cx="7" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="17" cy="12" r="1.5" />
            <circle cx="7" cy="17" r="1.5" />
            <circle cx="12" cy="17" r="1.5" />
            <circle cx="17" cy="17" r="1.5" />
          </svg>
        </button>
        <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100">
          <Spline className="w-5 h-5" />
        </button>
        <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100">
          <Type className="w-5 h-5" />
        </button>
        <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100">
          <Shuffle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
