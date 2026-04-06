import { faqEntries } from "@/content/faq";
import { siteConfig } from "@/config/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.siteUrl}/#organization`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}${siteConfig.ogImagePath}`,
      email: siteConfig.contactEmail,
      description: siteConfig.description,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}/#website`,
      url: siteConfig.siteUrl,
      name: siteConfig.name,
      publisher: {
        "@id": `${siteConfig.siteUrl}/#organization`,
      },
      inLanguage: "en-GB",
    },
    {
      "@type": "Service",
      "@id": `${siteConfig.siteUrl}/#service`,
      serviceType: "Academic Support",
      provider: {
        "@id": `${siteConfig.siteUrl}/#organization`,
      },
      areaServed: "United Kingdom",
      audience: {
        "@type": "Audience",
        audienceType:
          "Computer Science and Management students at UK universities",
      },
      description: siteConfig.serviceDescription,
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: faqEntries.subjects.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faqEntries.subjects.answer,
          },
        },
        {
          "@type": "Question",
          name: faqEntries.writingService.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faqEntries.writingService.answer,
          },
        },
        {
          "@type": "Question",
          name: faqEntries.bscMsc.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faqEntries.bscMsc.answer,
          },
        },
        {
          "@type": "Question",
          name: faqEntries.ukOnly.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faqEntries.ukOnly.answer,
          },
        },
        {
          "@type": "Question",
          name: faqEntries.workTypes.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faqEntries.workTypes.answer,
          },
        },
        {
          "@type": "Question",
          name: faqEntries.gettingStarted.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faqEntries.gettingStarted.answer,
          },
        },
        {
          "@type": "Question",
          name: faqEntries.timelines.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faqEntries.timelines.answer,
          },
        },
        {
          "@type": "Question",
          name: faqEntries.confidentiality.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faqEntries.confidentiality.answer,
          },
        },
      ],
    },
  ],
};

export default function Head() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
