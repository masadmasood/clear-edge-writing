import Image from "next/image";
import { Award, Globe, Shield, Users, type LucideIcon } from "lucide-react";
import {
  FadeIn,
  RevealHeading,
  RevealWord,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

function TrustPoint({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group -m-3 flex gap-4 rounded-xl p-3 transition-colors duration-500 hover:bg-accent/[0.04]">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 transition-all duration-500 group-hover:bg-accent/25">
        <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="mb-1 font-manrope text-[15px] font-bold text-foreground transition-colors duration-500 group-hover:text-accent">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

export function TrustSection() {
  return (
    <section id="trust" className="py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScaleIn className="flex justify-center lg:justify-start">
            <Image
              src="/assets/trust-visual.png"
              alt="Trust and academic excellence"
              width={1024}
              height={1024}
              sizes="(min-width: 1024px) 420px, 100vw"
              className="w-full max-w-[420px] transition-transform duration-700 hover:scale-[1.03]"
            />
          </ScaleIn>

          <div>
            <FadeIn>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent">
                Trust
              </span>
            </FadeIn>

            <RevealHeading
              as="h2"
              className="mt-4 mb-7 font-manrope text-2xl font-extrabold text-foreground sm:text-3xl"
              delay={0.1}
            >
              <>
                <RevealWord>Why</RevealWord>
                <RevealWord>Students</RevealWord>
                <RevealWord>Choose</RevealWord>
                <RevealWord>Us</RevealWord>
              </>
            </RevealHeading>

            <StaggerContainer className="space-y-5" stagger={0.15} delay={0.2}>
              <StaggerItem>
                <TrustPoint
                  icon={Shield}
                  title="100% Confidential"
                  description="Your identity, materials, and communication are never shared with third parties."
                />
              </StaggerItem>
              <StaggerItem>
                <TrustPoint
                  icon={Award}
                  title="Experienced Specialists"
                  description="Our team includes academics and researchers with deep subject expertise."
                />
              </StaggerItem>
              <StaggerItem>
                <TrustPoint
                  icon={Users}
                  title="Trusted by Students"
                  description="Students across 15+ UK universities rely on us for structured academic support."
                />
              </StaggerItem>
              <StaggerItem>
                <TrustPoint
                  icon={Globe}
                  title="UK-Focused Expertise"
                  description="We understand UK marking criteria, academic conventions, and institutional expectations."
                />
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
