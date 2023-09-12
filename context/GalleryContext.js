"use client";
import React, { createContext, useContext, useState } from "react";

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [nextCursor, setNextCursor] = useState("");

  const handleMore = async (nextCursor) => {
    const results = await fetch("/api/gallery", {
      method: "POST",
      body: JSON.stringify({
        nextCursor,
      }),
    }).then((r) => r.json());
    setImages(results.images);
    setNextCursor(results.nextCursor);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const updateNextCursor = (newNextCursor) => {
    setNextCursor(newNextCursor);
  };

  return (
    <GalleryContext.Provider
      value={{
        images,
        nextCursor,
        handleMore,
        updateImages,
        updateNextCursor,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => {
  return useContext(GalleryContext);
};
