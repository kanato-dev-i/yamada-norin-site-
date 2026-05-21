import Link from "next/link";
import { SITE } from "@/lib/site";

const navItems = [
  { href: "/products", label: "商品" },
  { href: "/first-time", label: "はじめての方へ" },
  { href: "/commitment", label: "こだわり" },
  { href: "/farmer", label: "農家紹介" },
  { href: "/cooking", label: "炊き方" },
  { href: "/faq", label: "FAQ" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rice-linen/80 bg-rice-cream/92 backdrop-blur">
      <div className="container-page py-4">
        <div className="flex min-h-14 items-center justify-between gap-5 sm:gap-7">
          <Link href="/" className="focus-ring flex items-center gap-3 rounded-sm" aria-label={`${SITE.name} トップへ`}>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-rice-gold/50 bg-white sm:h-12 sm:w-12">
              <img src="/images/icon-rice.svg" alt="" className="h-6 w-6 sm:h-7 sm:w-7" />
            </span>
            <span className="font-serif text-2xl leading-tight text-rice-charcoal">{SITE.name}</span>
          </Link>
          <nav className="hidden items-center gap-7 text-base text-rice-muted lg:flex" aria-label="メインナビゲーション">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="focus-ring rounded-sm transition hover:text-rice-olive">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/products"
            className="focus-ring shrink-0 rounded-sm bg-rice-olive px-5 py-3 text-base font-semibold text-white transition hover:bg-rice-leaf"
          >
            商品を見る
          </Link>
        </div>
        <nav className="mt-4 flex flex-wrap gap-x-6 gap-y-3 pb-1 text-base text-rice-muted lg:hidden" aria-label="モバイルナビゲーション">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring shrink-0 rounded-sm transition hover:text-rice-olive">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
