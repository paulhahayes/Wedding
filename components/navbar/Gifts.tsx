import { ImGift } from "react-icons/im";

interface GalleryProps {
  onClick: () => void;
}

const Registry = ({ onClick }: GalleryProps) => {
  return (
    <div
      className="text-xl items-center font-semibold  hidden md:block
      dark:text-neutral-100 cursor-pointer hover:opacity-60 
      transition-opacity"
      onClick={onClick}
    >
      <ImGift className="inline-block mr-1" size={30} />
      Registry
    </div>
  );
};

export default Registry;
