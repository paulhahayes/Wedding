import { TfiGallery } from "react-icons/tfi";

interface GalleryProps {
  onClick: () => void;
}

const Gallery = ({ onClick }: GalleryProps) => {
  return (
    <div
      className="text-xl  font-semibold items-center hidden md:block
      dark:text-neutral-100 cursor-pointer hover:opacity-60 
      transition-opacity"
      onClick={onClick}
    >
      <TfiGallery className="inline-block mr-1" size={32} />
      Gallery
    </div>
  );
};

export default Gallery;
