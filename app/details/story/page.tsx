"use client";
import React from "react";
import GlassCard from "@/components/GlassCard";
import Image from "next/image";
import banner from "@/public/resize-bannerpng.png";
import useTranslate from "@/hooks/useTranslate";
const data = [
  {
    id: 1,
    title: "Love at first pint",
    titleSpanish: "Amor a primera vista",
    desc: "Welcome to our love story! It all began on a Saturday night at Sidebar in Central. Paul challenged Xime to a game of pool and hit it off straight away! At the time, the netflix show Narcos was at the height of its popularity which caused a few bad jokes. Xime took it in her stride and agreed to go on a date the following day. The date was at the romantic setting of a park cricket game.",
    image: "sidebar",
    spanish:
      "¡Bienvenidos a nuestra historia de amor! Todo comenzó un sábado por la noche en Sidebar en Central. ¡Paul retó a Xime a un juego de billar y se llevaron bien de inmediato! En ese momento, el programa de Netflix Narcos estaba en el apogeo de su popularidad, lo que provocó algunos chistes malos. Xime se lo tomó con calma y aceptó tener una cita al día siguiente. La cita fue en el ambiente romántico de un juego de cricket en el parque.",
  },
  {
    id: 2,
    title: "Dating life",
    titleSpanish: "Vida de citas",
    desc: "We share a passion for travel, movies and sport. We have been on many adventures together, including trips to Thailand, Vietnam, Malaysia, Singapore and more. Its our goal to visit Tasmania once a year to reconnect with nature and enjoy the beautiful scenery. Our taste in films is quite different, with Xime usually opting for White Chicks or Rush Hour every time. Paul has learnt the way to Xime's heart is through 'yo mama' jokes.  Likewise, Xime has learnt the secret to Paul's heart is cricket.",
    image: "cricket",
    spanish:
      "Compartimos la pasión por los viajes, el cine y el deporte. Hemos vivido muchas aventuras juntos, incluidos viajes a Tailandia, Vietnam, Malasia, Singapur y más. Nuestro objetivo es visitar Tasmania una vez al año para reconectarnos con la naturaleza y disfrutar del hermoso paisaje. Nuestros gustos cinematográficos son bastante diferentes, Xime suele optar cada vez por White Chicks o Rush Hour. Paul ha aprendido que el camino al corazón de Xime es a través de chistes de 'yo mama'. Asimismo, Xime ha aprendido que el secreto del corazón de Paul es el cricket.",
  },
  {
    id: 3,
    title: "Colombia Trip",
    titleSpanish: "Viaje a Colombia",
    desc: "In 2019 we went on a trip to Colombia. We visited beautiful places like Cartagena, Armenia and the capital Bogota. We had an amazing time and it was a great opportunity to meet Xime's family and friends. We also got to see the beautiful town of Melgar that Xime grew up in.",
    image: "colombia_qwti3t",
    spanish:
      "En 2019 nos fuimos de viaje a Colombia. Visitamos lugares hermosos como Cartagena, Armenia y la capital Bogotá. Nos lo pasamos genial y fue una gran oportunidad para conocer a la familia y amigos de Xime. También pudimos ver el hermoso pueblo de Melgar donde creció Xime.",
  },
];

const Page = () => {
  const { lang } = useTranslate();
  return (
    <div className="flex flex-col justify-center items-center ">
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
              title={lang === "en" ? item.title : item.titleSpanish}
              desc={lang === "en" ? item.desc : item.spanish}
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

export default Page;
