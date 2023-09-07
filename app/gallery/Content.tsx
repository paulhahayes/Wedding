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
    <main className="mx-auto sm:px-0  p-4 ">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 ">
        {images.map((image) => (
          <GridImage key={image.id} image={image} setPhotoId={setPhotoId} />
        ))}
      </div>
    </main>
  );
};

export default Content;
