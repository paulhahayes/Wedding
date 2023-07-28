interface GlassCardProps {
  title: string;
  desc: string;
  image?: string; // really this should be the CldImage type
}

const GlassCard: React.FC<GlassCardProps> = ({ title, desc, image }) => {
  return (
    <div
      className="w-auto h-full flex flex-1 flex-col bg-clip-padding 
    order-white border-4 rounded-2xl  shadow-lg   bg-white backdrop-filter backdrop-blur-lg bg-opacity-10  "
    >
      <div className=" p-4 font-semibold text-[32px] border-b-2 text-white">
        {title}
      </div>
      <div className="p-4 text-[20px]">{desc}</div>
    </div>
  );
};

export default GlassCard;
