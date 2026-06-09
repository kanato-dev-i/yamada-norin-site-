import Link from "next/link";
import { assetPath } from "@/lib/paths";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-rice-cream">
      <div className="container-page grid min-h-[calc(100svh-4rem)] items-center gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:py-16">
        <div className="relative z-10">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-rice-gold/35 bg-white/80 px-4 py-2 text-sm text-rice-muted">
            <img src={assetPath("/images/icon-rice.svg")} alt="" className="h-4 w-4" />
            山口県の米農家から
          </p>
          <h1 className="whitespace-pre-line font-serif text-4xl leading-[1.35] text-rice-charcoal sm:text-5xl">
            {SITE.mainCopy}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-rice-muted sm:text-lg">
            毎日食べるものだから、つくる人が見えるお米を。山口の自然の中で育てたお米を、農家から直接お届けします。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="focus-ring rounded-sm bg-rice-olive px-6 py-3 text-center font-semibold text-white transition hover:bg-rice-leaf"
            >
              商品を見る
            </Link>
            <Link
              href="/first-time"
              className="focus-ring rounded-sm border border-rice-olive/30 bg-white px-6 py-3 text-center font-semibold text-rice-olive transition hover:bg-rice-paper"
            >
              はじめての方へ
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[1334/750] overflow-hidden rounded-sm border border-rice-linen bg-white shadow-soft">
            <img
              src={assetPath("/images/ato-yamada-hero.jpg")}
              alt="山口県阿東の山あいに広がる田んぼの風景"
              className="h-full w-full object-cover object-center saturate-[0.82] contrast-[0.92] brightness-[1.04]"
            />
            <div className="absolute inset-0 bg-rice-cream/10 mix-blend-screen" aria-hidden="true" />
            <div className="absolute inset-0 bg-rice-gold/5 mix-blend-soft-light" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
