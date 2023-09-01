import TimelineCard from "@/components/TimelineCard";
import React from "react";

const data = [
  {
    id: 1,
    title: "Creative Portfolio",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
    image: "georges-head8_ocz8i4",
  },
  {
    id: 2,
    title: "Minimal Single Product",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
    image: "lookout",
  },
  {
    id: 3,
    title: "Strong Together Charity",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
    image: "3511997_nuMs-R64kAgINssltPSHz8G6vjsP6j59q19E1K3WIT8_jxjthq",
  },
];

// TODO: basic information (time and location), MAP for location, timeline,

const Ceremony = () => {
  return (
    <div className="w-full">
      <div>
        {data.map((item) => (
          <div
            className="flex gap-[50px] mt-6 mb-6 min-[320px]:justify-center "
            key={item.id}
          ></div>
        ))}
      </div>

      <div className="">
        <TimelineCard
          title="test"
          time="test"
          desc="lorem waeifmawemifmk weafmafwekof"
        />
        <TimelineCard
          title="test"
          time="test"
          desc="lorem waeifmawemifmk weafmafwekof"
          reverse
        />

        <TimelineCard
          title="test"
          time="test"
          desc="lorem waeifmawemifmk weafmafwekof"
        />
      </div>
    </div>
  );
};

export default Ceremony;
