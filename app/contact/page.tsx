"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

const Contact = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="m-24 pb-8 borde ">
      <div className="flex items-center gap-8 ">
        <div className="flex-1 h-[500px] relative ">
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className="object-contain "
          />
        </div>
        <form className="flex-1 flex flex-col gap-[20px] ">
          <input
            type="text"
            placeholder="name"
            className="p-[20px] placeholder-white backdrop-blur-3xl rounded bg-slate-700/30 border-none outline-none text-white text-[20px] font-bold"
          />
          <input
            type="text"
            placeholder="email"
            className="p-[20px] backdrop-blur-3xl  placeholder-white rounded bg-slate-700/30 border-none outline-none text-white text-[20px] font-bold "
          />
          <textarea
            className="p-[20px] h-[400px] backdrop-blur-3xl rounded placeholder-white bg-slate-700/30 border-none outline-none text-white text-[20px] font-bold"
            placeholder="message"
          ></textarea>
          <div className="flex justify-end">
            <Button
              className=" bg-blue-300/70 py-2 px-6 w-[50%] mt-2 border-2 border-white"
              onClick={handleClick}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
