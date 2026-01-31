# 🚀 Tech Notes / 開発ログサイト ロードマップ

このプロジェクトは **Next.js × GitHub Pages** を使って、
フロントエンド力を鍛えつつ、将来的にフルスタックへ拡張することを目的とする。

---

## 🎯 目的

- Next.js（App Router）に慣れる
- GitHub Pages での静的サイト運用を理解する
- 設計を意識したフロントエンド開発を行う
- 将来的に backend / DB / 認証を追加できる構造を作る

---

## 🟢 Phase 0：基盤構築（完了）

### ゴール

- GitHub Pages で Next.js が安定して動作する

### 内容

- static export 対応
- basePath / assetPrefix 対応
- dev / prod 環境差の理解
- GitHub Actions workflow 設定
- コンポーネント分離

---

## 🟢 Phase 1：最低限の Tech Notes サイト

### ゴール

- 記事一覧ページと記事詳細ページを表示できる
- 完全に静的な構成

### 想定構成

```
app/
├ page.tsx # トップ（記事一覧）
├ notes/
│ └ [slug]/
│ └ page.tsx # 記事詳細
├ \_components/
│ ├ NoteList.tsx
│ └ NoteCard.tsx
└ \_lib/
└ notes.ts # 記事データ取得
```

### 学習ポイント

- App Router
- Dynamic Routes（[slug]）
- Server Component の考え方
- データと UI の分離

---

## 🟢 Phase 2：データ管理の改善

### ゴール

- 記事を「コード」から分離する

### ステップ

1. JSON 管理
   data/
   └ notes.json

2. Markdown 管理（推奨）

```
   content/
   └ notes/
   ├ first-post.md
   └ second-post.md
```

### 学習ポイント

- build 時データ取得
- ファイルベース CMS の考え方
- SSG 的設計

---

## 🟢 Phase 3：UI / UX 改善

### ゴール

- 読みやすく、使いやすいサイトにする

### 内容

- layout.tsx 作成
- ナビゲーション
- ダークモード
- レスポンシブ対応

### 学習ポイント

- layout の責務
- コンポーネント再利用
- Tailwind CSS 設計

---

## 🟡 Phase 4：発信者向け機能

### ゴール

- 自分が使いやすい Tech Notes にする

### 機能案

- タグ機能
- 並び替え（新着 / 古い順）
- 下書きフラグ

※ ここまでは **静的サイトのまま**

---

## 🟠 Phase 5：フルスタックへの入口

### ゴール

- backend の必要性を体感する

### 拡張案

- API 経由で記事取得
- build 時 fetch → 実行時 fetch
- 管理画面（ローカル用）

### backend 候補

- Node.js + Express
- Fastify
- Next.js API Routes

---

## 🔴 Phase 6：本格フルスタック化

### ゴール

- 実務レベルの構成

### 内容

- 認証（ログイン）
- DB（SQLite → PostgreSQL）
- 本番デプロイ（Vercel 等）

---

## 🧭 全体像

```
静的サイト
↓
SSG / データ分離
↓
UI 設計
↓
拡張可能な構造
↓
API 化
↓
フルスタック
```

---

## 次のステップ

まずは **Phase 1** から着手する。

- ディレクトリ構成の確定
- ダミー記事データ作成
- 記事一覧の表示
