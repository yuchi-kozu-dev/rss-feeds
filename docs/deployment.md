# RSS Feed Reader - デプロイガイド（シンプル版）

## 概要

このドキュメントは、シンプル版RSS Feed Readerアプリケーションのデプロイ手順を説明します。

## デプロイ先

- **フロントエンド**: Vercel（無料）
- **バックエンド**: Railway（無料枠）

---

## 1. 事前準備

### 1.1 必要なアカウント

以下のアカウントを作成してください（すべて無料）：

1. **GitHubアカウント**
   - https://github.com

2. **Vercelアカウント**
   - https://vercel.com
   - GitHubアカウントでサインアップ

3. **Railwayアカウント**
   - https://railway.app
   - GitHubアカウントでサインアップ

---

## 2. GitHubリポジトリの準備

### 2.1 リポジトリ作成

1. GitHubで新しいリポジトリを作成
2. ローカルでGitを初期化

```bash
cd git_tutorial
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/rss-feed-reader.git
git push -u origin main
```

---

## 3. バックエンドのデプロイ（Railway）

### 3.1 プロジェクト構成の確認

`backend/package.json` に以下のスクリプトがあることを確認：

```json
{
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

### 3.2 Railwayでデプロイ

1. **Railway ダッシュボードにアクセス**
   - https://railway.app にログイン

2. **新規プロジェクト作成**
   - 「New Project」をクリック
   - 「Deploy from GitHub repo」を選択
   - リポジトリを選択

3. **ルートディレクトリ設定**
   - 「Settings」→「Root Directory」
   - `backend` を入力

4. **環境変数の設定**
   - 「Variables」タブ
   - 以下を追加：
     ```
     NODE_ENV=production
     PORT=3001
     ```

5. **デプロイ実行**
   - 自動的にビルド・デプロイが開始
   - 完了後、URLが発行される（例: `https://your-app.railway.app`）

6. **URLをコピー**
   - このURLを後でフロントエンドの環境変数に使用

---

## 4. フロントエンドのデプロイ（Vercel）

### 4.1 プロジェクト構成の確認

`frontend/package.json` に以下のスクリプトがあることを確認：

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

### 4.2 Vercelでデプロイ

1. **Vercel ダッシュボードにアクセス**
   - https://vercel.com にログイン

2. **新規プロジェクト作成**
   - 「Add New」→「Project」
   - GitHubリポジトリを選択

3. **ビルド設定**
   - Framework Preset: `Vite`
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **環境変数の設定**
   - 「Environment Variables」セクション
   - 以下を追加：
     ```
     VITE_API_URL=https://your-app.railway.app
     ```
   - ※ RailwayのURLを使用

5. **デプロイ実行**
   - 「Deploy」ボタンをクリック
   - 完了後、URLが発行される（例: `https://your-app.vercel.app`）

---

## 5. 動作確認

### 5.1 フロントエンドにアクセス

1. VercelのURLにアクセス
2. 記事一覧が表示されることを確認
3. 更新ボタンが動作することを確認
4. 記事リンクをクリックして元サイトに移動できることを確認

### 5.2 トラブルシューティング

**記事が表示されない場合**:
1. ブラウザの開発者ツールを開く（F12）
2. Consoleタブでエラーを確認
3. Networkタブで `/api/articles` のリクエストを確認

**よくある問題**:

| 問題 | 原因 | 解決策 |
|------|------|--------|
| CORSエラー | CORS設定の問題 | バックエンドのCORS設定を確認 |
| 404 Error | APIのURLが間違っている | `VITE_API_URL` を確認 |
| 500 Error | RSSフィードの取得失敗 | RSSフィードのURLを確認 |

---

## 6. 継続的デプロイ（自動デプロイ）

### 6.1 自動デプロイの仕組み

GitHubの `main` ブランチにプッシュすると、自動的にデプロイされます。

```bash
# コードを修正
git add .
git commit -m "Update: 機能追加"
git push origin main

# → Vercel/Railwayが自動的にデプロイ
```

### 6.2 デプロイ状況の確認

- **Vercel**: ダッシュボードの「Deployments」タブ
- **Railway**: ダッシュボードの「Deployments」タブ

---

## 7. 環境変数一覧

### バックエンド（Railway）

| 変数名 | 値 | 説明 |
|--------|-----|------|
| NODE_ENV | production | 環境 |
| PORT | 3001 | ポート番号 |

### フロントエンド（Vercel）

| 変数名 | 値 | 説明 |
|--------|-----|------|
| VITE_API_URL | https://your-app.railway.app | バックエンドのURL |

---

## 8. コスト

### 完全無料で運用可能

| サービス | 無料枠 |
|---------|--------|
| **Vercel** | 100GB帯域幅/月 |
| **Railway** | $5/月のクレジット（約500時間稼働） |
| **合計** | **$0/月** |

---

## 9. カスタムドメイン設定（オプション）

### 9.1 Vercel

1. Vercel ダッシュボード→「Settings」→「Domains」
2. カスタムドメインを追加
3. DNSレコードを設定

### 9.2 Railway

1. Railway ダッシュボード→「Settings」→「Domains」
2. 「Generate Domain」または「Custom Domain」を追加

---

## 10. ログの確認

### 10.1 Vercel

1. ダッシュボード→プロジェクトを選択
2. 「Deployments」→デプロイを選択
3. 「Logs」タブ

### 10.2 Railway

1. ダッシュボード→プロジェクトを選択
2. 「Deployments」→「Logs」

---

## 11. デプロイチェックリスト

### デプロイ前
- [ ] GitHubリポジトリが作成されている
- [ ] コードがプッシュされている
- [ ] RSSフィードリストが設定されている
- [ ] package.jsonのスクリプトが正しい

### デプロイ後
- [ ] フロントエンドが表示される
- [ ] バックエンドAPIが応答する
- [ ] 記事一覧が表示される
- [ ] 更新ボタンが動作する
- [ ] 記事リンクが動作する

---

## 12. まとめ

このガイドに従うことで、**約15分**でデプロイが完了します。

**手順のまとめ**:
1. GitHubにコードをプッシュ
2. Railwayでバックエンドをデプロイ
3. Vercelでフロントエンドをデプロイ
4. 動作確認

**次のアクション**:
- RSSフィードリストを設定
- 実装を開始
- デプロイして公開！
