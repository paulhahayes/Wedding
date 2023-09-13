"use client";
//TODO pagination + loaders
import GridImage from "./GridImage";
import GridLoading from "./GridLoading";
import { ImageProps } from "@/types/GalleryTypes";
import { useState } from "react";
import ImageModal from "@/components/modal/ImageModal";
import UploadBar from "./UploadBar";

type ContentProps = {
  images: ImageProps[];
  nextCursor: string;
};

const Content: React.FC<ContentProps> = ({
  images: defaultImages,
  nextCursor: defaultNextCursor,
}) => {
  const [photoId, setPhotoId] = useState<number | null>(null);
  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);
  const [loading, setLoading] = useState(false);

  async function incrementIds(): Promise<ImageProps[]> {
    return images.map((image) => ({
      ...image,
      id: image.id + 1,
    }));
  }

  async function handleUpload() {
    setLoading(true);
    setImages(await incrementIds());
    const results = await fetch("/api/gallery", {
      method: "POST",
      body: JSON.stringify({
        nextCursor,
        length: images.length,
        offset: -1,
      }),
    }).then((r) => r.json());
    setImages((prevImages) => [...results.images, ...prevImages]);
    setNextCursor(results.nextCursor);
    setLoading(false);
  }

  async function handlePagination() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // const results = await fetch("/api/gallery", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     nextCursor,
    //     length: images.length,
    //     offset: 1,
    //   }),
    // }).then((r) => r.json());
    // setImages((prevImages) => [...prevImages, ...results.images]);
    // setNextCursor(results.nextCursor);
  }

  return (
    <main className="mx-auto sm:px-0 px-4">
      <UploadBar handleUpdate={handleUpload} />
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

      <div className="grid grid-cols-1 pt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 ">
        {loading && <GridLoading />}
        {images.map((image) => (
          <GridImage key={image.id} image={image} setPhotoId={setPhotoId} />
        ))}
      </div>
      {/* <button onClick={handlePagination}>pagination</button> */}
    </main>
  );
};

export default Content;
