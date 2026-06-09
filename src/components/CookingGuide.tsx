import { Droplets, PackageCheck, Timer } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

const guideItems = [
  {
    icon: Droplets,
    title: "やさしく研ぐ",
    description: "最初の水はすばやく替え、力を入れすぎずに数回やさしく研ぎます。"
  },
  {
    icon: Timer,
    title: "しっかり浸水",
    description: "白米は30分から1時間、玄米は半日ほどを目安に水を吸わせます。"
  },
  {
    icon: PackageCheck,
    title: "涼しく保存",
    description: "高温多湿を避け、密閉容器へ。夏場は冷蔵庫の野菜室もおすすめです。"
  }
];

export function CookingGuide() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <SectionTitle
          eyebrow="COOKING"
          title="おいしい炊き方"
          description="毎日のごはんを気持ちよく食べるために、研ぎ方、浸水、保存を少しだけ丁寧に。"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {guideItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-sm border border-rice-linen bg-rice-cream p-6">
                <Icon className="h-7 w-7 text-rice-leaf" aria-hidden="true" />
                <h3 className="mt-5 font-serif text-2xl text-rice-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-rice-muted">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
