import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
    article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
    };

    const getBrand = (feedTitle: string) => {
        const lowerTitle = feedTitle.toLowerCase();
        if (lowerTitle.includes('zenn')) return 'zenn';
        if (lowerTitle.includes('qiita')) return 'qiita';
        if (lowerTitle.includes('youtube')) return 'youtube';
        return 'default';
    };

    const brand = getBrand(article.feedTitle);

    return (
        <article className="article-card" data-brand={brand}>
            <div className="article-meta">
                <span className="feed-badge">{article.feedTitle}</span>
                <span className="article-date">{formatDate(article.pubDate)}</span>
            </div>
            <h2 className="article-title">
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                    {article.title}
                </a>
            </h2>
            {article.description && (
                <p className="article-description">
                    {article.description.replace(/<[^>]*>/g, '').slice(0, 120)}
                    {article.description.length > 120 ? '...' : ''}
                </p>
            )}
        </article>
    );
};
