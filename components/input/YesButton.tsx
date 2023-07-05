import React, { useEffect } from "react";
import "./Fancy.scss";
import Button from "../Button";

interface YesButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  styles?: string;
  toggle: boolean;
}

const YesButton: React.FC<YesButtonProps> = ({
  label,
  onClick,
  styles,
  toggle,
}) => {
  const createSVG = (width: any, height: any, radius: any) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    const rectangle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );

    svg.setAttributeNS(
      "http://www.w3.org/2000/svg",
      "viewBox",
      `0 0 ${width} ${height}`
    );

    rectangle.setAttribute("x", "0");
    rectangle.setAttribute("y", "0");
    rectangle.setAttribute("width", "100%");
    rectangle.setAttribute("height", "100%");
    rectangle.setAttribute("rx", `${radius}`);
    rectangle.setAttribute("ry", `${radius}`);
    rectangle.setAttribute("pathLength", "10");

    svg.appendChild(rectangle);

    return svg;
  };

  useEffect(() => {
    document.querySelectorAll(".yes").forEach((button) => {
      const style = getComputedStyle(button);

      const existingLines = button.querySelector(".lines");
      if (existingLines) {
        button.removeChild(existingLines);
      }

      const lines = document.createElement("div");
      lines.classList.add("lines");

      const groupTop = document.createElement("div");
      const groupBottom = document.createElement("div");

      const svg = createSVG(
        (button as HTMLElement).offsetWidth,
        (button as HTMLElement).offsetHeight,
        parseInt(style.borderRadius, 10)
      );

      groupTop.appendChild(svg);
      groupTop.appendChild(svg.cloneNode(true));
      groupTop.appendChild(svg.cloneNode(true));
      groupTop.appendChild(svg.cloneNode(true));

      groupBottom.appendChild(svg.cloneNode(true));
      groupBottom.appendChild(svg.cloneNode(true));
      groupBottom.appendChild(svg.cloneNode(true));
      groupBottom.appendChild(svg.cloneNode(true));

      lines.appendChild(groupTop);
      lines.appendChild(groupBottom);

      button.appendChild(lines);

      if (toggle) {
        button.classList.add("start");
      } else {
        button.classList.remove("start");
      }
    });
  }, [toggle]);

  return (
    <Button styles={` ${styles}`} outline label={label} onClick={onClick} />
  );
};

export default YesButton;
