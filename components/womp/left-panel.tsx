"use client";

import {
  ChevronDown,
  ChevronRight,
  Copy,
  Crown,
  Plus,
  RefreshCw,
  Target,
  Box,
} from "lucide-react";
import { useScene } from "./scene-context";

export function LeftPanel() {
  const { objects, selectObject } = useScene();

  return (
    <div className="flex flex-col w-[272px] min-w-[272px] border-r border-gray-200 bg-white">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100">
        <div className="flex items-center justify-center w-6 h-6">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="currentColor">
            <path d="M3 7l3 10h2l2-6 2 6h2l3-10h-2l-2 7-2-6h-2l-2 6-2-7z" />
          </svg>
        </div>
        <span className="text-sm font-medium text-gray-900">Untitled</span>
        <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        <span className="ml-1 px-2 py-0.5 text-[11px] text-gray-500 bg-gray-100 rounded-full">
          Non-Pro
        </span>
        <button className="ml-auto text-gray-400 hover:text-gray-600">
          <Copy className="w-4 h-4" />
        </button>
      </div>

      {/* Try Pro button */}
      <div className="px-3 py-2">
        <button className="flex items-center justify-center gap-2 w-full py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          <Crown className="w-4 h-4 text-amber-500" />
          Try Pro for free
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 px-3">
        <button className="px-3 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
          List
        </button>
        <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
          Imports
        </button>
        <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
          Health
        </button>
      </div>

      {/* Cameras */}
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-xs font-medium text-gray-500">Cameras</span>
        <div className="flex items-center gap-1">
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          <button className="text-gray-400 hover:text-gray-600">
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Objects header */}
      <div className="flex items-center justify-between px-3 py-1.5 border-t border-gray-100">
        <span className="text-xs font-semibold text-gray-900">Objects</span>
        <div className="flex items-center gap-1">
          <button className="text-gray-400 hover:text-gray-600">
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Object tree */}
      <div className="flex-1 overflow-y-auto px-1">
        {/* Area */}
        <div className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-50 cursor-pointer">
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <Box className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <Target className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <span className="text-xs text-gray-700 truncate">Area ({objects.length})</span>
        </div>

        {/* Scene objects */}
        {objects.map((obj) => (
          <div
            key={obj.id}
            onClick={() => selectObject(obj.id)}
            className={`flex items-center gap-1 px-2 py-1 rounded cursor-pointer ${
              obj.selected ? "bg-blue-50" : "hover:bg-gray-50"
            }`}
          >
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
            <Box className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <div
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: obj.color }}
            />
            <span className={`text-xs truncate ${obj.selected ? "text-blue-600 font-medium" : "text-gray-700"}`}>
              {obj.name}
            </span>
          </div>
        ))}
      </div>

      {/* Drop zone */}
      <div className="flex flex-col items-center justify-center px-4 py-6 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-500 leading-relaxed">
          Drag and drop any 3D object,
          <br />
          image, or SVG
        </p>
        <p className="text-xs text-gray-400 mt-1">
          or <span className="text-blue-600 cursor-pointer hover:underline">click to browse files</span>
        </p>
      </div>
    </div>
  );
}
