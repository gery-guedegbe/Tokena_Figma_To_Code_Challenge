import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import newsData from "../news";
import logoCoinMaket from "../assets/images/coin-market-logo.png";
import { ArrowDown, Heart, MessageSquareText } from "lucide-react";

const NewsSections = () => {
  const [news, setNews] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Page courante
  const articlesPerPage = 8; // Nombre d'articles par page

  useEffect(() => {
    setLoading(true);
    const articles = newsData.articles;
    const sortedArticles = articles.sort((a, b) => {
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    });
    setNews(sortedArticles);
    setVisibleArticles(sortedArticles.slice(0, articlesPerPage)); // Afficher les premiers articles
    setLoading(false);
  }, []);

  useEffect(() => {
    const endIndex = page * articlesPerPage;
    setVisibleArticles(news.slice(0, endIndex));
  }, [page, news]);

  const handleViewMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  dayjs.extend(relativeTime);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col items-center justify-center space-y-8">
        <h2 className="w-full text-left text-tokena-dark/90 text-sm xl:text-lg font-semibold dark:text-tokena-light-gray">
          Latest crypto news
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {visibleArticles.map((article) => (
            <div
              key={article.url}
              className="space-y-2 px-3 py-2 flex flex-col items-center justify-between border border-tokena-gray bg-white dark:bg-tokena-dark-blue-2 dark:border-tokena-dark-blue-2 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-95"
            >
              <div className="w-full flex items-center justify-start text-left gap-2">
                <img
                  src={logoCoinMaket}
                  alt="Coin Market Logo"
                  className="w-8 h-8"
                />
                <div className="flex flex-col items-start justify-center">
                  <span className="text-sm text-tokena-dark dark:text-white font-semibold">
                    {article.source.name}
                  </span>
                  <span className="font-medium text-tokena-dark-gray text-[12px] dark:text-tokena-gray">
                    News - {dayjs(article.publishedAt).fromNow()}
                  </span>
                </div>
              </div>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
              )}
              <div className="space-y-2">
                <h3 className="text-xs text-tokena-dark dark:text-tokena-gray font-semibold italic mb-2">
                  {article.title}
                </h3>
                <p className="text-xs text-tokena-dark-gray dark:text-white font-medium mb-2 line-clamp-3">
                  {article.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center space-x-2 text-sm font-semibold text-tokena-dark-gray dark:text-tokena-light-gray">
                      <Heart className="w-5 h-5 text-tokena-dark-gray font-medium dark:text-" />
                    </span>
                    <span className="flex items-center space-x-2 text-sm font-semibold text-tokena-dark-gray dark:text-tokena-gray">
                      <MessageSquareText className="w-5 h-5 text-tokena-dark-gray font-medium" />
                    </span>
                  </div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-sm text-tokena-blue bg-tokena-blue/20 hover:bg-tokena-blue/30 rounded-md"
                  >
                    Lire l&apos;article
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {loading && <p className="mt-4">Chargement...</p>}
        {!loading && (
          <button
            onClick={handleViewMore}
            className="px-4 py-3 mt-6 flex items-center justify-center gap-2 text-sm text-black font-medium bg-gray-200 border border-gray-300 rounded-full shadow-sm hover:bg-gray-300 transition-transform transform active:scale-95"
          >
            Load More
            <ArrowDown className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsSections;
