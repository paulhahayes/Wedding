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
      className={`relative text-start w-[50%] ${reverse ? " " : "left-[50%] "}
    `}
    >
      <div className="py-[10px] px-[50px] relative border backdrop-blur-3xl  bg-slate-700/30">
        <div
          className={`rounded-full absolute  z-10 bg-white h-12 w-12
          ${reverse ? "right-[-20px]" : "left-[-20px]"}
          `}
        ></div>

        <div className="py-[20px] px-[30px] relative rounded text-[15px] bg-neutral-100/10 ">
          <h2 className="text-lime">{title}</h2>
          <small>{time}</small>
          <p className="">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
