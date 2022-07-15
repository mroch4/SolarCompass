import { zeroPrefixer } from "./zeroPrefixer";

export const dayLengthStringBuilder = (dayLength: number): string => {
  const hours = dayLength / (60 * 60 * 1000);
  const hoursFormatted = Math.trunc(hours);
  const hoursString = zeroPrefixer(hoursFormatted);

  const minutes = (hours - hoursFormatted) * 60;
  const minutesFormatted = Math.trunc(minutes);
  const minutesString = zeroPrefixer(minutesFormatted);

  const seconds = (minutes - minutesFormatted) * 60;
  const secondsFormatted = Math.trunc(seconds);
  const secondsString = zeroPrefixer(secondsFormatted);

  return `${hoursString}h ${minutesString}m ${secondsString}s`;
  //return `${hoursString}:${minutesString}:${secondsString}`;
};
