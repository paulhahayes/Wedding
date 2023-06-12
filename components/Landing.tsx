"use client";
import { useWindowScroll } from "react-use";
import Plx from "react-plx";

const Landing = () => {
  const { y } = useWindowScroll();
  const isFixed = y >= 0 && y <= 700;
  let topPos = isFixed ? 0 : y - 700;

  if (y > 700) {
    topPos = 700; // or any other position you want to set
  }

  const styles = {
    width: "100vw",
    height: "100vh",
  };

  return (
    <section className="w-full overflow-hidden">
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
          position: isFixed ? "fixed" : "absolute",
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
          position: isFixed ? "fixed" : "absolute",
          top: topPos,
          left: 0,
          zIndex: 0,
        }}
      >
        <img src="beach.jpg" alt="background" style={styles} />
      </Plx>
    </section>
  );
};
export default Landing;
