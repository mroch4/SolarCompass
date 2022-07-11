import React, { FC } from "react";

import Coordinate from "./partials/_Coordinate";
import { ISectionProps } from "../interfaces/props/ISectionProps";
import Labels from "../common/Labels";
import { useAppContext } from "./Context";

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

const Coordinates: FC = (): JSX.Element => {
  const { coords } = useAppContext();
  const { latitude, longitude } = coords;

  const latitudeProps: ISectionProps = {
    label: Labels.LATITUDE,
    value: latitude,
    unit: getLatitudeIndicator(latitude),
  };

  const longitudeProps: ISectionProps = {
    label: Labels.LONGITUDE,
    value: longitude,
    unit: getLongitudeIndicator(longitude),
  };

  return (
    <section>
      <Coordinate {...latitudeProps} />
      <Coordinate {...longitudeProps} />
    </section>
  );
};

export default Coordinates;
