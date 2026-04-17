"use client";

import Script from "next/script";
import { useCallback } from "react";

declare global {
  interface Window {
    Bryan?: {
      show: () => void;
      hide: () => void;
      toggle: () => void;
      setUser: (user: {
        name: string;
        email: string;
        pictureUrl?: string;
      }) => void;
      clearUser: () => void;
    };
  }
}

export function BryanWidget() {
  return (
    <Script
      src="https://widget.bryan.chat/widget.js"
      data-organization-id="org_3CV6rWjfLv6is0ulddScqi7qMTl"
      data-hide-launcher="true"
      data-position="bottom-left"
      strategy="afterInteractive"
    />
  );
}

export function useBryanChat() {
  const open = useCallback(() => window.Bryan?.show(), []);
  const close = useCallback(() => window.Bryan?.hide(), []);
  const toggle = useCallback(() => window.Bryan?.toggle(), []);
  return { open, close, toggle };
}
