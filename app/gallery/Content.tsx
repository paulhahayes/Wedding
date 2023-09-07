"use client";

import GridImage from "./GridImage";
import { ImageProps } from "@/types/GalleryTypes";
import { useState } from "react";
import ImageModal from "@/components/modal/ImageModal";
type ContentProps = {
  images: ImageProps[];
};

const Content: React.FC<ContentProps> = ({ images }) => {
  const [photoId, setPhotoId] = useState<number | null>(null);

  return (
    <main className="mx-auto   sm:px-0  p-4 ">
      {photoId != null && (
        <ImageModal
          images={images}
          onClose={() => {
            setPhotoId(null);
          }}
          setPhotoId={(newPhotoId: number | null) => setPhotoId(newPhotoId)}
          photoId={photoId}
        />
      )}

      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        {images.map((image) => (
          <GridImage
            key={image.id}
            image={image}
            setPhotoId={setPhotoId}
            author="@paulhahyes"
          />
        ))}
      </div>
    </main>
  );
};

export default Content;
