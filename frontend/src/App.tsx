import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Article } from './types';
import { ArticleCard } from './components/ArticleCard';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function App() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedFeed, setSelectedFeed] = useState<string>('All');

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

    const uniqueFeeds = useMemo(() => {
        const feeds = new Set(articles.map(article => article.feedTitle));
        return Array.from(feeds).sort();
    }, [articles]);

    const filteredArticles = useMemo(() => {
        if (selectedFeed === 'All') return articles;
        return articles.filter(article => article.feedTitle === selectedFeed);
    }, [articles, selectedFeed]);

    return (
        <div className="app">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h2>Feeds</h2>
                </div>
                <nav className="sidebar-nav">
                    <button
                        className={`nav-item ${selectedFeed === 'All' ? 'active' : ''}`}
                        onClick={() => setSelectedFeed('All')}
                    >
                        <span className="icon">📑</span>
                        All Articles
                    </button>
                    <div className="nav-divider"></div>
                    {uniqueFeeds.map(feed => (
                        <button
                            key={feed}
                            className={`nav-item ${selectedFeed === feed ? 'active' : ''}`}
                            onClick={() => setSelectedFeed(feed)}
                        >
                            <span className="icon">
                                {feed.toLowerCase().includes('zenn') ? '📘' :
                                    feed.toLowerCase().includes('qiita') ? '📗' :
                                        feed.toLowerCase().includes('youtube') ? '📺' : '📰'}
                            </span>
                            {feed}
                        </button>
                    ))}
                </nav>
                <div className="sidebar-footer">
                    <button onClick={fetchArticles} disabled={loading} className="refresh-button-mini">
                        {loading ? 'Updating...' : '🔄 Refresh'}
                    </button>
                </div>
            </aside>

            <main className="main-content">
                <header className="content-header">
                    <h1>{selectedFeed === 'All' ? 'Latest Articles' : selectedFeed}</h1>
                    <span className="article-count-badge">
                        {filteredArticles.length} articles
                    </span>
                </header>

                <div className="scrollable-content">
                    {error && (
                        <div className="error-message">
                            ❌ {error}
                        </div>
                    )}

                    {loading && articles.length === 0 && (
                        <div className="loading-message">
                            <div className="spinner"></div>
                            <p>Loading your feeds...</p>
                        </div>
                    )}

                    {!loading && filteredArticles.length === 0 && !error && (
                        <div className="empty-message">
                            <p>No articles found.</p>
                        </div>
                    )}

                    <div className="articles-grid">
                        {filteredArticles.map((article, index) => (
                            <ArticleCard key={`${article.link}-${index}`} article={article} />
                        ))}
                    </div>

                    <footer className="content-footer">
                        <p>© 2025 RSS Feed Reader. Powered by various tech blogs.</p>
                    </footer>
                </div>
            </main>
        </div>
    );
}

export default App;
