# クイックスタートガイド（シンプル版）

## 📋 現在の状態

✅ **完了済み**:
- シンプルなプロジェクト設計
- 必要最小限の技術スタック選定
- 仕様書・API仕様書・デプロイガイドの作成

⏳ **次のステップ**:
- RSSフィードリストの準備
- 実装開始

---

## 📚 ドキュメント

### 1. [README.md](../README.md)
- プロジェクト概要
- 技術スタック
- セットアップ手順

### 2. [docs/specification.md](./specification.md)
- 機能要件
- データモデル
- UI/UX仕様

### 3. [docs/api.md](./api.md)
- API仕様（1つのエンドポイントのみ）
- リクエスト/レスポンス形式

### 4. [docs/deployment.md](./deployment.md)
- デプロイ手順（Vercel + Railway）
- 環境変数設定

---

## 🎯 シンプル版の特徴

### 実装する機能（最小限）
- ✅ RSSフィードから記事取得
- ✅ 記事一覧表示
- ✅ 更新ボタン
- ✅ 記事リンク

### 実装しない機能
- ❌ フィード追加・削除（設定ファイルに固定）
- ❌ 既読/未読管理
- ❌ お気に入り機能
- ❌ 検索・フィルタリング
- ❌ 自動更新
- ❌ ページネーション

---

## 🛠️ 技術スタック（シンプル版）

### フロントエンド
```
React 18 + TypeScript + Vite + Vanilla CSS + axios
```

### バックエンド
```
Node.js + Express + TypeScript + rss-parser
```

### 削除したもの
```
❌ React Query（シンプルなfetchで十分）
❌ node-cache（キャッシュ不要）
❌ データベース（データ保存不要）
```

---

## 🚀 開発の流れ

### Step 1: RSSフィードリストの準備

**あなたがやること**：
- 読みたいブログやニュースサイトのRSS URLを準備

**例**：
```
https://zenn.dev/feed
https://qiita.com/popular-items/feed
https://your-favorite-blog.com/feed.xml
```

### Step 2: バックエンド実装（1時間）

```bash
# プロジェクトセットアップ
mkdir backend
cd backend
npm init -y
npm install express typescript tsx @types/node @types/express rss-parser cors @types/cors

# 開発開始
npm run dev
```

**実装内容**：
1. Expressサーバーセットアップ
2. `config/feeds.ts` にRSSリスト記載
3. `/api/articles` エンドポイント作成
4. rss-parserで記事取得

### Step 3: フロントエンド実装（1時間）

```bash
# プロジェクトセットアップ
npm create vite@latest frontend -- --template react-ts
cd frontend
npm install
npm install axios

# 開発開始
npm run dev
```

**実装内容**：
1. 記事一覧コンポーネント作成
2. 更新ボタン実装
3. レスポンシブデザイン

### Step 4: デプロイ（30分）

```bash
# GitHubにプッシュ
git add .
git commit -m "Initial commit"
git push origin main

# Vercel/Railwayでデプロイ
# （ブラウザで操作）
```

**合計開発時間: 約2.5時間** ⚡

---

## 📁 プロジェクト構成

```
git_tutorial/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── feeds.ts          # ← RSSリストをここに記載
│   │   ├── services/
│   │   │   └── rssService.ts     # RSS取得ロジック
│   │   ├── routes/
│   │   │   └── articles.ts       # APIルート
│   │   └── index.ts              # サーバー起動
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ArticleList.tsx   # 記事一覧
│   │   │   └── ArticleCard.tsx   # 記事カード
│   │   ├── App.tsx               # メインアプリ
│   │   └── index.css             # スタイル
│   └── package.json
│
└── docs/
    ├── specification.md
    ├── api.md
    └── deployment.md
```

---

## 🎨 完成イメージ

```
┌─────────────────────────────────────────┐
│  RSS Feed Reader          [更新]        │
├─────────────────────────────────────────┤
│                                         │
│  📰 TypeScript入門                       │
│     Zenn - 2025/11/22 10:00            │
│     TypeScriptの基本的な使い方を...      │
│     ────────────────────────────────    │
│                                         │
│  📰 React Hooksガイド                    │
│     Qiita - 2025/11/21 15:30           │
│     React Hooksの詳しい解説...          │
│     ────────────────────────────────    │
│                                         │
└─────────────────────────────────────────┘
```

---

## 💡 次のアクション

**RSSフィードのリストを共有してください！**

準備ができたら、すぐに実装を開始できます。

---

## 🤔 よくある質問

**Q: テストは書かないの？**
A: シンプル版では省略します。必要に応じて後から追加できます。

**Q: データベースは使わないの？**
A: 使いません。毎回RSSフィードから取得します。

**Q: フィードを追加したい場合は？**
A: `backend/src/config/feeds.ts` を編集して再デプロイします。

**Q: 後から機能を追加できる？**
A: はい！必要に応じて既読管理、検索機能などを追加できます。

---

**準備ができたら教えてください！** 🚀
