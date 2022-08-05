const drawSunIcon = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number) => {
  const sunIcon = new Image();
  sunIcon.src = "./../public/sun.png";
  sunIcon.onload = () => {
    ctx.drawImage(sunIcon, centerX, centerY);
  };
};

export default drawSunIcon;
