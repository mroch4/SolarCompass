import React, { FC } from "react";
import Labels from "../common/Labels";
import Coordinate from "./Coordinate";

interface Coords {
  selectedLocation: {
    latitude: number;
    longitude: number;
  };
}

const getLatitudeIndicator = (latitude: number): string => {
  if (latitude > 0) return " N";
  if (latitude < 0) return " S";
  return "";
};

const getLongitudeIndicator = (longitude: number): string => {
  if (longitude > 0) return " E";
  if (longitude < 0) return " W";
  return "";
};

const Coordinates: FC<Coords> = (props): JSX.Element => {
  const latitude = props.selectedLocation.latitude;
  const longitude = props.selectedLocation.longitude;

  return (
    <>
      <section>
        <Coordinate label={Labels.LATITUDE} value={latitude} indicator={getLatitudeIndicator(latitude)} />
        <Coordinate label={Labels.LONGITUDE} value={longitude} indicator={getLongitudeIndicator(longitude)} />
      </section>
    </>
  );
};

export default Coordinates;
