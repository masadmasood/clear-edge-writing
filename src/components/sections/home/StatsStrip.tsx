import { BookOpen, Clock, Monitor, Users, type LucideIcon } from "lucide-react";
import { ScaleIn, StaggerContainer, StaggerItem } from "@/components/animations";

function StatItem({
  icon: Icon,
  value,
  detail,
  border,
}: {
  icon: LucideIcon;
  value: string;
  detail: string;
  border?: boolean;
}) {
  return (
    <div className={`group px-4 py-6 text-center sm:px-5 sm:py-8 ${border ? "md:border-r md:border-white/10" : ""}`}>
      <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08] transition-colors duration-500 group-hover:bg-accent/20">
        <Icon className="h-5 w-5 text-accent transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
      </div>
      <p className="font-manrope text-sm font-bold text-white">{value}</p>
      <p className="mt-1.5 text-xs text-white/50">{detail}</p>
    </div>
  );
}

export function StatsStrip() {
  return (
    <section className="relative z-20 py-8 sm:py-10">
      <div className="container mx-auto max-w-6xl px-6">
        <ScaleIn scale={0.95}>
          <div className="rounded-[1.65rem] bg-primary px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16 dark:bg-[hsl(222,35%,12%)]">
            <StaggerContainer className="grid grid-cols-2 gap-0 md:grid-cols-4" stagger={0.12}>
              <StaggerItem>
                <StatItem
                  icon={Users}
                  value="Trusted by Students"
                  detail="Across 15+ UK universities"
                  border
                />
              </StaggerItem>
              <StaggerItem>
                <StatItem
                  icon={Clock}
                  value="24-Hour Turnaround"
                  detail="On initial review & response"
                  border
                />
              </StaggerItem>
              <StaggerItem>
                <StatItem
                  icon={Monitor}
                  value="CS & Management"
                  detail="BSc, MSc, and related programmes"
                  border
                />
              </StaggerItem>
              <StaggerItem>
                <StatItem
                  icon={BookOpen}
                  value="Complete Guidance"
                  detail="From essays to dissertations"
                />
              </StaggerItem>
            </StaggerContainer>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
