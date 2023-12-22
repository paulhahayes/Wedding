"use client";
//TODO pagination
import GridImage from "./GridImage";
import GalllerySidebar from "./GallerySidebar";
// import GridLoading from "./GridLoading";
import { ImageProps } from "@/types/GalleryTypes";
import { useState, useRef, useCallback, useEffect } from "react";
import ImageModal from "@/components/modal/ImageModal";
import UploadBar from "./UploadBar";
import LoadingGrid from "./LoadingGrid";
import { useMutation } from "@tanstack/react-query";
import { loadImagePage } from "@/lib/api";
import Thankyou from "./Thankyou";

// Variables
const tabs = [
  "Ceremony",
  "Post Ceremony",
  "Bride & Groom",
  "Reception",
  "Party",
  "Camera Rolls",
];

const maxImages: { [key: string]: number } = {
  Ceremony: 147,
  "Post Ceremony": 82,
  "Bride & Groom": 71,
  Reception: 329,
  Party: 174,
  "Camera Rolls": 100,
};

const Content = () => {
  const [photoId, setPhotoId] = useState<number | null>(null);
  const [images, setImages] = useState<{
    [key: string]: ImageProps[];
  }>(tabs.reduce((acc, tab) => ({ ...acc, [tab]: [] }), {}));
  const [cursor, setCursor] = useState<{
    [key: string]: string;
  }>(tabs.reduce((acc, tab) => ({ ...acc, [tab]: "" }), {}));

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const getImages = useMutation<any, any, any>({
    mutationFn: loadImagePage,
    onSuccess: (data: any) => {
      const requestTab = data.tab;
      setImages((prevImages) => ({
        ...prevImages,
        [requestTab]: [...prevImages[requestTab], ...data.images],
      }));
      setCursor((prevCursors) => ({
        ...prevCursors,
        [requestTab]: data.nextCursor,
      }));
    },
  });

  // inital load
  const isLoading = getImages.isLoading;
  useEffect(() => {
    getImages.mutate({
      nextCursor: cursor[activeTab],
      length: images[activeTab].length,
      folder: activeTab,
    });
  }, [activeTab]);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastImageRef = useCallback(
    (node: any) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (images[activeTab].length >= maxImages[activeTab]) return;

          getImages.mutate({
            nextCursor: cursor[activeTab],
            length: images[activeTab].length,
            folder: activeTab,
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  const handleSelectTab = (tab: string) => {
    setActiveTab(tab);
  };

  // async function incrementIds(images: ImageProps[]): Promise<ImageProps[]> {
  //   return images.map((image) => ({
  //     ...image,
  //     id: image.id + 1,
  //   }));
  // }

  // async function handleUpload() {
  //   setLoadingImage(true);
  //   setImages(await incrementIds(images));
  //   setTimeout(async () => {
  //     const results = await fetch(`/api/${activeTab}`, {
  //       method: "POST",
  //       body: JSON.stringify({
  //         nextCursor: "",
  //         length: images.length,
  //         offset: -1,
  //       }),
  //     }).then((r) => r.json());
  //     setImages((prevImages) => [...results.images, ...prevImages]);
  //     setLoadingImage(false);
  //   }, 3000);
  // }

  return (
    <main className="mx-auto sm:px-0 px-4 pb-4">
      <GalllerySidebar
        tabs={tabs}
        activeTab={activeTab}
        handleSelectTab={handleSelectTab}
      />
      {/* <UploadBar handleUpdate={handleUpload} /> */}

      {photoId != null && (
        <ImageModal
          images={images[activeTab]}
          onClose={() => {
            setPhotoId(null);
          }}
          setPhotoId={(newPhotoId: number | null) => setPhotoId(newPhotoId)}
          photoId={photoId}
        />
      )}

      {isLoading && <LoadingGrid />}
      <div className="grid grid-cols-1 pt-16 sm:pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 ">
        {images[activeTab].map((image, index) => {
          const key = image.id ? `image-${image.id}` : `image-temp-${index}`;
          return (
            <GridImage
              key={key}
              image={image}
              setPhotoId={setPhotoId}
              ref={index === images[activeTab].length - 1 ? lastImageRef : null}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Content;
