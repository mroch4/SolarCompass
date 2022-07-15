const radiansToDegrees = (rad: number): number => {
  return (rad * 180) / Math.PI;
};

const degreesToRadians = (degrees: number): number => {
  return (degrees * Math.PI) / 180;
};

export { radiansToDegrees, degreesToRadians };
