# RSS Feed Reader - シンプル版

RSSフィードから最新記事を取得して一覧表示するシンプルなWebアプリケーションです。

## 📋 概要

設定ファイルに登録されたRSSフィードから記事を取得し、時系列で表示します。
**必要最小限の機能のみ**を実装したシンプルな構成です。

## 🎯 機能

- ✅ 複数のRSSフィードから記事を取得
- ✅ 記事を時系列で一覧表示
- ✅ 更新ボタンで最新記事を取得
- ✅ 記事タイトルクリックで元サイトへ移動

## 🛠️ 技術スタック

### フロントエンド
- **React 18** - UIライブラリ
- **TypeScript** - 型安全性
- **Vite** - 高速ビルドツール
- **Vanilla CSS** - スタイリング
- **axios** - HTTP通信

### バックエンド
- **Node.js** - ランタイム環境
- **Express** - Webフレームワーク
- **TypeScript** - 型安全性
- **rss-parser** - RSSフィード解析

### デプロイ
- **フロントエンド**: Vercel
- **バックエンド**: Railway

## 🏗️ プロジェクト構成

```
git_tutorial/
├── frontend/              # Reactフロントエンド
│   ├── src/
│   │   ├── components/    # UIコンポーネント
│   │   ├── types/         # TypeScript型定義
│   │   ├── App.tsx        # メインアプリ
│   │   └── index.css      # スタイル
│   └── package.json
├── backend/               # Expressバックエンド
│   ├── src/
│   │   ├── config/        # 設定ファイル（RSSリスト）
│   │   ├── services/      # ビジネスロジック
│   │   ├── routes/        # ルート定義
│   │   └── index.ts       # サーバー起動
│   └── package.json
├── docs/                  # ドキュメント
│   ├── specification.md   # 仕様書
│   └── deployment.md      # デプロイ手順
└── README.md
```

## 🚀 セットアップ

### バックエンド

```bash
cd backend
npm install
npm run dev
```

### フロントエンド

```bash
cd frontend
npm install
npm run dev
```

## 📝 RSSフィードの設定

`backend/src/config/feeds.ts` にRSSフィードのURLを記載します：

```typescript
export const RSS_FEEDS = [
  'https://zenn.dev/feed',
  'https://qiita.com/popular-items/feed',
  // 追加のフィードをここに記載
];
```

## 🔧 環境変数

### バックエンド (.env)
```
PORT=3001
NODE_ENV=development
```

### フロントエンド (.env)
```
VITE_API_URL=http://localhost:3001
```

## 📚 ドキュメント

- [仕様書](./docs/specification.md) - 機能仕様
- [デプロイガイド](./docs/deployment.md) - デプロイ手順

## 📄 ライセンス

MIT

## 👤 作成者

開発中のプロジェクトです。
