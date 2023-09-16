import TimelineCard from "./TimelineCard";
import useTranslate from "@/hooks/useTranslate";
const Timeline = () => {
  const { lang } = useTranslate();
  return (
    <div className="timeline">
      <div className="roll">
        <TimelineCard
          title={lang === "en" ? "Ceremony" : " Ceremonia"}
          time="3:30 pm"
          desc={
            lang === "en"
              ? "Come and join the ceremony at Georges Head Lookout. Please bring sunglasses as it will be an outdoor ceremony. There is parking available close by in "
              : "Ven y únete a la ceremonia en Georges Head Lookout. Por favor traiga gafas de sol ya que será una ceremonia al aire libre. Hay aparcamiento disponible cerca en"
          }
          image="georges-head8_ocz8i4"
          link="https://www.google.com/maps/place/Parking+Georges+Head+Commonwealth+Ave./@-33.835961,151.2562253,18.18z/data=!4m14!1m7!3m6!1s0x6b12ac6b6cd81807:0x171e8e88d4e8922a!2sGeorges+Head+Lookout!8m2!3d-33.8365598!4d151.2588761!16s%2Fg%2F11cmdwpbcs!3m5!1s0x6b12ac14cb5fcf31:0x8987817dff2755b4!8m2!3d-33.8363852!4d151.2567907!16s%2Fg%2F11b76txt1k?entry=ttu"
        />
      </div>
      <div className="roll">
        <TimelineCard
          title={
            lang === "en"
              ? "Travel down to Chowder Bay"
              : "Viaja hasta Chowder Bay"
          }
          time=""
          desc={
            lang === "en"
              ? "After the ceremony we invite guests to make their way to Chowder Bay. There will be a shuttle van on the day leaving from the carpark.  For intrepid walkers there is a small bush walk down to the bay. Lastly, for those driving, there is metered parking close to Ripples."
              : "Después de la ceremonia invitamos a los invitados a dirigirse a Chowder Bay. Habrá un autobús lanzadera ese día que saldrá desde el aparcamiento. Alternativamente, hay un pequeño paseo por los arbustos hasta la bahía. Por último, para quienes conducen, hay estacionamiento cerca de las ondulaciones, pero tengan cuidado porque tiene taxímetro."
          }
          reverse
          image="cannon"
        />
      </div>
      <div className="roll">
        <TimelineCard
          title={
            lang === "en" ? "Relax by the bay" : "Relájate junto a la bahía"
          }
          time=""
          desc={
            lang === "en"
              ? "There will be a short break between the ceremony and reception. Explore the wharf and take plenty of photos!"
              : "Habrá un breve descanso entre la ceremonia y la recepción. Siéntete libre de pasar el rato en Chowder Bay y disfrutar de unas bebidas, el sol y la buena compañía. ¡Explora el muelle y toma muchas fotos!"
          }
          image="Chowder-bay_byw4be"
        />
      </div>
      <div className="roll">
        <TimelineCard
          title={lang === "en" ? "Reception begins" : "Comienza la recepción"}
          time="6:30 pm"
          desc={
            lang === "en"
              ? "The official reception begins at 6:30 pm. There will be food and drinks."
              : "La recepción oficial comienza a las 6:30 pm. Habrá comida ybebidas."
          }
          reverse
          image="ripples-day"
        />
      </div>
    </div>
  );
};

export default Timeline;
