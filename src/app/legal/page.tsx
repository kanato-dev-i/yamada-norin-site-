import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記"
};

const legalItems = [
  ["販売事業者", "阿東の山田農林（仮）"],
  ["運営責任者", "山口 太郎（仮）"],
  ["所在地", "山口県〇〇市〇〇町0-0-0（仮）"],
  ["電話番号", "000-0000-0000（仮）"],
  ["メールアドレス", "example@example.com（仮）"],
  ["販売価格", "各商品ページに税込価格を表示します。"],
  ["商品代金以外の必要料金", "送料など。詳細はBASEの商品ページでご確認ください。"],
  ["支払い方法", "BASEの商品ページで利用可能な方法に準じます。"],
  ["商品の引渡時期", "ご注文確認後、通常数日以内に発送します。詳細はBASEの商品ページでご確認ください。"],
  ["返品・交換について", "食品の性質上、お客様都合による返品・交換は原則お受けできません。不備がある場合はご連絡ください。"]
];

export default function LegalPage() {
  return (
    <section className="bg-rice-cream py-12 sm:py-16">
      <div className="container-page">
        <SectionTitle
          eyebrow="LEGAL"
          title="特定商取引法に基づく表記"
          description="以下はMVP用の仮情報です。公開前に正式な事業者情報へ差し替えてください。"
        />
        <dl className="mt-10 overflow-hidden rounded-sm border border-rice-linen bg-white">
          {legalItems.map(([label, value]) => (
            <div key={label} className="grid border-b border-rice-linen last:border-b-0 md:grid-cols-[15rem_1fr]">
              <dt className="bg-rice-paper p-4 text-sm font-semibold text-rice-charcoal">{label}</dt>
              <dd className="p-4 text-sm leading-7 text-rice-muted">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
