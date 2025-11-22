import { Router, Request, Response } from 'express';
import { getArticles } from '../services/rssService';

const router = Router();

/**
 * GET /api/articles
 * 全フィードから記事を取得
 */
router.get('/articles', async (req: Request, res: Response) => {
    try {
        const articles = await getArticles();

        res.json({
            success: true,
            data: {
                articles,
                totalCount: articles.length,
            },
        });
    } catch (error) {
        console.error('Error fetching articles:', error);
        res.status(500).json({
            success: false,
            error: {
                message: '記事の取得に失敗しました',
            },
        });
    }
});

export default router;
