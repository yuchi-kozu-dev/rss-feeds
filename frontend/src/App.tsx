import { useState, useEffect } from 'react';
import axios from 'axios';
import { Article } from './types';
import { ArticleCard } from './components/ArticleCard';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function App() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchArticles = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`${API_URL}/api/articles`);

            if (response.data.success) {
                setArticles(response.data.data.articles);
            } else {
                setError('記事の取得に失敗しました');
            }
        } catch (err) {
            setError('記事の取得中にエラーが発生しました');
            console.error('Error fetching articles:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <div className="app">
            <header className="app-header">
                <h1>📰 RSS Feed Reader</h1>
                <button
                    onClick={fetchArticles}
                    disabled={loading}
                    className="refresh-button"
                >
                    {loading ? '更新中...' : '🔄 更新'}
                </button>
            </header>

            <main className="app-main">
                {error && (
                    <div className="error-message">
                        ❌ {error}
                    </div>
                )}

                {loading && articles.length === 0 && (
                    <div className="loading-message">
                        ⏳ 記事を読み込んでいます...
                    </div>
                )}

                {!loading && articles.length === 0 && !error && (
                    <div className="empty-message">
                        記事がありません
                    </div>
                )}

                <div className="articles-container">
                    {articles.map((article, index) => (
                        <ArticleCard key={`${article.link}-${index}`} article={article} />
                    ))}
                </div>

                {articles.length > 0 && (
                    <div className="article-count">
                        全 {articles.length} 件の記事
                    </div>
                )}
            </main>

            <footer className="app-footer">
                <div className="footer-content">
                    <div className="disclaimer">
                        <h3>免責事項</h3>
                        <p>
                            本サービスは、各RSSフィードから記事情報を取得し、タイトルと要約のみを表示しています。
                            記事の全文は元サイトでご覧ください。すべての著作権は各記事の著者および提供元に帰属します。
                        </p>
                    </div>
                    <div className="credits">
                        <h3>データ提供元</h3>
                        <p>
                            Qiita, Zenn, Hugging Face Blog, Netflix Tech Blog, Mercari Tech Blog,
                            その他各種技術ブログのRSSフィードを利用しています。
                        </p>
                    </div>
                    <div className="footer-links">
                        <p>
                            本サービスは個人学習・非営利目的で運営されています。
                            <br />
                            © 2025 RSS Feed Reader
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
