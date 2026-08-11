"use client";
import React, { forwardRef } from "react";

import { CldImage } from "next-cloudinary";
type GridImageProps = {
  image: any;
  setPhotoId: any;
};
const GridImage = forwardRef<HTMLDivElement, GridImageProps>(
  ({ image, setPhotoId }, ref) => {
    const addTag = () => {
      const tag =
        image.tags.length > 0 && image.tags[0].startsWith("@")
          ? image.tags[0]
          : "@" + image.tags[0];
      return tag;
    };

    const removeTag = () => {
      if (image.tags.length > 0 && image.tags[0].startsWith("@")) {
        return image.tags[0].substring(1);
      } else {
        return image.tags[0];
      }
    };

    const handleClick = () => {
      const tag = removeTag();
      const instagramUrl = `https://www.instagram.com/${tag}`;
      window.open(instagramUrl, "_blank");
    };

    return (
      <div className="group" ref={ref}>
        <div className="after:content relative mb-5 block w-full  hover:cursor-pointer after:pointer-events-none after:absolute after:inset-0 after:rounded-lg h-[290px]">
          <CldImage
            alt={image.public_id}
            className="transform rounded-lg brightness-90 transition will-change-auto border group-hover:brightness-110 "
            style={{
              transform: "translate3d(0, 0, 0)",
              objectFit: "cover",
            }}
            fill
            placeholder="blur"
            blurDataURL={image.blurDataUrl}
            src={`${image.public_id}.${image.format}`}
            sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
            onClick={() => setPhotoId(image.id)}
          />
        </div>
        <p
          className="text-lg text-start font-medium text-white  hover:cursor-pointer relative"
          onClick={handleClick}
        >
          {image.tags[0] ? addTag() : ""}
        </p>
      </div>
    );
  }
);

GridImage.displayName = "GridImage";

export default GridImage;
