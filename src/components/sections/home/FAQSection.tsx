import { faqEntries } from "@/content/faq";
import { FadeIn, RevealHeading, RevealWord } from "@/components/animations";
import { AccordionItem } from "@/components/ui/AccordionItem";

export function FAQSection() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-14">
          <div className="lg:sticky lg:top-24">
            <FadeIn>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent">
                FAQ
              </span>
            </FadeIn>

            <RevealHeading
              as="h2"
              className="mt-3 mb-3 font-manrope text-2xl font-extrabold text-foreground sm:text-3xl"
              delay={0.1}
            >
              <>
                <RevealWord>Frequently</RevealWord>
                <RevealWord>Asked</RevealWord>
                <RevealWord>Questions</RevealWord>
              </>
            </RevealHeading>

            <FadeIn delay={0.3}>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Everything you need to know about our academic support services.
                Can&apos;t find an answer? Reach out to us directly.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="lg:ml-auto lg:max-w-[42rem]">
              <AccordionItem
                id="faq-subjects"
                question={faqEntries.subjects.question}
                answer={faqEntries.subjects.answer}
              />
              <AccordionItem
                id="faq-writing-service"
                question={faqEntries.writingService.question}
                answer={faqEntries.writingService.answer}
              />
              <AccordionItem
                id="faq-bsc-msc"
                question={faqEntries.bscMsc.question}
                answer={faqEntries.bscMsc.answer}
              />
              <AccordionItem
                id="faq-uk-only"
                question={faqEntries.ukOnly.question}
                answer={faqEntries.ukOnly.answer}
              />
              <AccordionItem
                id="faq-work-types"
                question={faqEntries.workTypes.question}
                answer={faqEntries.workTypes.answer}
              />
              <AccordionItem
                id="faq-started"
                question={faqEntries.gettingStarted.question}
                answer={faqEntries.gettingStarted.answer}
              />
              <AccordionItem
                id="faq-timelines"
                question={faqEntries.timelines.question}
                answer={faqEntries.timelines.answer}
              />
              <AccordionItem
                id="faq-confidential"
                question={faqEntries.confidentiality.question}
                answer={faqEntries.confidentiality.answer}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
