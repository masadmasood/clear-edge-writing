import {
  primaryContactHref,
  primaryContactRel,
  primaryContactTarget,
} from "@/config/site";
import { ArrowUpRight } from "lucide-react";
import { FadeIn, RevealHeading, RevealWord, ScaleIn } from "@/components/animations";

export function CTASection() {
  return (
    <section id="cta" className="py-14 sm:py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <ScaleIn scale={0.95}>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-7 py-14 text-center dark:bg-[hsl(222,35%,12%)] sm:px-14 sm:py-16 lg:px-16 lg:py-[4.75rem]">
            <div className="relative z-10">
              <FadeIn>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  Ready to Excel?
                </span>
              </FadeIn>

              <RevealHeading
                as="h2"
                className="mt-5 mb-4 font-manrope text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl"
                delay={0.1}
              >
                <>
                  <RevealWord>Elevate</RevealWord>
                  <RevealWord>Your</RevealWord>
                  <RevealWord>Academic</RevealWord>
                  <RevealWord>Work</RevealWord>
                </>
              </RevealHeading>

              <FadeIn delay={0.3}>
                <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-white/55">
                  Expert guidance tailored to your course, your brief, and UK
                  standards.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <a
                  href={primaryContactHref}
                  target={primaryContactTarget}
                  rel={primaryContactRel}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/30 px-7 py-3.5 font-manrope text-sm font-semibold text-white transition-all duration-500 hover:border-white/30 hover:bg-white/[0.1]"
                >
                  Send Your Brief Now
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </FadeIn>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
