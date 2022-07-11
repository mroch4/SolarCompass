import React, { FC, useEffect, useRef } from "react";

import useWindowDimensions from "../hooks/useWindowDimensions";

const Canvas: FC = (): JSX.Element => {
  const ref = useRef(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const canvas: any = ref.current;
    const context = canvas.getContext("2d");
    if (canvas) {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const centerX = canvasWidth / 2;
      const centerY = canvasHeight / 2;
    }
  }, []);

  const canvasProps = {
    ref: ref,
    width: width,
    height: width,
  };

  return <canvas {...canvasProps}></canvas>;
};

export default Canvas;
