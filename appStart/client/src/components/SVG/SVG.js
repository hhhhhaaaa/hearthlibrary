import React from "react";
import audio from "./svg-loaders/audio.svg";
import balltriangle from "./svg-loaders/ball-triangle.svg";
import bars from "./svg-loaders/bars.svg";
import circles from "./svg-loaders/circles.svg";
import grid from "./svg-loaders/grid.svg";
import hearts from "./svg-loaders/hearts.svg";
import oval from "./svg-loaders/oval.svg";
import puff from "./svg-loaders/puff.svg";
import rings from "./svg-loaders/rings.svg";
import spinningcircles from "./svg-loaders/spinning-circles.svg";
import tailspin from "./svg-loaders/tail-spin.svg";
import threedots from "./svg-loaders/three-dots.svg";
import "./svg.css";

const loadersArray = [
  audio,
  balltriangle,
  bars,
  circles,
  grid,
  hearts,
  oval,
  puff,
  rings,
  spinningcircles,
  tailspin,
  threedots
];

const randomLoader =
  loadersArray[Math.floor(Math.random() * loadersArray.length)];

/**
 *
 */
export default function SVG() {
  return (
    <img
      className="svgLoader"
      src={randomLoader}
      alt="An Animated Loading Bar"
    />
  );
}
