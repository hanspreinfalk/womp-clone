"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type SceneObjectType = "cube" | "cylinder" | "sphere" | "text" | "cone" | "default" | "droplet" | "square" | "s-shaped" | "donut";

export interface SceneObject {
  id: string;
  type: SceneObjectType;
  name: string;
  x: number;
  y: number;
  color: string;
  selected: boolean;
}

const COLORS = [
  "#94a3b8", "#f87171", "#fb923c", "#facc15", "#4ade80",
  "#22d3ee", "#818cf8", "#e879f9", "#f472b6", "#a78bfa",
];

interface SceneContextValue {
  objects: SceneObject[];
  addObject: (type: SceneObjectType) => void;
  selectObject: (id: string) => void;
  removeObject: (id: string) => void;
  activePanel: "list" | "objects" | null;
  setActivePanel: (panel: "list" | "objects" | null) => void;
}

const SceneContext = createContext<SceneContextValue | null>(null);

export function SceneProvider({ children }: { children: ReactNode }) {
  const [objects, setObjects] = useState<SceneObject[]>([]);
  const [activePanel, setActivePanel] = useState<"list" | "objects" | null>("list");

  const addObject = useCallback((type: SceneObjectType) => {
    const id = `obj_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const name = type.charAt(0).toUpperCase() + type.slice(1);
    // Random position within viewport center area
    const x = 30 + Math.random() * 40;
    const y = 20 + Math.random() * 40;
    setObjects((prev) => [
      ...prev.map((o) => ({ ...o, selected: false })),
      { id, type, name, x, y, color, selected: true },
    ]);
  }, []);

  const selectObject = useCallback((id: string) => {
    setObjects((prev) =>
      prev.map((o) => ({ ...o, selected: o.id === id }))
    );
  }, []);

  const removeObject = useCallback((id: string) => {
    setObjects((prev) => prev.filter((o) => o.id !== id));
  }, []);

  return (
    <SceneContext.Provider value={{ objects, addObject, selectObject, removeObject, activePanel, setActivePanel }}>
      {children}
    </SceneContext.Provider>
  );
}

export function useScene() {
  const ctx = useContext(SceneContext);
  if (!ctx) throw new Error("useScene must be used within SceneProvider");
  return ctx;
}
