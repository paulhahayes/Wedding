"use client";
import React from "react";

import { CldImage } from "next-cloudinary";
export default function GridImage({
  image,
  setPhotoId,
}: {
  image: any;
  setPhotoId: any;
}) {
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
    <div className="group">
      <div className="after:content relative mb-5 block w-full hover:cursor-pointer after:pointer-events-none  after:absolute after:inset-0 after:rounded-lg">
        <CldImage
          alt={image.public_id}
          className="transform rounded-lg brightness-90 transition will-change-auto border group-hover:brightness-110"
          style={{ transform: "translate3d(0, 0, 0)" }}
          placeholder="blur"
          blurDataURL={image.blurDataUrl}
          width={640}
          crop="fill"
          height={480}
          src={`${image.public_id}`}
          sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
          onClick={() => setPhotoId(image.id)}
        />
      </div>
      <p
        className="text-lg text-start font-medium text-white absolute hover:cursor-pointer"
        onClick={handleClick}
      >
        {image.tags[0] ? addTag() : ""}
      </p>
    </div>
  );
}
