import React from "react";
import { createContext, useState, useEffect } from "react";

export const MyContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(9);
  const [isLoading, setIsLoading] = useState(false);

  const getArticleData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dev.to/api/articles?page=1&per_page=${count}`
      );
      const data = await response.json();
      setArticles(data);
      setIsLoading(false);
    } catch (error) {
      console.log("er", error);
      setIsLoading(false);
      toast.success("Алдаа гарлаа. Та дахин оролдоно уу");
    }
  };

  const findPost = articles?.filter((cards) =>
    cards?.title?.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    getArticleData();
  }, [count]);

  return (
    <MyContext.Provider
      value={{ searchValue, setSearchValue, articles, isLoading, findPost }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default SearchProvider;
