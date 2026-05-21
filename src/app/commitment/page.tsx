import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "お米のこだわり"
};

const items = [
  ["土づくり", "田んぼの状態を見ながら、稲が根を張りやすい環境を整えます。"],
  ["水の管理", "山口の自然の中で、稲の生育に合わせて水を入れ替えます。"],
  ["収穫後の保管", "風味を守るため、保管環境にも気を配ります。"],
  ["玄米保管と精米対応", "鮮度を保ちやすい玄米を基本に、ご希望に応じて発送前の精米にも対応します。"],
  ["発送", "BASEの商品ページで確認できる条件に沿って、丁寧に準備します。"]
];

export default function CommitmentPage() {
  return (
    <>
      <section className="bg-rice-cream py-12 sm:py-16">
        <div className="container-page">
          <SectionTitle
            eyebrow="COMMITMENT"
            title="お米のこだわり"
            description="特別なことを大きく言うより、毎日の小さな管理をきちんと重ねること。阿東の山田農林が大切にしている姿勢です。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {items.map(([title, description]) => (
              <article key={title} className="rounded-sm border border-rice-linen bg-white p-6">
                <h2 className="font-serif text-3xl text-rice-charcoal">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-rice-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
