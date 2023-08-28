import React from "react";
import GlassCard from "@/components/GlassCard";
import Image from "next/image";
import banner from "@/public/resize-bannerpng.png";
const data = [
  {
    id: 1,
    title: "Love at first pint",
    desc: "Welcome to our love story! It all began on a Saturday night at Sidebar in Central. Paul challenged Xime to a game of pool and we hit it off straight away! At the time, the netflix show Narcos was at the height of its popularity caused a few bad jokes. Xime took it in her stride and agreed to go on a date the following day, at the romanic setting of a park cricket game.",
    image: "sidebar",
  },
  {
    id: 2,
    title: "Dating life",
    desc: "We share a passion for travel, movies and sport. We have been on many adventures together, including trips to Thailand, Vietnam, Malaysia, Singapore. Its our goal to visit Tasmania once a year to reconnect with nature and enjoy the beautiful scenery. Our taste in films is quite different, With Ximena usually opting for White Chicks or Rush Hour every time, Paul has learnt to the way to her heart is 'yo mana' jokes.  Likewise, Ximena has been practically forced to learn all the details of Test cricket.",
    image: "cricket",
  },
  {
    id: 3,
    title: "Colombia Trip",
    desc: "In 2019 we went on a trip to Colombia. We visited the beautiful cities of Cartagena, the coffee region of Armenia and the capital Bogota. We had an amazing time and it was a great opportunity to meet Xime's family and friends. We also got to see the beautiful town of Melgar that Xime grew up in.",
    image: "fill1",
  },
];

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      {/* Banner */}

      <Image
        className="object-cover border-2 shadow-xl rounded sm:h-auto h-[275px] sm:w-[80%] w-[95%] sm:mb-12 mb-4 "
        sizes="100vw"
        src={banner}
        quality={100}
        alt="us"
      />

      <div className="w-full">
        {/* Cards */}
        {data.map((item) => (
          <div
            className="gap-[50px] mb-6 min-[320px]:justify-center"
            key={item.id}
          >
            <GlassCard
              title={item.title}
              desc={item.desc}
              image={item.image}
              reverse={item.id % 2 == 0}
              background={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
