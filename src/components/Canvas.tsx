import React, { FC, useEffect, useRef } from "react";

import ICanvasProps from "./interfaces/ICanvasProps";
import drawRay from "../helpers/drawRay";
import drawSunIcon from "../helpers/drawSunIcon";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Canvas: FC<ICanvasProps> = (props): JSX.Element => {
  const { currentAzimuth, sunRiseAzimuth, noonAzimuth, sunSetAzimuth } = props;

  const ref = useRef<HTMLCanvasElement>(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const canvas = ref.current;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;

    const context = canvas.getContext("2d");

    if (canvas) {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      drawRay(context, centerX, centerY, width, currentAzimuth, "orange");
      drawRay(context, centerX, centerY, width, currentAzimuth + Math.PI, "black");
      drawRay(context, centerX, centerY, width, sunRiseAzimuth, "green");
      drawRay(context, centerX, centerY, width, sunSetAzimuth, "red");
      drawSunIcon(context, centerX, centerY);
    }
  }, [currentAzimuth, noonAzimuth, sunRiseAzimuth, sunSetAzimuth, width]);

  const canvasProps = {
    ref: ref,
    width: width,
    height: width,
  };

  return <canvas {...canvasProps}></canvas>;
};

export default Canvas;
