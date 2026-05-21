# 阿東の山田農林

山口県の米農家が自社ブランドのお米を紹介し、外部ECサービスのBASE商品ページへ案内するための Next.js MVP です。

このサイトは商品の紹介と、外部販売ページへの案内に集中した構成です。購入導線は各商品の「BASEで購入する」ボタンから外部URLを新しいタブで開くだけです。

## 技術構成

- Next.js App Router
- TypeScript
- Tailwind CSS
- レスポンシブ対応
- 商品データは `src/data/products.ts` に集約

## 起動方法

依存関係をインストールしてから開発サーバーを起動します。

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認してください。

## 商品URLの差し替え方法

BASEの商品URLは `src/data/products.ts` の各商品の `externalUrl` を差し替えてください。

```ts
{
  name: "白米 5kg",
  externalUrl: "https://example.com",
  platform: "BASE"
}
```

将来的にShopifyへ移行する場合は、同じ商品データ内の `externalUrl` をShopifyの商品URLへ、`platform` を `"Shopify"` へ変更します。UI側は `platform` を参照してボタン文言を表示します。

## 画像の差し替え方法

仮画像は `public/images/` に配置しています。商品画像は `src/data/products.ts` の `image` を差し替えるだけで変更できます。

```ts
image: "/images/new-product-image.jpg"
```

画像には商品名を含む `alt` が付くよう、商品カードと詳細ページ側で扱っています。
