"use client";

import GridImage from "./GridImage";
import { ImageProps } from "@/types/GalleryTypes";
import { useEffect, useState } from "react";
import ImageModal from "@/components/modal/ImageModal";
import { useGallery } from "@/context/GalleryContext";
type ContentProps = {
  images: ImageProps[];
  nextCursor: string;
};

const Content: React.FC<ContentProps> = ({ images: defaultImages }) => {
  const [photoId, setPhotoId] = useState<number | null>(null);
  const { images, updateImages } = useGallery();
  updateImages(defaultImages);

  useEffect(() => {}, [images]);

  return (
    <main className="mx-auto sm:px-0 p-4 ">
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
        {images.map((image: any) => (
          <GridImage key={image.id} image={image} setPhotoId={setPhotoId} />
        ))}
      </div>
    </main>
  );
};

export default Content;
