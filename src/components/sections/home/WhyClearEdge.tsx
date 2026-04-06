import Image from "next/image";
import {
  FadeIn,
  RevealHeading,
  RevealWord,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

function PointItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group -m-3 flex gap-4 rounded-xl p-3 transition-colors duration-500 hover:bg-accent/[0.04]">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 transition-colors duration-500 group-hover:bg-accent/25">
        <span className="font-manrope text-xs font-bold text-accent">{number}</span>
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

export function WhyClearEdge() {
  return (
    <section id="why" className="py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScaleIn>
            <Image
              src="/assets/why-visual.png"
              alt="Academic books and research"
              width={1024}
              height={1024}
              sizes="(min-width: 1024px) 460px, 100vw"
              className="mx-auto w-full max-w-[460px] transition-transform duration-700 hover:scale-[1.03]"
            />
          </ScaleIn>

          <div>
            <FadeIn>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent">
                Why ClearEdge
              </span>
            </FadeIn>

            <RevealHeading
              as="h2"
              className="mt-4 mb-7 font-manrope text-2xl font-extrabold text-foreground sm:text-3xl"
              delay={0.1}
            >
              <>
                <RevealWord>Built</RevealWord>
                <RevealWord>for</RevealWord>
                <RevealWord>Students</RevealWord>
                <RevealWord>Who</RevealWord>
                <RevealWord>Take</RevealWord>
                <RevealWord>Their</RevealWord>
                <RevealWord>Work</RevealWord>
                <RevealWord>Seriously</RevealWord>
              </>
            </RevealHeading>

            <StaggerContainer className="space-y-6" stagger={0.15} delay={0.2}>
              <StaggerItem>
                <PointItem
                  number="01"
                  title="Subject-Specific Expertise"
                  description="Our specialists understand CS and Management curricula, marking criteria, and academic expectations at UK institutions."
                />
              </StaggerItem>
              <StaggerItem>
                <PointItem
                  number="02"
                  title="Structured, Not Generic"
                  description="Every piece of guidance is tailored to your specific assignment, module, and academic level."
                />
              </StaggerItem>
              <StaggerItem>
                <PointItem
                  number="03"
                  title="Confidential & Reliable"
                  description="All communication and materials are handled with strict confidentiality. Your work stays between us."
                />
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
