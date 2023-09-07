
'use client'
import { CldImage } from "next-cloudinary";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const page = () => {

return <div
  className="w-full sm:h-[450px] lg:h-[550px] h-full flex flex-col gap-8 sm:flex-row   p-2
   border-white border rounded-2xl shadow-lg  bg-white backdrop-filter backdrop-blur-lg bg-opacity-10"
>
  {/* Text and desc */}
  <div className="flex-1 flex-col bg-clip-padding sm:w-[50%] w-full">
    <div className=" px-4 pb-2 font-semibold sm:text-[36px] text-[32px] sm:text-start  text-lime border-b-2">
    Wet Weather Plan
    </div>
    <div className="p-4 sm:text-[22px] text-[20px] tracking-wide text-start">
    In the event of poor weather on the day. The backup venue for the Ceremony will be held at The Barn Mosman at 3:30pm. The reception will still be at Ripples.
    <br/>
    <br/>
     We will send out an email and post an update the website if this occurs.
     <br/>
    <br/>
    <span className="hover:cursor-pointer" onClick={() => window.open("https://goo.gl/maps/kP39tXT3E5ke9mnt9", "_blank")}><IoLocationSharp className="inline-block" /> 3C Avenue Rd, Mosman NSW 2088</span>
    </div>

  </div>

  {/* Image */}
  <div className="relative sm:w-[50%] w-full sm:h-auto ">
  <CldImage
            src="barn_w97cwl"
            alt="The barn Mosman"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            className="rounded-2xl border-2 border-white shadow-lg h-full"
          />
    
  </div>
</div>

      }


export default page;