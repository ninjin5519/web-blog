import PostCards from "@/components/post-section/post-cards";
import React from "react";

const Articles = () => {
  return (
    <div className="w-5/6 m-auto p-4 flex flex-col gap-4">
      <h2 className="text-3xl font-bold">All blog post</h2>
      <PostCards />
      <button className="w-32 text-base font-medium border-2 border-[#696A754D] rounded-md  my-6 mx-auto">
        Load More
      </button>
    </div>
  );
};

export default Articles;
