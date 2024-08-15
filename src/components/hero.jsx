import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="h-[600px] w-5/6 m-auto ">
      <div className=" flex place-items-end pb-2 pl-2 m-auto w-full h-full bg-cover bg-center bg-[url('/images/Image.png')] rounded-xl">
        <div className="w-[600px] flex flex-col gap-4 h-[250px] bg-white rounded-xl p-10">
          <button className="text-base w-28 font-medium bg-blue-700 text-white rounded-lg px-3 py-1">
            Technology
          </button>
          <h1 className="text-4xl font-semibold">
            Grid system for better Design User Interface
          </h1>
          <span className="text-base font-normal text-gray-300">
            August 20, 2022
          </span>
        </div>
      </div>
      <div className="flex justify-end gap-1 p-2">
        <div className="border-2 text-4xl text-gray-400 rounded-lg">
          {" "}
          <IoIosArrowBack />
        </div>{" "}
        <div className="border-2 text-4xl text-gray-400 rounded-lg">
          {" "}
          <IoIosArrowForward />
        </div>{" "}
      </div>
    </div>
  );
};
export default Hero;
