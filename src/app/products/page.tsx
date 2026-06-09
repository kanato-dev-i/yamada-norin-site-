import type { Metadata } from "next";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { productCategories, products } from "@/data/products";

export const metadata: Metadata = {
  title: "商品一覧"
};

export default function ProductsPage() {
  return (
    <section className="bg-rice-cream py-12 sm:py-16">
      <div className="container-page">
        <SectionTitle
          eyebrow="PRODUCTS"
          title="商品一覧"
          description="はじめての少量パック、毎日の白米、家族向けサイズ、玄米、ギフト向けセットをカテゴリ別にまとめました。"
        />
        <div className="mt-12 space-y-14">
          {productCategories.map((category) => {
            const categoryProducts = products.filter((product) => product.category === category);
            if (categoryProducts.length === 0) {
              return null;
            }

            return (
              <section key={category} aria-labelledby={`category-${category}`}>
                <h2 id={`category-${category}`} className="font-serif text-3xl text-rice-charcoal">
                  {category}
                </h2>
                <div className="mt-6">
                  <ProductGrid products={categoryProducts} />
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
