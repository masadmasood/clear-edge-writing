import {
  mailtoHref,
  siteConfig,
  whatsappHref,
} from "@/config/site";
import { FadeIn } from "@/components/animations";

function FooterSocialLink({
  href,
  label,
  target,
  rel,
}: {
  href?: string;
  label: string;
  target?: "_blank";
  rel?: string;
}) {
  if (!href) {
    return <span aria-disabled="true">{label}</span>;
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="transition-colors duration-300 hover:text-accent"
    >
      {label}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="pb-10 pt-16 lg:pb-12 lg:pt-20">
      <FadeIn className="container mx-auto max-w-6xl px-6 text-center">
        <div className="mb-4">
          <span className="font-allura text-5xl sm:text-6xl">
            <span className="text-foreground">Clear</span>
            <span className="text-accent">Edge</span>
            <span className="ml-2 text-muted-foreground">Writing</span>
          </span>
        </div>

        <p className="mb-6 text-sm text-muted-foreground/60">
          Academic Support for CS &amp; Management Students
        </p>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 font-manrope text-[13px] font-medium text-muted-foreground/60">
          <a
            href={mailtoHref}
            className="transition-colors duration-300 hover:text-accent"
          >
            Email
          </a>
          <span className="text-border">&bull;</span>
          <FooterSocialLink href={siteConfig.facebookUrl} label="Facebook" />
          <span className="text-border">&bull;</span>
          <FooterSocialLink href={siteConfig.instagramUrl} label="Instagram" />
          <span className="text-border">&bull;</span>
          <FooterSocialLink
            href={whatsappHref}
            label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>

        <div className="border-t border-border pt-5">
          <p className="font-manrope text-[13px] text-muted-foreground/60">
            &copy; {new Date().getUTCFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </FadeIn>
    </footer>
  );
}
