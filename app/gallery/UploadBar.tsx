"use client";
import { Button } from "@material-tailwind/react";
import { useCallback } from "react";
import UploadModal from "@/components/modal/UploadModal";
import useImageUpload from "@/hooks/useImageUpload";
import { AiFillPlusCircle } from "react-icons/ai";
import useTranslate from "@/hooks/useTranslate";
type UploadBarProps = {
  handleUpdate: () => void;
};
const UploadBar: React.FC<UploadBarProps> = ({ handleUpdate }) => {
  const { lang } = useTranslate();
  const imageModal = useImageUpload();

  const handleClick = useCallback(() => {
    imageModal.isOpen ? imageModal.onClose() : imageModal.onOpen();
  }, [imageModal]);

  const handleClose = useCallback(() => {
    imageModal.onClose();
  }, [imageModal]);

  return (
    <div className="flex flex-row justify-between items-center border-b pt-12 sm:pt-0">
      <div className="text-lime text-3xl text-center hidden sm:block ">
        {lang === "en" ? "Upload an image" : "Subir una imagen?"}
      </div>

      <Button
        className="backdrop-blur-3xl bg-slate-700/60 hover:hover:bg-neutral-100/20 md:py-2 py-1 text-white md:text-lg text-xs my-2 border border-white"
        onClick={handleClick}
      >
        <AiFillPlusCircle className="inline-block -translate-y-[2px] mr-2 " />
        {lang === "en" ? "Add photo" : "Añadir foto"}
      </Button>

      <UploadModal
        isOpen={imageModal.isOpen}
        onClose={handleClose}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default UploadBar;
