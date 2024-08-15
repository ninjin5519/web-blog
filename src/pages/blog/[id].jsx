import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ArticleDetail = () => {
  const { query } = useRouter();
  const [articleDetail, setArticleDetail] = useState(null);

  const getArticleById = async (id) => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    setArticleDetail(data);
  };
  useEffect(() => {
    getArticleById(query.id);
  }, []);
  return (
    <div className="w-5/6 m-auto p-4 flex flex-col gap-4 items-center">
      <h3 className="text-2xl font-bold">{articleDetail?.title}</h3>
      <div className="flex gap-4 justify-start">
        <img
          className="w-7 h-7 rounded-full"
          src={articleDetail?.user.profile_image}
          alt=""
        />
        <p>{articleDetail?.user.name}</p>
        <p>{articleDetail?.published_at}</p>
      </div>
      <img src={articleDetail?.cover_image} alt="" />
      <div
        className="blog-detail"
        dangerouslySetInnerHTML={{ __html: articleDetail?.body_html }}
      ></div>
    </div>
  );
};
export default ArticleDetail;
