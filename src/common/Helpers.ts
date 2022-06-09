import { SETTINGS } from "./Settings";

export const degreesStringBuilder = (decimalCoordinate: number): string => {
  const degrees: number = Math.trunc(decimalCoordinate);
  const minutes: number = Math.trunc((decimalCoordinate - degrees) * 60);
  const seconds: number = ((decimalCoordinate - degrees) * 60 - minutes) * 60;
  return `${Math.abs(degrees)}° ${zeroPrefixer(Math.abs(minutes))}' ${zeroPrefixer(Math.abs(+seconds.toFixed(SETTINGS.DECIMAL_PRECISION)))}''`;
};

const zeroPrefixer = (value: number): string => {
  if (value < 10) return `0${value}`;
  return `${value}`;
};

export const radiansToDegrees = (rad: number): number => {
  return (rad * 180) / Math.PI;
};
