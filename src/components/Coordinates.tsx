import React, { FC } from "react";

import Coordinate from "./partials/_Coordinate";
import ISectionProps from "./interfaces/ISectionProps";
import getLatitudeIndicator from "../helpers/getLatitudeIndicator";
import getLongitudeIndicator from "../helpers/getLongitudeIndicator";
import useAppContext from "../hooks/useAppContext";

const Coordinates: FC = (): JSX.Element => {
  const { coords, labels } = useAppContext();
  const { latitude, longitude } = coords;

  const latitudeProps: ISectionProps = {
    label: labels.COORDS_LATITUDE,
    value: latitude,
    unit: getLatitudeIndicator(latitude),
  };

  const longitudeProps: ISectionProps = {
    label: labels.COORDS_LONGITUDE,
    value: longitude,
    unit: getLongitudeIndicator(longitude),
  };

  return (
    <>
      <Coordinate {...latitudeProps} />
      <Coordinate {...longitudeProps} />
    </>
  );
};

export default Coordinates;
