export interface Article {
    title: string;
    link: string;
    description?: string;
    pubDate: string;
    feedTitle: string;
}

export interface ArticlesResponse {
    success: boolean;
    data: {
        articles: Article[];
        totalCount: number;
    };
}
