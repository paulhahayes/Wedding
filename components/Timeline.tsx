import TimelineCard from "./TimelineCard";
const Timeline = () => {

  return (
    <div className="timeline">
      <div className="roll">
        <TimelineCard
          title="Ceremony"
          time="3:30 ~ 4:45"
          desc="Come and join the Ceremony at George Head Lookout. Please bring Sunglasses as it will be an outdoor ceremony. There is plenty parking available close by."
          image="georges-head8_ocz8i4"
        />
      </div>
      <div className="roll">
        <TimelineCard
          title="Travel down to Chowder Bay"
          time="4:45 ~ 5:15 "
          desc="After the ceremony we invite guests to make there way to Chowder Bay. There will be a shuttle bus on the day but places may be limited.  Alternatively, there is a small bush walk to the bay. Laslty for those driving, there is parking close to ripples beware it is metered. "
          reverse
          image="lookout"
          />
      </div>
      <div className="roll">
        <TimelineCard
          title="Relax by the bay"
          time="5:15 ~ 6:30"
          desc="There will be a short break between the ceremony and receiption. Feel free to hang out around Chowder Bay and enjoy some drinks, sunshine and good company. Explore the Wharf and take plenty of photos! "
          image="3511997_nuMs-R64kAgINssltPSHz8G6vjsP6j59q19E1K3WIT8_jxjthq"
        />
      </div>
      <div className="roll">
        <TimelineCard
          title="Reception begins"
          time="6:30"
          desc="The offically reception begins 6:30pm."
          reverse
          image="ripples-day"
          />
        </div>
    </div>
  )
}

export default Timeline;