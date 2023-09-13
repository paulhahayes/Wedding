import useTranslate from "@/hooks/useTranslate";
import { TfiGallery } from "react-icons/tfi";

interface GalleryProps {
  onClick: () => void;
}

const Gallery = ({ onClick }: GalleryProps) => {
  const { lang } = useTranslate();

  return (
    <div
      className="text-xl  font-semibold items-center hidden sm:block
       cursor-pointer hover:opacity-60 
      transition-opacity"
      onClick={onClick}
    >
      <TfiGallery className="inline-block mr-1" size={32} />
      {lang === "en" ? "Gallery" : "Galería"}
    </div>
  );
};

export default Gallery;
