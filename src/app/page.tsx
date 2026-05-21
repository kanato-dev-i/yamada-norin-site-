import Link from "next/link";
import { Leaf, PackageCheck, Sprout } from "lucide-react";
import { CookingGuide } from "@/components/CookingGuide";
import { CTASection } from "@/components/CTASection";
import { FAQItem } from "@/components/FAQItem";
import { FarmerProfile } from "@/components/FarmerProfile";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { faqItems } from "@/data/faq";
import { products } from "@/data/products";

const beginnerGuide = [
  ["まず試したい方へ", "お試し2kg"],
  ["毎日のごはんに", "白米5kg"],
  ["家族で食べる方へ", "白米10kg"],
  ["健康を意識する方へ", "玄米5kg"],
  ["贈りものに", "食べ比べセット"]
];

const commitments = [
  ["土", "田んぼごとの状態を見ながら、毎年の変化に合わせて整えます。"],
  ["水", "山口の自然の水を活かし、稲の様子を見て管理します。"],
  ["保管", "収穫後のお米は風味を守れるよう、温度と湿度に気を配ります。"],
  ["玄米保管", "鮮度を保ちやすい玄米を基本に、ご希望に応じて精米にも対応します。"],
  ["発送", "外部販売ページで確認できる配送条件に沿って、丁寧に準備します。"]
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="FEATURE"
            title="毎日のごはんに、安心をひとさじ"
            description="つくる人が見えること、玄米で鮮度を保つこと、化学肥料に頼らず育てること。阿東の山田農林が大切にしている3つのことです。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <FeatureCard
              icon={Sprout}
              title="農家直送"
              description="つくり手の顔が見えるお米を、産地から直接お届けします。"
            />
            <FeatureCard
              icon={PackageCheck}
              title="玄米で鮮度を保つ"
              description="基本は玄米で鮮度を保ち、ご希望に応じて精米してお届けします。"
            />
            <FeatureCard
              icon={Leaf}
              title="化学肥料不使用"
              description="自然の地力と地域の資源を生かし、化学肥料に頼らずお米を育てています。"
            />
          </div>
        </div>
      </section>
      <section className="bg-rice-paper py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionTitle
            eyebrow="FIRST CHOICE"
            title="はじめての方へ"
            description="どの商品を選べばいいか迷うときは、暮らし方や食べる量から選んでみてください。"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {beginnerGuide.map(([label, value]) => (
              <Link
                key={label}
                href="/products"
                className="focus-ring rounded-sm border border-rice-linen bg-white p-5 transition hover:border-rice-gold/60 hover:bg-rice-cream"
              >
                <p className="text-sm text-rice-muted">{label}</p>
                <p className="mt-2 font-serif text-2xl text-rice-charcoal">{value}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="PRODUCTS" title="商品ラインナップ" />
            <Link href="/products" className="focus-ring text-sm font-semibold text-rice-leaf hover:text-rice-olive">
              すべての商品を見る
            </Link>
          </div>
          <div className="mt-10">
            <ProductGrid products={products.slice(0, 5)} />
          </div>
        </div>
      </section>
      <section className="bg-rice-cream py-16 sm:py-20">
        <div className="container-page">
          <SectionTitle
            eyebrow="COMMITMENT"
            title="お米のこだわり"
            description="土、水、玄米での保管、精米対応、発送まで。毎日の食卓に届くまでの小さな積み重ねを大切にしています。"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {commitments.map(([title, description]) => (
              <article key={title} className="rounded-sm border border-rice-linen bg-white p-5">
                <p className="font-serif text-3xl text-rice-gold">{title}</p>
                <p className="mt-4 text-sm leading-7 text-rice-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FarmerProfile />
      <CookingGuide />
      <section className="bg-rice-paper py-16 sm:py-20">
        <div className="container-page">
          <SectionTitle eyebrow="FAQ" title="よくある質問" />
          <div className="mt-8 grid gap-4">
            {faqItems.slice(0, 5).map((item) => (
              <FAQItem key={item.question} {...item} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
