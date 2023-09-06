"use client";

import Image from "next/image";
import { ImageProps } from "@/types/GalleryTypes";
import { useEffect, useRef, useState } from "react";
import ImageModal from "@/components/modal/ImageModal";
type ContentProps = {
  images: ImageProps[];
};

const Content: React.FC<ContentProps> = ({ images }) => {
  const [photoId, setPhotoId] = useState<number | null>(null);

  useEffect(() => {}, [photoId]);

  return (
    <main className="mx-auto max-w-[1960px] p-4 ">
      {photoId && (
        <ImageModal
          images={images}
          onClose={() => {
            setPhotoId(null);
          }}
          setPhotoId={(newPhotoId: number | null) => setPhotoId(newPhotoId)}
          photoId={photoId}
        />
      )}

      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4 ">
        {images.map(({ id, public_id, format, blurDataUrl }) => (
          <div
            key={id}
            className="after:content group relative mb-5 block w-full shadow after:pointer-events-none after:absolute after:inset-0 after:rounded-lg "
          >
            <Image
              alt={public_id}
              className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
              style={{ transform: "translate3d(0, 0, 0)" }}
              placeholder="blur"
              blurDataURL={blurDataUrl}
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              onClick={() => setPhotoId(id)}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Content;
