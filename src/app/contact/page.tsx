import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ"
};

export default function ContactPage() {
  return (
    <section className="bg-rice-cream py-12 sm:py-16">
      <div className="container-page">
        <SectionTitle
          eyebrow="CONTACT"
          title="お問い合わせ"
          description="フォームは今後追加しやすいよう、まずはメールアドレスでの案内にしています。"
        />
        <div className="mt-10 rounded-sm border border-rice-linen bg-white p-6 shadow-[0_8px_28px_rgba(61,55,43,0.05)] sm:p-8">
          <Mail className="h-8 w-8 text-rice-leaf" aria-hidden="true" />
          <p className="mt-5 text-base leading-8 text-rice-muted">
            お問い合わせは以下のメールアドレスまでお願いいたします。
          </p>
          <a href={`mailto:${SITE.email}`} className="focus-ring mt-4 inline-block rounded-sm text-xl font-semibold text-rice-olive hover:text-rice-leaf">
            {SITE.email}
          </a>
        </div>
      </div>
    </section>
  );
}
