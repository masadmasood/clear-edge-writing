import Image from "next/image";
import {
  AnimatedPath,
  FadeIn,
  RevealHeading,
  RevealWord,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

function StepCard({
  image,
  number,
  title,
  description,
}: {
  image: string;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group space-y-4 text-center">
      <div className="mx-auto h-[110px] w-[110px]">
        <Image
          src={image}
          alt={title}
          width={512}
          height={512}
          sizes="110px"
          className="h-full w-full object-contain transition-transform duration-500 hover:scale-[1.05]"
        />
      </div>
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15">
        <span className="font-manrope text-xs font-bold text-accent">{number}</span>
      </div>
      <h3 className="font-manrope text-base font-bold text-foreground transition-colors duration-500 group-hover:text-accent">
        {title}
      </h3>
      <p className="mx-auto max-w-[280px] text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent">
              Process
            </span>
          </FadeIn>

          <RevealHeading
            as="h2"
            className="mt-3 font-manrope text-2xl font-extrabold text-foreground sm:text-3xl"
            delay={0.1}
          >
            <>
              <RevealWord>How</RevealWord>
              <RevealWord>It</RevealWord>
              <RevealWord>Works</RevealWord>
            </>
          </RevealHeading>

          <FadeIn delay={0.2}>
            <p className="mt-3 text-sm text-muted-foreground">
              Three simple steps to stronger academic work.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          <svg
            className="pointer-events-none absolute top-[60px] left-0 hidden h-[40px] w-full md:block"
            viewBox="0 0 900 40"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <AnimatedPath d="M 150 20 C 220 60, 280 -20, 450 20" delay={0.4} />
            <AnimatedPath d="M 450 20 C 620 60, 680 -20, 750 20" delay={0.8} />
          </svg>

          <StaggerContainer
            className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-10"
            stagger={0.25}
          >
            <StaggerItem>
              <StepCard
                image="/assets/step-share.png"
                number="01"
                title="Share Your Brief"
                description="Send us your assignment details, requirements, and any supporting materials."
              />
            </StaggerItem>
            <StaggerItem>
              <StepCard
                image="/assets/step-review.png"
                number="02"
                title="We Review & Plan"
                description="We assess the scope, subject area, and academic level to tailor our approach."
              />
            </StaggerItem>
            <StaggerItem>
              <StepCard
                image="/assets/step-guidance.png"
                number="03"
                title="Receive Structured Guidance"
                description="Get clear, organised guidance that helps you produce stronger academic work."
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
