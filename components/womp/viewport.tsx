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
  X,
} from "lucide-react";
import { useScene, type SceneObjectType } from "./scene-context";

function ShapeRenderer({ type, color, size = 80 }: { type: SceneObjectType; color: string; size?: number }) {
  switch (type) {
    case "cube":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80">
          <g transform="translate(40,40)">
            <polygon points="0,-30 30,-15 30,15 0,30 -30,15 -30,-15" fill={color} opacity="0.85" stroke={color} strokeWidth="1" />
            <polygon points="-30,-15 0,0 0,30 -30,15" fill="rgba(0,0,0,0.15)" />
            <polygon points="30,-15 0,0 0,30 30,15" fill="rgba(0,0,0,0.08)" />
            <line x1="0" y1="0" x2="0" y2="-30" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          </g>
        </svg>
      );
    case "cylinder":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80">
          <g transform="translate(40,40)">
            <rect x="-20" y="-20" width="40" height="35" rx="2" fill={color} opacity="0.8" />
            <ellipse cx="0" cy="-20" rx="20" ry="8" fill={color} opacity="0.95" />
            <ellipse cx="0" cy="15" rx="20" ry="8" fill={color} opacity="0.7" />
          </g>
        </svg>
      );
    case "sphere":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80">
          <defs>
            <radialGradient id={`sg-${color.replace('#','')}`} cx="35%" cy="35%">
              <stop offset="0%" stopColor="white" stopOpacity="0.4" />
              <stop offset="100%" stopColor={color} stopOpacity="0.9" />
            </radialGradient>
          </defs>
          <circle cx="40" cy="40" r="28" fill={`url(#sg-${color.replace('#','')})`} stroke={color} strokeWidth="0.5" />
        </svg>
      );
    case "cone":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80">
          <g transform="translate(40,40)">
            <polygon points="0,-30 25,20 -25,20" fill={color} opacity="0.85" />
            <ellipse cx="0" cy="20" rx="25" ry="8" fill={color} opacity="0.7" />
          </g>
        </svg>
      );
    case "text":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80">
          <text x="40" y="50" textAnchor="middle" fontSize="36" fontWeight="bold" fill={color} opacity="0.9">T</text>
        </svg>
      );
    case "donut":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="26" fill="none" stroke={color} strokeWidth="12" opacity="0.8" />
        </svg>
      );
    case "droplet":
      return (
        <svg width={size} height={size} viewBox="0 0 80 80">
          <path d="M40 10C40 10 18 35 18 50a22 22 0 0044 0C62 35 40 10 40 10z" fill={color} opacity="0.8" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="24" fill={color} opacity="0.8" />
        </svg>
      );
  }
}

export function Viewport() {
  const { objects, selectObject, removeObject } = useScene();

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

      {/* Scene objects */}
      {objects.map((obj) => (
        <div
          key={obj.id}
          onClick={() => selectObject(obj.id)}
          className="absolute cursor-pointer group"
          style={{
            left: `${obj.x}%`,
            top: `${obj.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Selection outline */}
          {obj.selected && (
            <div className="absolute -inset-2 border-2 border-blue-500 border-dashed rounded-lg pointer-events-none">
              {/* Corner handles */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-white border-2 border-blue-500 rounded-sm" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white border-2 border-blue-500 rounded-sm" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-white border-2 border-blue-500 rounded-sm" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-white border-2 border-blue-500 rounded-sm" />
            </div>
          )}
          {/* Delete button */}
          {obj.selected && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeObject(obj.id);
              }}
              className="absolute -top-4 -right-4 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center z-10 hover:bg-red-600"
            >
              <X className="w-3 h-3" />
            </button>
          )}
          <ShapeRenderer type={obj.type} color={obj.color} />
          {/* Label */}
          {obj.selected && (
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-blue-600 font-medium bg-white/80 px-1.5 py-0.5 rounded">
              {obj.name}
            </div>
          )}
        </div>
      ))}

      {/* Empty state placeholder (only when no objects) */}
      {objects.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative opacity-20">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-blue-400 rounded-lg transform rotate-12" />
            <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 w-[180px] h-[250px] bg-red-400 rounded-full" />
          </div>
        </div>
      )}

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
