"use client";
//TODO pagination + loaders
import GridImage from "./GridImage";
import GridLoading from "./GridLoading";
import { ImageProps } from "@/types/GalleryTypes";
import { useEffect, useState } from "react";
import ImageModal from "@/components/modal/ImageModal";
import UploadBar from "./UploadBar";
import LoadingGrid from "./LoadingGrid";

const Content = ({}) => {
  const [photoId, setPhotoId] = useState<number | null>(null);
  const [images, setImages] = useState<ImageProps[]>([]);
  const [nextCursor, setNextCursor] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);
  const [loadingGrid, setLoadingGrid] = useState(false);
  const [loadingPagination, setLoadingPagination] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoadingGrid(true);
      const response = await fetch("/api/gallery", {
        method: "POST",
        body: JSON.stringify({
          nextCursor: "",
          length: images.length,
          offset: 1,
        }),
      });
      const results = await response.json();
      setImages((prevImages) => [...prevImages, ...results.images]);
      setNextCursor(results.nextCursor);
      setLoadingGrid(false);
    }
    fetchData();
  }, []);

  async function incrementIds(images: ImageProps[]): Promise<ImageProps[]> {
    return images.map((image) => ({
      ...image,
      id: image.id + 1,
    }));
  }

  async function handleUpload() {
    setLoadingImage(true);
    setImages(await incrementIds(images));
    const results = await fetch("/api/gallery", {
      method: "POST",
      body: JSON.stringify({
        nextCursor: "",
        length: images.length,
        offset: -1,
      }),
    }).then((r) => r.json());
    setImages((prevImages) => [...results.images, ...prevImages]);
    setLoadingImage(false);
  }

  async function handlePagination() {
    setLoadingPagination(true);
    const results = await fetch("/api/gallery", {
      method: "POST",
      body: JSON.stringify({
        nextCursor,
        length: images.length,
        offset: 1,
      }),
    }).then((r) => r.json());
    setImages((prevImages) => [...prevImages, ...results.images]);
    setNextCursor(results.nextCursor);
    setLoadingPagination(false);
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
      {loadingGrid && <LoadingGrid />}
      <div className="grid grid-cols-1 pt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 ">
        {loadingPagination && <GridLoading />}
        {loadingPagination && <GridLoading />}
        {loadingPagination && <GridLoading />}
        {loadingPagination && <GridLoading />}
        {loadingPagination && <GridLoading />}
        {loadingImage && <GridLoading />}
        {images.map((image) => (
          <GridImage key={image.id} image={image} setPhotoId={setPhotoId} />
        ))}
      </div>

      {/* <button onClick={handlePagination}>pagination</button> */}
    </main>
  );
};

export default Content;
