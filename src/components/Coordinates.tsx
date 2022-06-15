import React, { FC } from "react";
import Labels from "../common/Labels";
import { CoordinatesSection } from "../interfaces/CoordinatesSection";
import Coordinate from "./Coordinate";

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

const Coordinates: FC<CoordinatesSection> = (props): JSX.Element => {
  const { latitude, longitude } = props.coordinates;

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
