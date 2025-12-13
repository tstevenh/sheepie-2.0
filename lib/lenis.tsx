"use client";

import { Lenis as ReactLenisOriginal } from "lenis/react";
import { ReactNode } from "react";

export function ReactLenis({ root, children }: { root?: boolean; children: ReactNode }) {
  return (
    // Lower duration = more responsive/snappier scroll (less "floaty" delay)
    <ReactLenisOriginal root={root} options={{ duration: 0.7, smoothWheel: true }}>
      {children}
    </ReactLenisOriginal>
  );
}
