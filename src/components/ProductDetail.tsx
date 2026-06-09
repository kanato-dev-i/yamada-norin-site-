import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice, getRelatedProducts } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { assetPath } from "@/lib/paths";

type ProductDetailProps = {
  product: Product;
};

export function ProductDetail({ product }: ProductDetailProps) {
  const relatedProducts = getRelatedProducts(product);
  const purchaseLabel = product.platform === "BASE" ? "BASEで購入する" : "販売ページを見る";
  const specs = [
    ["容量", product.weight],
    ["産地", product.origin],
    ["品種", product.variety],
    ["産年", product.harvestYear],
    ["精米時期", product.millingDate],
    ["保存方法", product.storageMethod],
    ["おすすめの食べ方", product.recommendedFor]
  ];

  return (
    <>
      <section className="bg-rice-cream py-10 sm:py-14">
        <div className="container-page">
          <Link href="/products" className="focus-ring text-sm font-semibold text-rice-leaf hover:text-rice-olive">
            商品一覧へ戻る
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-start">
            <div className="overflow-hidden rounded-sm border border-rice-linen bg-white shadow-soft">
              <img src={assetPath(product.image)} alt={`${product.name}の仮商品画像`} className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="rounded-sm border border-rice-linen bg-white p-6 shadow-[0_8px_28px_rgba(61,55,43,0.05)] sm:p-8">
              <p className="text-sm text-rice-leaf">{product.category}</p>
              <h1 className="mt-3 font-serif text-4xl leading-tight text-rice-charcoal">{product.name}</h1>
              <p className="mt-4 text-2xl font-semibold text-rice-olive">{formatPrice(product.price)}</p>
              <p className="mt-5 text-base leading-8 text-rice-muted">{product.detail}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-rice-cream px-3 py-1 text-xs text-rice-leaf">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={product.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-rice-olive px-6 py-4 font-semibold text-white transition hover:bg-rice-leaf sm:w-auto"
              >
                {purchaseLabel}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-14 sm:py-16">
        <div className="container-page">
          <SectionTitle eyebrow="DETAIL" title="商品情報" />
          <dl className="mt-8 grid overflow-hidden rounded-sm border border-rice-linen bg-white md:grid-cols-2">
            {specs.map(([label, value]) => (
              <div key={label} className="border-b border-rice-linen p-5 md:odd:border-r md:[&:nth-last-child(-n+2)]:border-b-0">
                <dt className="text-sm font-semibold text-rice-leaf">{label}</dt>
                <dd className="mt-2 text-sm leading-7 text-rice-charcoal">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="bg-rice-paper py-14 sm:py-16">
        <div className="container-page">
          <SectionTitle eyebrow="RELATED" title="関連商品" />
          <div className="mt-8">
            <ProductGrid products={relatedProducts} />
          </div>
        </div>
      </section>
    </>
  );
}
