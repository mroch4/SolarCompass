const getLatitudeIndicator = (latitude: number): string => {
  if (latitude > 0) return " N";
  if (latitude < 0) return " S";
  return "";
};

export default getLatitudeIndicator;
