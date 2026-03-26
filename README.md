# dhp都市開発 コーポレートサイト

株式会社dhp都市開発のコーポレートサイトリニューアル版。
**Project Story（プロジェクトストーリー）** をメインコンテンツに据え、不動産の価値創造プロセスを物語として伝えるブランドサイトです。

## サイト構成

| ページ | URL | 役割 |
|--------|-----|------|
| Top | `/` | サイト全体の世界観提示 + Project Storyへの誘導 |
| Project Stories 一覧 | `/projects` | **主役ページ** 。開発ストーリー一覧をフィルタ付きで表示 |
| Project Story 詳細 | `/projects/[slug]` | **最重要** 。課題→戦略→実行→成果の物語構成 |
| Business | `/business` | 4事業領域の紹介（Project Storyと接続） |
| About | `/about` | 会社の思想・スタンス・会社概要 |
| Group | `/group` | グループ企業紹介 |
| Contact | `/contact` | お問い合わせフォーム |

## ユーザー導線設計

```
Top（世界観）→ Project Stories（実践を見る）→ 個別Story（深く理解）→ Business/About（信頼補完）→ Contact
```

## 技術スタック

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- レスポンシブ対応
- SEO基本対応（メタデータ、OGP想定）

## ディレクトリ構成

```
├── app/
│   ├── layout.tsx          # 共通レイアウト
│   ├── globals.css         # グローバルスタイル
│   ├── page.tsx            # Top
│   ├── projects/
│   │   ├── page.tsx        # Project Stories 一覧
│   │   └── [slug]/
│   │       └── page.tsx    # Project Story 詳細
│   ├── business/
│   │   └── page.tsx        # Business
│   ├── about/
│   │   └── page.tsx        # About
│   ├── group/
│   │   └── page.tsx        # Group
│   └── contact/
│       └── page.tsx        # Contact
├── components/
│   ├── Header.tsx          # ヘッダー（レスポンシブナビ付き）
│   ├── Footer.tsx          # フッター
│   ├── ContactCTA.tsx      # お問い合わせCTAセクション
│   ├── ContactForm.tsx     # お問い合わせフォーム
│   ├── FilterBar.tsx       # カテゴリフィルタ
│   ├── PageHeader.tsx      # ページヘッダー
│   ├── ProjectStoryCard.tsx # プロジェクトカード
│   ├── SectionHeader.tsx   # セクション見出し
│   ├── StatsBlock.tsx      # 数値ブロック
│   └── StorySection.tsx    # ストーリー本文セクション
├── data/
│   ├── projects.ts         # プロジェクトダミーデータ（6件）
│   ├── business.ts         # 事業データ
│   └── group.ts            # グループ・会社情報データ
└── lib/
    ├── types.ts            # 型定義
    └── projects.ts         # データ取得ユーティリティ
```

## データ構造

### ProjectStory

```typescript
{
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  location: string;
  year: number;
  thumbnail: string;
  heroImage: string;
  summary: string;
  challenge: string;    // Background / 課題
  strategy: string;     // Strategy / 戦略
  execution: string;    // Execution / 実行
  result: string;       // Result / 成果
  future: string;       // Future / 今後の展開
  relatedTags: string[];
  featured?: boolean;
  metrics?: { label: string; value: string }[];
}
```

### カテゴリ

- ホテル・リゾート
- 都市開発
- 商業・飲食
- 再生・リノベーション
- コンサルティング
- 投資・流動化

## CMS化の拡張ポイント

現在 `data/` ディレクトリにダミーデータを配置していますが、CMS連携時は以下の変更で対応できます。

1. **`lib/projects.ts`** のデータ取得関数をCMS APIコールに差し替え
2. **`lib/types.ts`** の型定義はそのまま流用可能
3. **画像パス**をCMSのアセットURLに変更
4. **`generateStaticParams`** をISR/SSR対応に変更

対応可能なCMS例:
- microCMS
- Sanity
- Notion API
- Contentful

## 開発

```bash
npm run dev    # 開発サーバー起動
npm run build  # プロダクションビルド
npm run start  # プロダクションサーバー起動
```
