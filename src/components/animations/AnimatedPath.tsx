"use client";

import { m } from "framer-motion";
import { SMOOTH_EASE } from "@/components/animations/constants";

interface AnimatedPathProps {
  d: string;
  delay?: number;
}

export function AnimatedPath({ d, delay = 0 }: AnimatedPathProps) {
  return (
    <m.path
      d={d}
      stroke="hsl(var(--accent))"
      strokeWidth="2"
      strokeDasharray="8 6"
      fill="none"
      vectorEffect="non-scaling-stroke"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.5 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.95, delay, ease: SMOOTH_EASE }}
      style={{ willChange: "opacity" }}
    />
  );
}
