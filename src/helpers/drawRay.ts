import degreesToRadians from "./degreesToRadians";

const drawRay = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number, rayLength: number, angle: number, color: string): void => {
  const angleTransformed = angle + degreesToRadians(270);
  const x = rayLength * Math.cos(angleTransformed) + centerX;
  const y = rayLength * Math.sin(angleTransformed) + centerY;

  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(x, y);
  ctx.strokeStyle = color;
  ctx.stroke();
};

export default drawRay;
