"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SMOOTH_EASE } from "@/components/animations/constants";

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
}

export function AccordionItem({
  id,
  question,
  answer,
}: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border py-0.5">
      <button
        id={`${id}-trigger`}
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen((current) => !current)}
        className="group flex w-full items-center justify-between py-5 text-left font-manrope text-[15px] font-semibold text-foreground transition-colors duration-300 hover:text-accent"
      >
        <span className="pr-4">{question}</span>
        <m.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.34, ease: SMOOTH_EASE }}
          className="shrink-0"
          style={{ willChange: "transform" }}
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-accent" />
        </m.span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <m.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: SMOOTH_EASE }}
            className="overflow-hidden"
            style={{ willChange: "opacity, height" }}
          >
            <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">
              {answer}
            </p>
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
