import React from "react";
import PostCards from "./post-cards";

const PostSection = () => {
  return (
    <div className="w-5/6 m-auto flex flex-col gap-8">
      <h2 className="text-3xl font-bold">All blog post</h2>
      <ul className="flex text-xs font-bold gap-5">
        <li className="text-[#D4A373]">All</li>
        <li>Design</li>
        <li>Travel</li>
        <li>Fashion</li>
        <li>Technology</li>
        <li>Branding</li>
      </ul>
      <PostCards />
    </div>
  );
};

export default PostSection;
