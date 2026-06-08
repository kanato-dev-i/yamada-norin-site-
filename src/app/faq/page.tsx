import type { Metadata } from "next";
import { FAQItem } from "@/components/FAQItem";
import { SectionTitle } from "@/components/SectionTitle";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "よくある質問"
};

export default function FAQPage() {
  return (
    <section className="bg-rice-cream py-12 sm:py-16">
      <div className="container-page">
        <SectionTitle eyebrow="FAQ" title="よくある質問" />
        <div className="mt-8 grid gap-4">
          {faqItems.map((item) => (
            <FAQItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
