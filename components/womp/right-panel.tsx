"use client";

import {
  Printer,
  Camera,
  Globe,
  Sparkles,
  Plus,
  Clock,
  Settings2,
  SendHorizontal,
} from "lucide-react";

export function RightPanel() {
  return (
    <div className="flex flex-col w-[300px] min-w-[300px] border-l border-gray-200 bg-white">
      {/* Top header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
            Share
          </button>
          <button className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            <Printer className="w-4 h-4" />
            Print
          </button>
        </div>
      </div>

      {/* AI Tabs */}
      <div className="flex items-center justify-center gap-4 py-2 border-b border-gray-100">
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100">
          <Camera className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100">
          <Globe className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-blue-600 bg-blue-50">
          <Sparkles className="w-4 h-4" />
        </button>
      </div>

      {/* New / History toggle */}
      <div className="flex items-center gap-2 px-3 py-3">
        <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full">
          <Plus className="w-4 h-4" />
          New
        </button>
        <button className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-500 hover:text-gray-700">
          <Clock className="w-4 h-4" />
          History
        </button>
      </div>

      {/* Chat cards */}
      <div className="flex-1 overflow-y-auto px-3 space-y-3">
        {/* Row of two cards */}
        <div className="flex gap-2">
          {/* Card 1 - Generate image */}
          <div className="flex-1 border border-gray-200 rounded-xl p-3 cursor-pointer hover:border-gray-300 transition-colors">
            <span className="text-[11px] text-gray-400 font-medium">Generate image</span>
            <p className="text-xs text-gray-700 mt-1 leading-relaxed">
              Make futuristic personal digital electronic.
            </p>
            <div className="mt-2 w-full aspect-square rounded-lg bg-gradient-to-br from-gray-700 via-gray-500 to-gray-600 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                <div className="w-8 h-10 bg-gradient-to-b from-gray-400 to-gray-500 rounded-sm" />
              </div>
            </div>
          </div>

          {/* Card 2 - Generate image */}
          <div className="flex-1 border border-gray-200 rounded-xl p-3 cursor-pointer hover:border-gray-300 transition-colors">
            <span className="text-[11px] text-gray-400 font-medium">Generate image</span>
            <p className="text-xs text-gray-700 mt-1 leading-relaxed">
              Give me 4 examples of a modern award fo...
            </p>
            <div className="mt-2 w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-amber-100 via-green-200 to-blue-200 flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-4 h-8 bg-orange-400 rounded-sm transform -rotate-6" />
                <div className="w-4 h-8 bg-green-400 rounded-full" />
                <div className="w-4 h-8 bg-blue-400 rounded-sm transform rotate-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Ask */}
        <div className="border border-gray-200 rounded-xl p-3 cursor-pointer hover:border-gray-300 transition-colors max-w-[50%]">
          <span className="text-[11px] text-gray-400 font-medium">Ask</span>
          <p className="text-xs text-gray-700 mt-1 leading-relaxed">
            Can you teach me Womp?
          </p>
          <div className="mt-2 w-full aspect-[4/3] rounded-lg bg-gradient-to-br from-blue-100 to-blue-200" />
        </div>
      </div>

      {/* Input area */}
      <div className="border-t border-gray-100 px-3 py-3">
        {/* Input field */}
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-200">
            <input
              type="text"
              placeholder="How do I hollow my model to save on printing?"
              className="flex-1 bg-transparent text-xs text-gray-500 placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* Bottom actions */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100">
              <Plus className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100">
              <Settings2 className="w-4 h-4" />
            </button>
          </div>
          <button className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
            <SendHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] text-gray-400 text-center mt-2 leading-relaxed">
          Womp chat can make mistakes. Your creations and chats are
          <br />
          never used to train or improve our models.
        </p>
      </div>
    </div>
  );
}
