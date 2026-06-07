import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Article } from "../types/article";
import Hero from "../Components/Home-Components/Hero";
import HomeFooter from "../Components/Home-Components/HomeFooter";

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch(
          "https://lonelyroad.app/api/v1/guides"
        );

        const data = await res.json();

        setArticles(data.guides);
      } catch (error) {
        console.log("Failed to fetch:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  // 🔥 LOADING UI
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#5F6D3B]">
        <div className="w-16 h-16 border-4 border-[#E9F9B2] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <div>
        <Hero />
      </div>

      <h1 className="font-bold text-4xl md:text-8xl text-[#5F6D3B] flex items-center justify-center mt-10">
        Articles
      </h1>

      <div className="text-white grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 mt-10">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-[#5F6D3B] rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-lg font-bold mb-2">
              {article.title}
            </h2>

            <p className="text-white mb-3">
              {article.country}
            </p>

            <Link
              to={`/article/${article.id}`}
              className="inline-block bg-[#E9F9B2] text-black px-4 py-2 rounded-lg hover:bg-[#dff28f] transition"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-10 pb-2">
        <HomeFooter />
      </div>
    </>
  );
}