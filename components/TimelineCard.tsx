type TimelineCardProps = {
  title: string;
  time: string;
  desc: string;
  reverse?: boolean;
};

const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  time,
  desc,
  reverse,
}) => {
  return (
    <div
      className={`relative text-start w-[50%] ${reverse ? "left-0 pr-12" : "left-[50%]  pl-12"}
    `}
    >
      <div
      className={`absolute w-6 h-6 z-20 top-[32px] rounded-full bg-white ${reverse ? "right-[-15px]" : "left-[-9px]"}
    `}
    ></div>
              
      <div className="py-[10px] px-[50px] relative rounded-xl border backdrop-blur-3xl bg-slate-700/30 ">
        <div className="py-[20px] px-[30px] relative rounded text-[18px] bg-neutral-100/10 ">
          <h2 className="text-lime text-cetext-[24px] font-bold">{title}</h2>
          <small className="text-[16px] my-4 inline-block">{time}</small>
          <p className="">{desc}</p>

        </div>
        <span className={`h-0 w-0 absolute top-[28px] z-20 ${reverse ? "left-arrow" : "right-arrow"}`}></span>
      </div>
    </div>
  );
};

export default TimelineCard;
