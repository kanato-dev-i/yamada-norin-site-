<<<<<<< HEAD
[README.md](https://github.com/user-attachments/files/28721082/README.md)# yamada-norin-site-
山田農林のブランドサイト（制作中）
[Uploading # 阿東の山田農林

山口県の米農家「阿東の山田農林」の活動や商品を紹介するための Next.js MVP です。

このサイトは、山田農林の取り組み、米づくりの考え方、商品情報を伝えるための静的なブランドサイトです。
=======
# 山口こめ日和

山口県の米農家が自社ブランドのお米を紹介し、外部ECサービスのBASE商品ページへ案内するための Next.js MVP です。

このサイトは商品の紹介と、外部販売ページへの案内に集中した構成です。購入導線は各商品の「BASEで購入する」ボタンから外部URLを新しいタブで開くだけです。
>>>>>>> fd95914 (Save rice brand site baseline)

## 技術構成

- Next.js App Router
- TypeScript
- Tailwind CSS
- レスポンシブ対応
- 商品データは `src/data/products.ts` に集約

## 起動方法

依存関係をインストールしてから開発サーバーを起動します。

```bash
<<<<<<< HEAD
pnpm install
pnpm dev
=======
npm install
npm run dev
>>>>>>> fd95914 (Save rice brand site baseline)
```

ブラウザで `http://localhost:3000` を開いて確認してください。

<<<<<<< HEAD
## GitHub Pagesでの公開

このリポジトリは GitHub Pages 向けに静的書き出しできる設定になっています。

- `next.config.ts` で `output: "export"` を設定
- GitHub Pages用の `basePath` は `/yamada-norin-site-`
- GitHub Actions は `.github/workflows/deploy.yml`
- `main` ブランチにpushすると、`out/` がGitHub Pagesへ公開されます

GitHub側では、リポジトリの `Settings` → `Pages` → `Build and deployment` で `GitHub Actions` を選んでください。

公開URL:

```text
https://kanato-dev-i.github.io/yamada-norin-site-/
```

ローカルでGitHub Pages用の静的書き出しを確認する場合:

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/yamada-norin-site- pnpm build
```

=======
>>>>>>> fd95914 (Save rice brand site baseline)
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
<<<<<<< HEAD
README.md…]()
=======
>>>>>>> fd95914 (Save rice brand site baseline)
