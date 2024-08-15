import React from "react";

const Contact = () => {
  return (
    <div className="w-4/6 m-auto flex flex-col gap-5 ">
      <h1 className="text-4xl font-semibold">Contact Us</h1>
      <p className="text-base font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam
      </p>
      <div className="flex justify-between gap-11">
        <div className="w-72 border-2 rounded-lg border-[#E8E8EA] p-4">
          <h6 className="text-2xl font-semibold">Address</h6>
          <p className="text-lg font-normal">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </p>
        </div>
        <div className="w-72 border-2 rounded-lg border-[#E8E8EA] p-4">
          <h6 className="text-2xl font-semibold">Contact</h6>
          <p className="text-lg font-normal">313-332-8662</p>
          <p className="text-lg font-normal">info@email.com</p>
        </div>
      </div>
      <div className="bg-[#F6F6F7] rounded-lg flex flex-col gap-4 p-4">
        <div className="w-[478px] h-[335px] flex flex-col gap-4">
          <h6 className="text-lg font-semibold"> Leave a Message</h6>
          <div className="flex justify-between">
            <input
              className="rounded-lg p-2"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="rounded-lg p-2"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <input className="rounded-lg p-2" type="text" placeholder="Subject" />
          <input
            className="rounded-lg p-2 h-[134px] text-start"
            type="text"
            placeholder="Write a message"
          />
          <button className="bg-[#4B6BFB] rounded-lg p-4 text-white w-32 h-10 text-sm text-center">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
