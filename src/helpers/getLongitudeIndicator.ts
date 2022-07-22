const getLongitudeIndicator = (longitude: number): string => {
  if (longitude > 0) return " E";
  if (longitude < 0) return " W";
  return "";
};

export default getLongitudeIndicator;
