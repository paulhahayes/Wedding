"use client";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import useKeypress from "react-use-keypress";
import type { ImageProps } from "@/types/GalleryTypes";
import SharedModal from "./SharedModal";

export default function ImageModal({
  images,
  onClose,
  photoId,
  setPhotoId,
}: {
  images: ImageProps[];
  onClose?: () => void;
  photoId: number | null;
  setPhotoId: (photoId: number | null) => void;
}) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  let index = Number(photoId);
  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);
  function handleClose() {
    onClose?.();
  }

  function changePhotoId(newVal: number) {
    setPhotoId(newVal);
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurIndex(newVal);
  }

  useKeypress("ArrowRight", () => {
    if (index + 1 < images.length) {
      changePhotoId(index + 1);
    }
  });

  useKeypress("ArrowLeft", () => {
    if (index > 0) {
      changePhotoId(index - 1);
    }
  });

  const handleBackdropClick = (event: any) => {
    if (event.target === overlayRef.current) {
      handleClose();
    }
  };

  return (
    <Dialog
      static
      open={true}
      onClose={() => {}}
      initialFocus={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <Dialog.Overlay
        onClick={handleBackdropClick}
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
      />
    </Dialog>
  );
}
