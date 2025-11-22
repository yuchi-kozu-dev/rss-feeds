// RSS Feed Configuration
// まずは少数のフィードでテスト

export interface FeedConfig {
  name: string;
  url: string;
}

// 全フィードリスト（動作確認後に適用）
export const RSS_FEEDS: FeedConfig[] = [
  // --- 国内企業テックブログ（AI/データ含む） ---
  { name: "Mercari Tech Blog (JP)", url: "https://tech.mercari.com/rss" },
  { name: "Mercari Engineering Blog (EN)", url: "https://engineering.mercari.com/blog/feed.xml" },
  { name: "LayerX Tech Blog", url: "https://tech.layerx.co.jp/feed" },
  { name: "MonotaRO Tech Blog", url: "https://tech-blog.monotaro.com/feed" },
  { name: "CyberAgent Developers", url: "https://developers.cyberagent.co.jp/blog/feed" },
  { name: "DeNA Engineering", url: "https://engineer.dena.com/index.xml" },
  { name: "ZOZO Tech Blog", url: "https://techblog.zozo.com/rss" },
  { name: "LINE Engineering (JP)", url: "https://engineering.linecorp.com/ja/feed/" },
  { name: "Gunosy Tech Blog", url: "https://tech.gunosy.io/rss" },
  { name: "GMO Media Tech Blog", url: "https://blog.gmo.media/feed" },
  { name: "KLab DSAS Tech Blog", url: "http://dsas.blog.klab.org/index.rdf" },
  { name: "KLab Official Blog", url: "https://www.klab.com/jp/assets/rss/rss_klablog.xml" },
  { name: "LIFULL Official Blog", url: "https://www.lifull.blog/rss" },
  { name: "SmartHR Tech Blog", url: "https://tech.smarthr.jp/rss" },
  { name: "Wantedly Engineers Blog", url: "https://www.wantedly.com/stories/s/wantedly_engineers/rss.xml" },
  { name: "AI Shift Tech Blog", url: "https://www.ai-shift.co.jp/techblog/feed" },
  { name: "BrainPad Data Analytics Blog", url: "https://blog.brainpad.co.jp/rss" },
  { name: "Nishika (Zenn)", url: "https://zenn.dev/p/team_nishika/feed" },

  // --- グローバル企業テックブログ ---
  { name: "Netflix Tech Blog", url: "http://techblog.netflix.com/feeds/posts/default" },
  { name: "Uber Engineering", url: "https://www.uber.com/blog/engineering/rss/" },
  { name: "Airbnb Engineering & Data Science", url: "https://medium.com/feed/airbnb-engineering" },
  { name: "Stripe Engineering Blog", url: "https://stripe.com/blog/feed.rss" },
  { name: "Dropbox Tech Blog", url: "https://tech.dropbox.com/feed/" },
  { name: "Pinterest Engineering Blog", url: "https://engineering.pinterest.com/blog/rss" },
  { name: "Grab Engineering", url: "https://engineering.grab.com/feed.xml" },
  { name: "Shopify Engineering", url: "https://shopifyengineering.myshopify.com/blogs/engineering.atom" },
  { name: "AWS Official Blog", url: "https://aws.amazon.com/blogs/aws/feed/" },

  // --- AI / ML / データサイエンス特化 ---
  { name: "Hugging Face Blog", url: "https://huggingface.co/blog/feed.xml" },
  { name: "Hugging Face Daily Papers", url: "https://rsshub.app/huggingface/daily-papers" },
  { name: "OpenAI Blog (old RSS)", url: "https://openai.com/blog/rss.xml" },
  { name: "OpenAI News", url: "https://openai.com/news/rss.xml" },
  { name: "DeepMind Blog", url: "https://deepmind.com/blog/feed/basic/" },
  { name: "Google Research Blog", url: "https://feeds.feedburner.com/blogspot/gJZg" },
  { name: "Google Official Blog", url: "https://blog.google/feed/" },
  { name: "Amazon Science", url: "https://www.amazon.science/index.rss" },
  { name: "PyTorch Blog", url: "https://pytorch.org/feed.xml" },
  { name: "BAIR Blog (Berkeley)", url: "https://bair.berkeley.edu/blog/feed.xml" },
  { name: "ML@B (Machine Learning at Berkeley)", url: "https://ml.berkeley.edu/blog/rss.xml" },
  { name: "Towards Data Science", url: "https://towardsdatascience.com/feed" },
  { name: "KDnuggets", url: "https://www.kdnuggets.com/feed" },
  { name: "Towards AI", url: "https://pub.towardsai.net/feed" },
  { name: "Unite.AI", url: "https://www.unite.ai/feed/" },
  { name: "The Gradient", url: "https://thegradient.pub/rss/" },
  { name: "The Decoder (AI News)", url: "https://the-decoder.com/feed/" },
  { name: "arXiv stat.ML", url: "http://arxiv.org/rss/stat.ML" },
  { name: "Reddit r/datascience", url: "https://www.reddit.com/r/datascience.rss" },
  { name: "Reddit r/MachineLearning", url: "http://www.reddit.com/r/MachineLearning/.rss" },

  // --- Zenn ---
  { name: "Zenn 全体フィード", url: "https://zenn.dev/feed" },
  { name: "Zenn topic: LLM", url: "https://zenn.dev/topics/llm/feed" },
  { name: "Zenn topic: 機械学習", url: "https://zenn.dev/topics/機械学習/feed" },

  // --- Qiita ---
  { name: "Qiita 人気記事", url: "https://qiita.com/popular-items/feed.atom" },
  { name: "Qiita tag: llm", url: "https://qiita.com/tags/llm/feed.atom" },
  { name: "Qiita tag: 機械学習", url: "https://qiita.com/tags/機械学習/feed.atom" },

  // --- note ---
  { name: "note hashtag: LLM", url: "https://note.com/hashtag/LLM/rss" },

  // --- 日本のテックブログ大量まとめ ---
  { name: "Japan Tech Blog Aggregator 500+ (Yamadashy)", url: "https://yamadashy.github.io/tech-blog-rss-feed/feeds/rss.xml" },
  { name: "AI寄り Tech Blog Aggregator (karaage0703)", url: "https://karaage0703.github.io/tech-blog-rss-feed/feeds/rss.xml" },
];
