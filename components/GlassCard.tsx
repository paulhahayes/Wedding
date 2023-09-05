"use client";
import { CldImage } from "next-cloudinary";

interface GlassCardProps {
  title: string;
  desc: string;
  reverse: boolean;
  background?: boolean;
  image?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  title,
  desc,
  image,
  reverse,
  background,
}) => {
  return (
    <div
      className={`w-full sm:h-[450px] lg:h-[550px] h-full flex flex-col gap-8 sm:flex-row border-t-2 sm:border-none p-2 border-white
      ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
      ${
        background
          ? "border rounded-2xl shadow-lg  bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 "
          : "bg-transparent"
      }
    `}
    >
      {/* Text and desc */}
      <div className="flex-1 flex-col bg-clip-padding sm:w-[50%] w-full">
        <div className=" px-4 pb-2 font-semibold sm:text-[32px] text-[28px] sm:text-start  text-lime border-b-2">
          {title}
        </div>
        <div className="p-4 sm:text-[22px] text-[20px] tracking-wide text-start">
          {desc}
        </div>
      </div>

      {/* Image */}
      <div className="relative sm:w-[50%] w-full sm:h-auto h-[350px] ">
        {image && (
          <CldImage
            src={image}
            alt={title}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            className="rounded-2xl border-2 border-white shadow-lg h-full"
          />
        )}
      </div>
    </div>
  );
};

export default GlassCard;
