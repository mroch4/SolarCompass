export const zeroPrefixer = (value: number): string => {
  if (value < 10) return `0${value}`;
  return `${value}`;
};
