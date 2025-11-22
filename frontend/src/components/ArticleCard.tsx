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
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <article className="article-card">
            <h2 className="article-title">
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                    {article.title}
                </a>
            </h2>
            <div className="article-meta">
                <span className="feed-title">{article.feedTitle}</span>
                <span className="article-date">{formatDate(article.pubDate)}</span>
            </div>
            {article.description && (
                <p className="article-description">
                    {article.description.slice(0, 200)}
                    {article.description.length > 200 ? '...' : ''}
                </p>
            )}
        </article>
    );
};
