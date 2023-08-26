import { HiClock, HiLocationMarker } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface GlassCardHeroProps {
  title: string;
  desc: string;
  time: string;
  address: string;
}

const GlassCardHero: React.FC<GlassCardHeroProps> = ({
  title,
  desc,
  time,
  address,
}) => {
  const handleClick = () => {
    window.open(address, "_blank");
  };

  return (
    <div className="h-full flex flex-col w-screen shadow-lg bg-white backdrop-filter backdrop-blur-lg bg-opacity-10">
      {/* Text and desc */}
      <div className="flex-1 flex-col bg-clip-padding">
        <div className="pt-2 text-center font-bold text-3xl text-secondary">
          {title}
        </div>
        <div className="p-2 text-lg text-start hover:cursor-pointer">
          <HiClock size={26} className="inline-block pt-1" /> {time}
        </div>
        <div
          className="p-2 text-lg text-start hover:cursor-pointer hover:bg-neutral-100/20"
          onClick={handleClick}
        >
          <HiLocationMarker size={28} className="inline-block py-1" /> {desc}
        </div>
      </div>
    </div>
  );
};

export default GlassCardHero;
