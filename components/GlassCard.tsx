"use client";
import { CldImage } from "next-cloudinary";

interface GlassCardProps {
  title: string;
  desc: string;
  reverse: boolean;
  image?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  title,
  desc,
  image,
  reverse,
}) => {
  return (
    <div
      className={`w-full h-full flex min-[320px]:flex-col 


    border-4 rounded-2xl shadow-lg  bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 ${
      reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    } `}
    >
      {/* Text and desc */}
      <div className="flex-1 flex-col bg-clip-padding">
        <div className=" p-4 font-semibold text-[32px] border-b-2 text-white">
          {title}
        </div>
        <div className="p-4 text-[20px] text-start">{desc}</div>
      </div>

      {/* Image */}
      <div className="border-white rounded shadow-m p-4">
        {image && (
          <CldImage
            src={image}
            alt="Scubar"
            width="550"
            height="550"
            quality="100"
            className="rounded-2xl border-2 border-white shadow-lg"
          />
        )}
      </div>
    </div>
  );
};

export default GlassCard;
