"use client";

import { useState, useSyncExternalStore } from "react";
import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { SMOOTH_EASE } from "@/components/animations/constants";

const emptySubscribe = () => () => {};

function ClearEdgeLogo() {
  return (
    <Link href="/" className="flex items-baseline gap-[1px]" aria-label="ClearEdge Writing home">
      <span className="font-manrope text-[1.35rem] font-extrabold tracking-[-0.03em] text-foreground">
        Clear
      </span>
      <span className="font-manrope text-[1.35rem] font-extrabold tracking-[-0.03em] text-accent">
        Edge
      </span>
    </Link>
  );
}

function DesktopNavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="relative font-manrope text-[13px] font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-0 after:bg-accent after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
    >
      {label}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block font-manrope text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
    >
      {label}
    </Link>
  );
}

function ThemeToggleButton({
  isDark,
  mounted,
  onClick,
  className,
}: {
  isDark: boolean;
  mounted: boolean;
  onClick: () => void;
  className: string;
}) {
  const showDarkTheme = mounted && isDark;
  const ariaLabel = mounted
    ? showDarkTheme
      ? "Switch to light mode"
      : "Switch to dark mode"
    : "Toggle theme";

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
    >
      <Sun
        className={`absolute inset-0 m-auto h-4 w-4 transition-opacity ${
          showDarkTheme ? "opacity-100" : "opacity-0"
        }`}
      />
      <Moon
        className={`absolute inset-0 m-auto h-4 w-4 transition-opacity ${
          showDarkTheme ? "opacity-0" : "opacity-100"
        }`}
      />
    </button>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[4.25rem]">
        <ClearEdgeLogo />

        <nav className="hidden items-center gap-7 md:flex lg:gap-8" aria-label="Primary">
          <DesktopNavLink href="/#services" label="Services" />
          <DesktopNavLink href="/#how-it-works" label="How It Works" />
          <DesktopNavLink href="/#faq" label="FAQ" />
          <DesktopNavLink href="/#cta" label="Contact" />
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggleButton
            isDark={isDark}
            mounted={mounted}
            onClick={toggleTheme}
            className="relative h-8 w-8 rounded-full bg-secondary text-foreground hover:bg-muted"
          />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggleButton
            isDark={isDark}
            mounted={mounted}
            onClick={toggleTheme}
            className="relative h-8 w-8 rounded-full bg-secondary text-foreground"
          />
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="rounded-lg bg-secondary p-2 text-foreground"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <m.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.36, ease: SMOOTH_EASE }}
            className="overflow-hidden bg-background/95 backdrop-blur-xl md:hidden"
            style={{ willChange: "opacity, height" }}
          >
            <nav className="space-y-4 px-6 pb-5 pt-4" aria-label="Mobile">
              <MobileNavLink
                href="/#services"
                label="Services"
                onClick={() => setMobileOpen(false)}
              />
              <MobileNavLink
                href="/#how-it-works"
                label="How It Works"
                onClick={() => setMobileOpen(false)}
              />
              <MobileNavLink
                href="/#faq"
                label="FAQ"
                onClick={() => setMobileOpen(false)}
              />
              <MobileNavLink
                href="/#cta"
                label="Contact"
                onClick={() => setMobileOpen(false)}
              />
            </nav>
          </m.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
