import Image from "next/image";
import { Award, Shield, Target, type LucideIcon } from "lucide-react";
import {
  FadeIn,
  RevealHeading,
  RevealWord,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

function TrustBadge({
  icon: Icon,
  text,
}: {
  icon: LucideIcon;
  text: string;
}) {
  return (
    <div className="group flex items-center gap-2.5 text-[12px] font-medium text-foreground/75 dark:text-foreground/75 sm:whitespace-nowrap">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-500 group-hover:bg-accent/20 dark:bg-muted">
        <Icon className="h-3.5 w-3.5 text-primary transition-colors duration-500 group-hover:text-accent dark:text-foreground/80" strokeWidth={1.5} />
      </div>
      <span>{text}</span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative z-10 flex min-h-[calc(100vh-12rem)] items-center py-6 sm:py-8 lg:py-4">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="space-y-6 lg:max-w-[34rem]">
            <FadeIn>
              <span className="inline-block rounded-full bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-accent">
                For UK University Students
              </span>
            </FadeIn>

            <RevealHeading
              as="h1"
              className="font-manrope text-3xl font-extrabold leading-[1.12] text-foreground sm:text-4xl lg:text-[2.75rem]"
            >
              <>
                <RevealWord>Clear</RevealWord>
                <RevealWord>Academic</RevealWord>
                <RevealWord>Support</RevealWord>
                <RevealWord>for</RevealWord>
                <RevealWord className="text-accent">Computer</RevealWord>
                <RevealWord className="text-accent">Science</RevealWord>
                <RevealWord>&amp;</RevealWord>
                <RevealWord className="text-accent">Management</RevealWord>
                <RevealWord>Students</RevealWord>
              </>
            </RevealHeading>

            <FadeIn delay={0.1}>
              <p className="max-w-[32rem] text-[15px] leading-[1.8] text-muted-foreground">
                Helping students improve structure, clarity, referencing, and
                research quality across essays, assignments, proposals, and
                dissertations.
              </p>
            </FadeIn>

            <StaggerContainer
              className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-2 sm:gap-x-6"
              stagger={0.12}
            >
              <StaggerItem>
                <TrustBadge icon={Shield} text="UK-Focused" />
              </StaggerItem>
              <StaggerItem>
                <TrustBadge icon={Target} text="Subject-Specific" />
              </StaggerItem>
              <StaggerItem>
                <TrustBadge icon={Award} text="Expert Academics" />
              </StaggerItem>
            </StaggerContainer>
          </div>

          <ScaleIn className="flex justify-center lg:justify-end" delay={0.2}>
            <Image
              src="/assets/hero-visual.png"
              alt="Academic support illustration"
              width={1024}
              height={1024}
              priority
              sizes="(min-width: 1024px) 780px, (min-width: 768px) 60vw, 100vw"
              className="w-full max-w-[720px] transition-transform duration-700 hover:scale-[1.03] lg:max-w-[780px]"
            />
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}
