# RSS Feed Reader - API仕様書（シンプル版）

## 概要

このドキュメントは、RSS Feed Reader アプリケーションのシンプルなAPI仕様を定義します。

## ベースURL

- **開発環境**: `http://localhost:3001/api`
- **本番環境**: `https://your-app.railway.app/api`

## 共通仕様

### レスポンス形式

**成功時**:
```json
{
  "success": true,
  "data": { /* レスポンスデータ */ }
}
```

**エラー時**:
```json
{
  "success": false,
  "error": {
    "message": "エラーメッセージ"
  }
}
```

### HTTPステータスコード

- `200 OK`: リクエスト成功
- `500 Internal Server Error`: サーバーエラー

---

## エンドポイント

### 記事一覧取得

全フィードから記事を取得します。

- **URL**: `/articles`
- **Method**: `GET`
- **認証**: なし

**クエリパラメータ**: なし

**レスポンス（200 OK）**:
```json
{
  "success": true,
  "data": {
    "articles": [
      {
        "title": "TypeScript入門",
        "link": "https://example.com/articles/typescript-intro",
        "description": "TypeScriptの基本的な使い方を解説します...",
        "pubDate": "2025-11-22T10:00:00.000Z",
        "feedTitle": "Example Blog"
      },
      {
        "title": "React Hooksガイド",
        "link": "https://example.com/articles/react-hooks",
        "description": "React Hooksの詳しい解説...",
        "pubDate": "2025-11-21T15:30:00.000Z",
        "feedTitle": "Tech Blog"
      }
    ],
    "totalCount": 50
  }
}
```

**レスポンス（500 Error）**:
```json
{
  "success": false,
  "error": {
    "message": "記事の取得に失敗しました"
  }
}
```

---

## データ型定義

### Article型
```typescript
interface Article {
  title: string;           // 記事タイトル
  link: string;            // 記事URL
  description?: string;    // 記事概要
  pubDate: string;         // ISO 8601形式の公開日時
  feedTitle: string;       // フィード名
}
```

### APIレスポンス型
```typescript
interface ArticlesResponse {
  success: true;
  data: {
    articles: Article[];
    totalCount: number;
  };
}

interface ErrorResponse {
  success: false;
  error: {
    message: string;
  };
}
```

---

## 実装例

### バックエンド実装

```typescript
// routes/articles.ts
import { Router } from 'express';
import { getArticles } from '../services/rssService';

const router = Router();

router.get('/articles', async (req, res) => {
  try {
    const articles = await getArticles();
    
    res.json({
      success: true,
      data: {
        articles,
        totalCount: articles.length
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        message: '記事の取得に失敗しました'
      }
    });
  }
});

export default router;
```

### フロントエンド実装

```typescript
// services/api.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const fetchArticles = async () => {
  const response = await axios.get(`${API_URL}/api/articles`);
  return response.data.data.articles;
};
```

---

## CORS設定

開発環境では全てのオリジンを許可します。

```typescript
import cors from 'cors';

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-app.vercel.app'
    : '*'
}));
```

---

## エラーハンドリング

### よくあるエラー

| エラー | 原因 | 対処法 |
|--------|------|--------|
| 500 Error | RSSフィードの取得失敗 | フィードURLを確認 |
| CORS Error | CORS設定の問題 | バックエンドのCORS設定を確認 |
| Timeout | レスポンスが遅い | フィード数を減らす |

---

## まとめ

このシンプル版では、**1つのエンドポイントのみ**を提供します。

- ✅ シンプルで理解しやすい
- ✅ 実装が容易
- ✅ 保守が簡単

必要に応じて、後から機能を追加できます。
