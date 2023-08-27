"use client";
import { useWindowScroll } from "react-use";
import Image from "next/image";
import Plx from "react-plx";
import foreground from "@/public/resize.png";
import background from "@/public/beach.jpg";

const Landing = () => {
  const { y } = useWindowScroll();
  const isFixed = y >= 0 && y <= 800;
  let topPos = isFixed ? 0 : y - 800;

  if (y > 800) {
    topPos = 0;
  }

  const styles = {
    width: "100vw",
    height: "100vh",
  };

  return (
    <div className="h-[1200px]">
      <Plx
        className="h-full"
        parallaxData={[
          {
            start: 0,
            end: 800,
            easing: "easeIn",
            properties: [
              {
                startValue: 1,
                endValue: 1.7,
                property: "scale",
              },
              {
                startValue: 0.85,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: y > 700 ? "fixed" : isFixed ? "fixed" : "absolute",
          left: 0,
          top: topPos,
          zIndex: 1,
        }}
      >
        <Image src={foreground} alt="foreground" style={styles} />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.3,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: y > 800 ? "fixed" : isFixed ? "fixed" : "absolute",
          top: topPos,
          left: 0,
          zIndex: 0,
        }}
      >
        <Image src={background} alt="background" style={styles} />
      </Plx>
    </div>
  );
};
export default Landing;
