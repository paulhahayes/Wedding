"use client";
import { useWindowScroll } from "react-use";
import Plx from "react-plx";

const Landing = () => {
  const { y } = useWindowScroll();
  const isFixed = y >= 0 && y <= 700;
  let topPos = isFixed ? 0 : y - 700;

  if (y > 700) {
    topPos = 0; // Reset top position to 0 once y is more than 700
  }

  const styles = {
    width: "100vw",
    height: "100vh",
  };

  return (
    <div className="h-[2500px]">
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "easeIn",
            properties: [
              {
                startValue: 1,
                endValue: 1.7,
                property: "scale",
              },
              {
                startValue: 0.9,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: y > 700 ? "fixed" : isFixed ? "fixed" : "absolute", // Keep position fixed when y > 700
          left: 0,
          top: topPos,
          zIndex: 1,
        }}
      >
        <img src="resize.png" alt="foreground" style={styles} />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            properties: [
              {
                startValue: 1,
                endValue: 1.2,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: y > 700 ? "fixed" : isFixed ? "fixed" : "absolute", // Keep position fixed when y > 700
          top: topPos,
          left: 0,
          zIndex: 0,
        }}
      >
        <img src="beach.jpg" alt="background" style={styles} />
      </Plx>
    </div>
  );
};
export default Landing;
