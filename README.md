# 東大攻略クエスト

社会人ゼロから東京大学合格を目指す学習者向けの学習サイト。東大受験をRPGの攻略に見立て、
攻略マップ・勉強のやり方・地頭トレーニング・科目別ガイド・継続の技術を1つのサイトにまとめる。

## 構成

- `lib/content/registry.ts` — 全ページの目次（章・ページのタイトル、パス、要約）の単一の情報源。
  ナビゲーション・進捗計算・クエストマップはすべてここから生成される。
- `lib/progress.tsx` — 学習進捗・連続日数（ストリーク）をブラウザの localStorage に保存するコンテキスト。
- `components/todai/` — たとえ話ボックス、図解カード、クエストマップ、スキルツリー、
  フラッシュカード、クイズ、フェルミ推定、間違い直しテンプレなどの共通コンポーネント。
- `app/todai/<section>/<page>/page.tsx` — 各コンテンツページ（§5 の情報設計に対応）。

## 開発

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) にアクセスすると `/todai` にリダイレクトされる。

```bash
npm run lint    # ESLint
npm run build   # 型チェック + 本番ビルド
```

## デプロイ

Vercel を想定した Next.js (App Router) プロジェクト。追加の環境変数は不要。
