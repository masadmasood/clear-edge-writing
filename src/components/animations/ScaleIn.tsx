"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { SMOOTH_EASE } from "@/components/animations/constants";

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  scale?: number;
}

export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = 0.88,
  scale = 0.96,
}: ScaleInProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.16 }}
      transition={{ duration, delay, ease: SMOOTH_EASE }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </m.div>
  );
}
