import { MyContext, SearchContext } from "@/provider/search-provider";
import React from "react";
import { useContext } from "react";

const Input = () => {
  const { setSearchValue } = useContext(MyContext);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <input
        class=" placeholder:text-slate-400 block bg-gray-100 w-full border border-slate-300 rounded-md py-2 pl-2  shadow-sm focus:outline-none "
        placeholder="Search"
        type="text"
        name="search"
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
