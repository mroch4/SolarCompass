import { zeroPrefixer } from "./zeroPrefixer";

export const degreesStringBuilder = (decimalCoordinate: number): string => {
  const degrees = Math.trunc(decimalCoordinate);
  const degreesFormatted = Math.abs(degrees);

  const minutes = (decimalCoordinate - degrees) * 60;
  const minutesFormatted = Math.trunc(minutes);
  const minutesString = zeroPrefixer(Math.abs(minutesFormatted));

  const seconds = (minutes - minutesFormatted) * 60;
  const secondsFormatted = parseFloat(seconds.toFixed(2));
  const secondsString = zeroPrefixer(Math.abs(secondsFormatted));

  return `${degreesFormatted}° ${minutesString}' ${secondsString}''`;
};
