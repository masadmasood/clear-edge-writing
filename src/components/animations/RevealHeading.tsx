"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { SMOOTH_EASE } from "@/components/animations/constants";

interface RevealHeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
  stagger?: number;
  delay?: number;
}

const motionTagMap = {
  h1: m.h1,
  h2: m.h2,
  h3: m.h3,
  span: m.span,
} as const;

export function RevealHeading({
  children,
  className = "",
  as = "h2",
  stagger = 0.06,
  delay = 0,
}: RevealHeadingProps) {
  const Tag = motionTagMap[as];

  return (
    <Tag
      className={`${className} overflow-hidden`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.22 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </Tag>
  );
}

export function RevealWord({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <m.span
      className={`inline-block mr-[0.3em] last:mr-0 ${className ?? ""}`}
      variants={{
        hidden: { opacity: 0, y: "42%" },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.72,
            ease: SMOOTH_EASE,
          },
        },
      }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </m.span>
  );
}
