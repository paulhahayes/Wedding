"use client";
import { CldImage } from "next-cloudinary";

type TimelineCardProps = {
  title: string;
  time: string;
  desc: string;
  image: string;
  reverse?: boolean;
};

const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  time,
  desc,
  reverse,
  image,
}) => {
  return (
    <div
      className={`relative text-start sm:w-[50%] w-[100%] sm:py-0 py-4 px-2 sm:px-0 ${
        reverse ? "left-0 sm:pr-12 pl-16" : "md:left-[50%] sm:pl-12 pl-16"
      }
    `}
    >
      <div
        className={`absolute w-6 h-6 z-20 top-[32px] rounded-full  bg-white ${
          reverse ? "right-circle" : "left-circle "
        }
    `}
      ></div>

      <div className="py-[10px] px-[20px] relative rounded-xl border h-auto sm:h-[500px] backdrop-blur-3xl flex sm:flex-row flex-col bg-slate-700/30 ">
        <div className="py-[20px] px-[20px] relative rounded text-[18px] bg-neutral-100/10 sm:w-[40%] w-[100%] ">
          <h2 className="text-lime text-[28px] font-bold">{title}</h2>
          <small className="text-[16px] my-2 inline-block">{time}</small>
          <p className="">{desc}</p>
        </div>
        <div className="sm:w-[60%] w-[100%] flex flex-col justify-center bg-neutral-100/10 pr-0 sm:pr-[20px]">
          <div className="h-[360px] relative w-full">
            <CldImage src={image} alt={image} fill className="rounded border" />
          </div>
        </div>
        <span
          className={`h-0 w-0 absolute top-[28px] z-20 ${
            reverse ? "left-arrow" : "right-arrow"
          }`}
        ></span>
      </div>
    </div>
  );
};

export default TimelineCard;
