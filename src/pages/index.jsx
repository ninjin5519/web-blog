import Hero from "@/components/hero";
import Trending from "@/components/trending";
import PostCards from "@/components/post-section/post-cards";
import Loader from "@/components/loader";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "@/provider/search-provider";

export default function Home() {
  const { searchValue, articles, isLoading } = useContext(MyContext);
  return (
    <main className="m-auto">
      <Hero />
      <Trending />
      <div className="flex flex-wrap max-w-[1280px] m-auto gap-4">
        {isLoading ? (
          <Loader />
        ) : (
          articles.map((article) => (
            <PostCards key={article.id} article={article} />
          ))
        )}
      </div>
    </main>
  );
}
