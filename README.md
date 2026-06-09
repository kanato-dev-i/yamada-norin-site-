# 阿東の山田農林

山口県の米農家が自社ブランドのお米を紹介し、外部ECサービスのBASE商品ページへ案内するための Next.js MVP です。

このサイトは商品の紹介と、外部販売ページへの案内に集中した構成です。購入導線は各商品の「BASEで購入する」ボタンから外部URLを新しいタブで開くだけです。

## 技術構成

- Next.js App Router
- TypeScript
- Tailwind CSS
- レスポンシブ対応
- 商品データは `src/data/products.ts` に集約
- GitHub Pages 向け静的書き出し対応

## 起動方法

```bash
pnpm install
pnpm dev
```

ブラウザで `http://localhost:3000` を開いて確認してください。

## GitHub Pages 公開

このリポジトリは GitHub Pages 用に `next.config.ts` で静的書き出し設定をしています。

- `output: "export"`
- `images.unoptimized: true`
- GitHub Pages用 `basePath`: `/yamada-norin-site-`
- GitHub Actions: `.github/workflows/deploy.yml`

`main` ブランチへ push すると、GitHub Actions が `pnpm build` を実行し、生成された `out/` を GitHub Pages にデプロイします。

公開先の想定URLは以下です。

```txt
https://kanato-dev-i.github.io/yamada-norin-site-/
```

リポジトリ名を変更する場合は、以下を同じ名前に変更してください。

- `next.config.ts` の `repoName`
- `.github/workflows/deploy.yml` の `NEXT_PUBLIC_BASE_PATH`

## 商品URLの差し替え方法

商品情報は `src/data/products.ts` にまとめています。

BASEの商品ページURLへ差し替えるときは、各商品の `externalUrl` を変更してください。

```ts
externalUrl: "https://example.com",
platform: "BASE"
```

将来的にShopifyへ移行する場合は、`externalUrl` をShopifyの商品URLに変更し、`platform` を `"Shopify"` に変更してください。

## 画像の差し替え方法

画像は `public/images` に置いています。商品画像を差し替える場合は、画像ファイルを追加して `src/data/products.ts` の `image` を変更してください。

```ts
image: "/images/product-rice-bag.svg"
```

ヒーロー画像は `public/images/ato-yamada-hero.jpg` です。

## 実装しない機能

このMVPでは、以下の機能は実装しません。

- 自作カート
- お買いものメモ
- localStorageを使った購入候補保存
- 購入済み判定
- API連携
- 自作決済機能
- 注文フォーム

購入、カート、決済、注文管理はBASE側で行う前提です。

## 公開前チェック

公開前に以下を確認してください。

- `example.com` の商品URLを実際のBASE商品ページURLに変更する
- `example@example.com` の連絡先を実際のメールアドレスに変更する
- 特定商取引法ページの仮情報を実情報に変更する
- 未許可の写真や文章が含まれていないか確認する
- 仮の商品説明を実際の商品内容に合わせる
