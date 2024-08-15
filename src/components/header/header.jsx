import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Input from "./input";
import { useState } from "react";
const postCards = [
  {
    image: "/images/Rectangle 38 (4).png",
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    image: "/images/Rectangle 38 (5).png",
    label: "Technology",
    title: "Home town",
    date: "August 20, 2022",
  },
  {
    image: "/images/Rectangle 38 (6).png",
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    image: "/images/Rectangle 38 (7).png",
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    image: "/images/Rectangle 38 (8).png",
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    image: "/images/Rectangle 38 (9).png",
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    image: "/images/Rectangle 38 (10).png",
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    image: "/images/Rectangle 38 (11).png",
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    image: "/images/Rectangle 38 (12).png",
    label: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
];

const Header = () => {
  return (
    <div className="flex justify-between py-6 px-7 items-center">
      <img className="w-32 h-6" src="/images/Logo.png" alt="" />
      <ul className="flex text-base gap-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <label class="relative block">
        <span class="sr-only"></span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
      </label>

      <Input />
    </div>
  );
};
export default Header;
