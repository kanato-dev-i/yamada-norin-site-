import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-rice-olive py-14 text-white">
      <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-rice-straw">SELECT RICE</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">食卓に合うお米を選ぶ</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78">
            はじめての少量パックから、毎日のごはん、贈りもの向けのセットまで。暮らしに合うお米を見つけてください。
          </p>
        </div>
        <Link
          href="/products"
          className="focus-ring rounded-sm bg-white px-6 py-3 font-semibold text-rice-olive transition hover:bg-rice-cream"
        >
          商品を見る
        </Link>
      </div>
    </section>
  );
}
