import React from "react";

import { CldImage } from "next-cloudinary";
export default function GridImage({
  image,
  setPhotoId,
  author,
}: {
  image: any;
  setPhotoId: any;
  author: string;
}) {
  return (
    <div className="group">
      <div className="after:content relative mb-5 block w-full hover:cursor-pointer after:pointer-events-none overflow-y-hidden after:absolute after:inset-0 after:rounded-lg">
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

      <p className="text-lg text-start font-medium text-white absolute">
        {author}
      </p>
    </div>
  );
}
