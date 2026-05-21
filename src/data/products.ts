export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  detail: string;
  price: number;
  weight: string;
  origin: string;
  variety: string;
  harvestYear: string;
  millingDate: string;
  storageMethod: string;
  image: string;
  tags: string[];
  recommendedFor: string;
  externalUrl: string;
  platform: "BASE" | "Shopify";
};

export const productCategories = [
  "はじめての方へ",
  "毎日のごはんに",
  "家族向け",
  "玄米・健康志向",
  "セット・ギフト"
] as const;

export const products: Product[] = [
  {
    id: "trial-white-rice-2kg",
    name: "お試し白米 2kg",
    slug: "trial-white-rice-2kg",
    category: "はじめての方へ",
    description: "はじめての食卓にちょうどいい、少量の白米パックです。",
    detail:
      "山口の田んぼで育てたお米を、まずは気軽に試したい方へ。炊きたての香りと、冷めても食べやすいやさしい甘みを少量でお楽しみいただけます。",
    price: 1500,
    weight: "2kg",
    origin: "山口県",
    variety: "コシヒカリ",
    harvestYear: "令和7年産",
    millingDate: "玄米で保管し、ご希望に応じて発送前を目安に精米",
    storageMethod: "直射日光・高温多湿を避け、涼しい場所で保管",
    image: "/images/product-rice-bag.svg",
    tags: ["はじめての方へ", "少量パック"],
    recommendedFor: "少人数のご家庭、味を確かめたい方",
    externalUrl: "https://example.com",
    platform: "BASE"
  },
  {
    id: "white-rice-5kg",
    name: "白米 5kg",
    slug: "white-rice-5kg",
    category: "毎日のごはんに",
    description: "毎日のごはんに使いやすい、定番人気の白米です。",
    detail:
      "食卓の中心になる、飽きのこない白米です。朝ごはん、お弁当、おにぎりにも合わせやすく、毎日食べても重たくならない味わいを大切にしました。",
    price: 3200,
    weight: "5kg",
    origin: "山口県",
    variety: "コシヒカリ",
    harvestYear: "令和7年産",
    millingDate: "玄米で保管し、ご希望に応じて発送前を目安に精米",
    storageMethod: "密閉容器に移し、涼しい場所で保管",
    image: "/images/product-rice-bowl.svg",
    tags: ["一番人気", "農家直送"],
    recommendedFor: "毎日の主食として選びたい方",
    externalUrl: "https://example.com",
    platform: "BASE"
  },
  {
    id: "white-rice-10kg",
    name: "白米 10kg",
    slug: "white-rice-10kg",
    category: "家族向け",
    description: "家族でしっかり食べる方に向けた、たっぷりサイズです。",
    detail:
      "ご家族の毎日の食卓に向けた10kgサイズ。炊飯の回数が多いご家庭でも扱いやすく、ふだんのごはんを安心して続けられる内容量です。",
    price: 5900,
    weight: "10kg",
    origin: "山口県",
    variety: "コシヒカリ",
    harvestYear: "令和7年産",
    millingDate: "玄米で保管し、ご希望に応じて発送前を目安に精米",
    storageMethod: "冷暗所で保管し、開封後は早めにお召し上がりください",
    image: "/images/product-rice-bag.svg",
    tags: ["家族向け", "お得"],
    recommendedFor: "家族で毎日ごはんを食べる方",
    externalUrl: "https://example.com",
    platform: "BASE"
  },
  {
    id: "brown-rice-5kg",
    name: "玄米 5kg",
    slug: "brown-rice-5kg",
    category: "玄米・健康志向",
    description: "噛むほどに自然な甘みが広がる、香ばしい玄米です。",
    detail:
      "健康を意識する方に向けた玄米です。しっかり浸水して炊くことで、香ばしさとほどよい食感を楽しめます。白米に少し混ぜる食べ方もおすすめです。",
    price: 3400,
    weight: "5kg",
    origin: "山口県",
    variety: "コシヒカリ",
    harvestYear: "令和7年産",
    millingDate: "玄米のままお届け",
    storageMethod: "密閉して涼しい場所で保管。夏場は冷蔵庫の野菜室がおすすめ",
    image: "/images/product-brown-rice.svg",
    tags: ["玄米", "健康志向"],
    recommendedFor: "栄養バランスや食感を楽しみたい方",
    externalUrl: "https://example.com",
    platform: "BASE"
  },
  {
    id: "rice-tasting-set",
    name: "食べ比べセット",
    slug: "rice-tasting-set",
    category: "セット・ギフト",
    description: "白米と玄米を少しずつ楽しめる、贈りものにも合うセットです。",
    detail:
      "白米と玄米の違いを楽しめるセット商品です。贈りものや、家族で好みを見つけたいときに向いています。まとめ買い需要にも応えやすいBASE側の商品として運用できます。",
    price: 3800,
    weight: "白米2kg + 玄米2kg",
    origin: "山口県",
    variety: "コシヒカリ",
    harvestYear: "令和7年産",
    millingDate: "玄米で保管し、白米分はご希望に応じて発送前を目安に精米",
    storageMethod: "直射日光・高温多湿を避け、涼しい場所で保管",
    image: "/images/product-gift-set.svg",
    tags: ["ギフト", "食べ比べ"],
    recommendedFor: "贈りもの、家族の好みを見つけたい方",
    externalUrl: "https://example.com",
    platform: "BASE"
  },
  {
    id: "gift-set",
    name: "ギフトセット",
    slug: "gift-set",
    category: "セット・ギフト",
    description: "季節のご挨拶に使いやすい、落ち着いた印象のセットです。",
    detail:
      "山口の田んぼから届くお米を、贈りものとして届けたい方へ。包装や配送条件は外部販売ページで確認できる想定の、将来的なギフト向け商品です。",
    price: 4200,
    weight: "2kg x 2袋",
    origin: "山口県",
    variety: "コシヒカリ",
    harvestYear: "令和7年産",
    millingDate: "玄米で保管し、ご希望に応じて発送前を目安に精米",
    storageMethod: "直射日光・高温多湿を避け、涼しい場所で保管",
    image: "/images/product-gift-set.svg",
    tags: ["ギフト", "季節の贈りもの"],
    recommendedFor: "お礼、内祝い、季節のご挨拶",
    externalUrl: "https://example.com",
    platform: "BASE"
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3) {
  return products
    .filter((item) => item.slug !== product.slug)
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, limit);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0
  }).format(price);
}
