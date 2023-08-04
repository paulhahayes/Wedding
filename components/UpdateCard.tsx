interface UpdateCardProps {
  id: string;
  title: string;
  desc: string;
  date: string;
}

const UpdateCard: React.FC<UpdateCardProps> = ({ title, desc, date }) => {
  return (
    <div className="w-full border shadow-lg p-6 py-8 my-2 flex flex-col items-start backdrop-blur-3xl rounded bg-slate-700/30">
      <div className="flex w-full justify-between">
        <div className="text-lime text-3xl">{title}</div>
        <span className="text-lime text-lg">{date}</span>
      </div>
      <div className="w-full text-start text-md flex items-start">{desc}</div>
    </div>
  );
};

export default UpdateCard;
