import TimelineCard from "./TimelineCard";
const Timeline = () => {
  return (
    <div className="timeline">
      <div className="roll">
        <TimelineCard
          title="Ceremony"
          time="3:30pm"
          desc="Come and join the Ceremony at George Head Lookout. Please bring Sunglasses as it will be an outdoor ceremony. There is parking available close by in "
          image="georges-head8_ocz8i4"
          link="https://www.google.com/maps/place/Parking+Georges+Head+Commonwealth+Ave./@-33.835961,151.2562253,18.18z/data=!4m14!1m7!3m6!1s0x6b12ac6b6cd81807:0x171e8e88d4e8922a!2sGeorges+Head+Lookout!8m2!3d-33.8365598!4d151.2588761!16s%2Fg%2F11cmdwpbcs!3m5!1s0x6b12ac14cb5fcf31:0x8987817dff2755b4!8m2!3d-33.8363852!4d151.2567907!16s%2Fg%2F11b76txt1k?entry=ttu"
        />
      </div>
      <div className="roll">
        <TimelineCard
          title="Travel down to Chowder Bay"
          time="4:45pm"
          desc="After the ceremony we invite guests to make there way to Chowder Bay. There will be a shuttle bus on the day leaving from the carpark.  Alternatively, there is a small bush walk to the bay. Laslty for those driving, there is parking close to ripples but beware it is metered."
          reverse
          image="cannon"
        />
      </div>
      <div className="roll">
        <TimelineCard
          title="Relax by the bay"
          time="5:15pm"
          desc="There will be a short break between the ceremony and receiption. Feel free to hang out around Chowder Bay and enjoy some drinks, sunshine and good company. Explore the Wharf and take plenty of photos! "
          image="Chowder-bay_byw4be"
        />
      </div>
      <div className="roll">
        <TimelineCard
          title="Reception begins"
          time="6:30pm"
          desc="The offically reception begins 6:30pm. There will be drinks and food."
          reverse
          image="ripples-day"
        />
      </div>
    </div>
  );
};

export default Timeline;
