"use client";
import { Button } from "@material-tailwind/react";
import { useCallback } from "react";
import UploadModal from "@/components/modal/UploadModal";
import useImageUpload from "@/hooks/useImageUpload";
import { AiFillPlusCircle } from "react-icons/ai";

const UploadBar = () => {
  const imageModal = useImageUpload();

  const handleClick = useCallback(() => {
    imageModal.isOpen ? imageModal.onClose() : imageModal.onOpen();
  }, [imageModal]);

  const handleClose = useCallback(() => {
    imageModal.onClose();
  }, [imageModal]);

  return (
    <div className="flex flex-row justify-between border-b pb-4 p-4 sm:px-0">
      <div className="text-lime text-3xl text-center hidden sm:block ">
        Upload an image
      </div>
      <div className="w-40">
        <Button
          className="backdrop-blur-3xl bg-slate-700/60 hover:hover:bg-neutral-100/20 py-2 px-4 text-white mt-2 border border-white"
          onClick={handleClick}
        >
          <AiFillPlusCircle className="inline-block -translate-y-[2px] mr-2 " />
          Add photo
        </Button>
      </div>
      <UploadModal isOpen={imageModal.isOpen} onClose={handleClose} />
    </div>
  );
};

export default UploadBar;
