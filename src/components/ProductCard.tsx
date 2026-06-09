import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { assetPath } from "@/lib/paths";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const purchaseLabel = product.platform === "BASE" ? "BASEで購入する" : "販売ページを見る";

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-sm border border-rice-linen bg-white shadow-[0_8px_28px_rgba(61,55,43,0.05)]">
      <Link href={`/products/${product.slug}`} className="focus-ring block bg-rice-paper">
        <img src={assetPath(product.image)} alt={`${product.name}の仮商品画像`} className="aspect-[4/3] w-full object-cover" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm text-rice-muted">{product.weight}</p>
            <h3 className="mt-1 font-serif text-2xl leading-tight text-rice-charcoal">{product.name}</h3>
          </div>
          <p className="shrink-0 text-base font-semibold text-rice-olive">{formatPrice(product.price)}</p>
        </div>
        <p className="mt-4 text-sm leading-7 text-rice-muted">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-rice-cream px-3 py-1 text-xs text-rice-leaf">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={product.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-rice-olive px-4 py-3 text-sm font-semibold text-white transition hover:bg-rice-leaf"
          >
            {purchaseLabel}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link
            href={`/products/${product.slug}`}
            className="focus-ring inline-flex items-center justify-center rounded-sm border border-rice-olive/25 px-4 py-3 text-sm font-semibold text-rice-olive transition hover:bg-rice-paper"
          >
            詳しく見る
          </Link>
        </div>
      </div>
    </article>
  );
}
