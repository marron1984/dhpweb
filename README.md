# dhp都市開発 Project Stories

株式会社dhp都市開発の **Project Story 専用ブランドメディアサイト** です。
公式コーポレートサイト（[dhp-dev.jp](https://www.dhp-dev.jp)）からリンクする形で、
プロジェクトの価値創造プロセスをストーリーとして伝えます。

## サイト構成

```
公式サイト（dhp-dev.jp）
  └── リンク ──→ 本サイト（Project Stories）
                    ├── / (Top)              ストーリー世界観への没入
                    ├── /projects            ストーリー一覧（フィルタ付き）
                    ├── /projects/[slug]     ストーリー詳細（最重要）
                    └── /contact             お問い合わせ
```

| ページ | URL | 役割 |
|--------|-----|------|
| Top | `/` | Project Storyの世界観に没入させるエントリーポイント |
| Stories 一覧 | `/projects` | カテゴリフィルタ付きストーリーアーカイブ |
| Story 詳細 | `/projects/[slug]` | 課題→戦略→実行→成果の物語構成（**最重要**） |
| Contact | `/contact` | プロジェクト相談・投資・提携の導線 |

About / Business / Group は公式サイトへのリンクで対応。

## 技術スタック

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- レスポンシブ対応
- SEO基本対応（メタデータ、OGP想定）

## ディレクトリ構成

```
├── app/
│   ├── layout.tsx              # 共通レイアウト
│   ├── globals.css             # グローバルスタイル
│   ├── page.tsx                # Top
│   ├── projects/
│   │   ├── page.tsx            # Story一覧
│   │   └── [slug]/page.tsx     # Story詳細
│   └── contact/page.tsx        # お問い合わせ
├── components/
│   ├── Header.tsx              # ヘッダー（公式サイトリンク付き）
│   ├── Footer.tsx              # フッター（公式サイトリンク付き）
│   ├── ContactCTA.tsx          # CTA
│   ├── ContactForm.tsx         # フォーム
│   ├── FilterBar.tsx           # カテゴリフィルタ
│   ├── PageHeader.tsx          # ページヘッダー
│   ├── ProjectStoryCard.tsx    # プロジェクトカード
│   ├── SectionHeader.tsx       # セクション見出し
│   ├── StatsBlock.tsx          # 数値ブロック
│   └── StorySection.tsx        # 物語セクション
├── data/
│   ├── projects.ts             # ダミーデータ（6件）
│   ├── business.ts             # 事業データ（参照用）
│   └── group.ts                # 会社情報
└── lib/
    ├── types.ts                # 型定義
    └── projects.ts             # データ取得ユーティリティ
```

## データ構造

### ProjectStory

```typescript
{
  slug, title, subtitle, category, location, year,
  thumbnail, heroImage, summary,
  challenge,    // 課題
  strategy,     // 戦略
  execution,    // 実行
  result,       // 成果
  future,       // 今後の展開
  relatedTags, featured?, metrics?
}
```

## CMS化の拡張ポイント

1. `lib/projects.ts` の取得関数をCMS APIに差し替え
2. `lib/types.ts` の型定義はそのまま流用可能
3. 画像パスをCMSアセットURLに変更
4. `generateStaticParams` をISR/SSR対応に変更

対応候補: microCMS / Sanity / Notion API / Contentful

## カラースキーム

| 要素 | 値 |
|------|-----|
| ブランドレッド | `#8b2332` |
| ダーク背景 | `#2a2a2a` |
| テキスト | `#333333` |
| ライトグレー | `#f5f5f5` |

## 開発

```bash
npm run dev    # 開発サーバー起動
npm run build  # ビルド
npm run start  # プロダクションサーバー
```
