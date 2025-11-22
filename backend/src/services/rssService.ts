import Parser from 'rss-parser';
import { RSS_FEEDS, FeedConfig } from '../config/feeds';

export interface Article {
    title: string;
    link: string;
    description?: string;
    pubDate: string;
    feedTitle: string;
}

const parser = new Parser({
    timeout: 10000, // 10秒タイムアウト
});

/**
 * 単一のRSSフィードから記事を取得
 */
async function fetchFeed(feedConfig: FeedConfig): Promise<Article[]> {
    try {
        const feed = await parser.parseURL(feedConfig.url);

        return (feed.items || []).map(item => ({
            title: item.title || 'No Title',
            link: item.link || '',
            description: item.contentSnippet || item.content || item.description || '',
            pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
            feedTitle: feedConfig.name,
        }));
    } catch (error) {
        console.error(`Failed to fetch feed: ${feedConfig.name}`, error);
        return []; // エラーの場合は空配列を返す
    }
}

/**
 * 全フィードから記事を取得して統合
 */
export async function getArticles(): Promise<Article[]> {
    console.log(`Fetching ${RSS_FEEDS.length} feeds...`);

    // 全フィードを並列で取得
    const feedPromises = RSS_FEEDS.map(feedConfig => fetchFeed(feedConfig));
    const feedResults = await Promise.all(feedPromises);

    // 全記事を統合
    const allArticles = feedResults.flat();

    // 公開日時でソート（新しい順）
    allArticles.sort((a, b) => {
        const dateA = new Date(a.pubDate).getTime();
        const dateB = new Date(b.pubDate).getTime();
        return dateB - dateA; // 降順
    });

    console.log(`Fetched ${allArticles.length} articles from ${RSS_FEEDS.length} feeds`);

    return allArticles;
}
