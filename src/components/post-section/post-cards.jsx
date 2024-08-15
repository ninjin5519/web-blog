import Link from "next/link";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Input from "../header/input";
import { MyContext, SearchContext } from "@/provider/search-provider";
import Loader from "../loader";

const PostCards = () => {
  const { searchValue, findPost, isLoading } = useContext(MyContext);

  return (
    <>
      <div className="grid grid-rows-3 grid-cols-3 gap-4 justify-center ">
        {isLoading && <Loader />}
        {findPost.map((card) => (
          <Link href={"/blog/" + card.id}>
            <div className="border-2 p-3 rounded-xl border-gray-100 flex flex-col gap-4">
              <img
                className="w-[360px] h-[240px] rounded-lg"
                src={card.cover_image}
                alt=""
              />
              <p className="bg-slate-100 text-[#4B6BFB] text-sm font-medium w-24 p-2 rounded-lg">
                {card.typo_of}
              </p>
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <span className="text-base font-normal text-[#97989F]">
                {card.published_at}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mx-auto">
        <button
          onClick={() => {
            setCount(count + 3);
          }}
          className="w-32 text-base font-medium border-2 border-[#696A754D] rounded-md p-3 my-28 "
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default PostCards;
