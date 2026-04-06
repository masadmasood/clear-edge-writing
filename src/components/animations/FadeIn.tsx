"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { SMOOTH_EASE } from "@/components/animations/constants";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.72,
  y = 22,
}: FadeInProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.18 }}
      transition={{ duration, delay, ease: SMOOTH_EASE }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </m.div>
  );
}
