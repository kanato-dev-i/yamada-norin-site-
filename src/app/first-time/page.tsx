import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "はじめての方へ"
};

const choices = [
  ["まず試したい方へ", "お試し白米 2kg", "少量で味を確かめたい方に。"],
  ["毎日のごはんに", "白米 5kg", "一番使いやすい定番サイズです。"],
  ["家族で食べる方へ", "白米 10kg", "炊飯回数が多いご家庭に。"],
  ["健康を意識する方へ", "玄米 5kg", "香ばしさと食感を楽しめます。"],
  ["贈りものに", "食べ比べセット", "白米と玄米を楽しめるセットです。"]
];

export default function FirstTimePage() {
  return (
    <>
      <section className="bg-rice-cream py-12 sm:py-16">
        <div className="container-page">
          <SectionTitle
            eyebrow="FIRST TIME"
            title="はじめての方へ"
            description="阿東の山田農林のお米は、毎日の食卓に自然になじむ味わいを目指しています。迷ったら、食べる量と使う場面から選んでください。"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {choices.map(([label, name, description]) => (
              <Link key={name} href="/products" className="focus-ring rounded-sm border border-rice-linen bg-white p-6 transition hover:bg-rice-paper">
                <p className="text-sm font-semibold text-rice-leaf">{label}</p>
                <h2 className="mt-3 font-serif text-3xl text-rice-charcoal">{name}</h2>
                <p className="mt-3 text-sm leading-7 text-rice-muted">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
