import {
  FadeIn,
  RevealHeading,
  RevealWord,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import {
  BookOpen,
  CheckCircle,
  ClipboardList,
  FileText,
  GraduationCap,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative h-full cursor-default rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-500 hover:border-accent/25 hover:bg-card/90 sm:p-7">
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,hsl(38,70%,52%,0.04)_0%,transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-5 flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-accent/20 transition-all duration-500">
          <Icon className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
        </div>
        <h3 className="mb-1.5 font-manrope text-[15px] font-bold text-foreground transition-colors duration-500 group-hover:text-accent">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <FadeIn>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent">
              Services
            </span>
          </FadeIn>

          <RevealHeading
            as="h2"
            className="mt-3 font-manrope text-2xl font-extrabold text-foreground sm:text-3xl"
            delay={0.1}
          >
            <>
              <RevealWord>What</RevealWord>
              <RevealWord>We</RevealWord>
              <RevealWord>Help</RevealWord>
              <RevealWord>With</RevealWord>
            </>
          </RevealHeading>

          <FadeIn delay={0.3}>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Structured support across every stage of academic writing
              &mdash; from first draft to final submission.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer
          className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          <StaggerItem>
            <ServiceCard
              icon={FileText}
              title="Essay Support"
              description="Improve argumentation, academic tone, and structural clarity for coursework essays."
            />
          </StaggerItem>
          <StaggerItem>
            <ServiceCard
              icon={ClipboardList}
              title="Assignment Guidance"
              description="Organise content, meet brief requirements, and strengthen critical evaluation."
            />
          </StaggerItem>
          <StaggerItem>
            <ServiceCard
              icon={BookOpen}
              title="Research Paper Support"
              description="Literature reviews, methodology framing, referencing, and academic writing quality."
            />
          </StaggerItem>
          <StaggerItem>
            <ServiceCard
              icon={Lightbulb}
              title="Proposal Guidance"
              description="Shape research questions, objectives, and methodological approaches for approval."
            />
          </StaggerItem>
          <StaggerItem>
            <ServiceCard
              icon={GraduationCap}
              title="Dissertation Support"
              description="End-to-end guidance from proposal development through to final submission."
            />
          </StaggerItem>
          <StaggerItem>
            <ServiceCard
              icon={CheckCircle}
              title="Proofreading & Editing"
              description="Grammar, consistency, formatting, and referencing checks for polished submissions."
            />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
