import Link from "next/link";
import { assetPath } from "@/lib/paths";
import { SITE } from "@/lib/site";

const footerLinks = [
  { href: "/products", label: "商品一覧" },
  { href: "/first-time", label: "はじめての方へ" },
  { href: "/commitment", label: "お米のこだわり" },
  { href: "/farmer", label: "農家紹介" },
  { href: "/cooking", label: "おいしい炊き方" },
  { href: "/faq", label: "よくある質問" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/legal", label: "特定商取引法に基づく表記" }
];

export function Footer() {
  return (
    <footer className="border-t border-rice-linen bg-rice-charcoal text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.1fr_1.4fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-rice-cream">
              <img src={assetPath("/images/icon-rice.svg")} alt="" className="h-6 w-6" />
            </span>
            <p className="font-serif text-xl">{SITE.name}</p>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
            山口の自然の中で育てたお米を、毎日の食卓へまっすぐに届けるためのブランドサイトです。
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4" aria-label="フッターナビゲーション">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-sm text-white/78 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/56">
        © {new Date().getFullYear()} {SITE.name}
      </div>
    </footer>
  );
}
