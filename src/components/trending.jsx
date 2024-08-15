import React from "react";
const trendingImages = [
  { image: "/images/post-card-overlay.png" },
  { image: "/images/Rectangle 38 (1).png" },
  { image: "/images/Rectangle 38 (2).png" },
  { image: "/images/Rectangle 38 (3).png" },
];

const Trending = () => {
  return (
    <div className="w-5/6 m-auto mt-20 flex flex-col gap-7">
      <h2 className="text-3xl font-bold">Trending</h2>
      <div className="flex  gap-5">
        {trendingImages.map((zurag) => (
          <div className="w-[293px] h-[320px]">
            <img src={zurag.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
