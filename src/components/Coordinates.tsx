import React, { FC } from "react";

import Coordinate from "./partials/_Coordinate";
import { ISectionProps } from "../interfaces/props/ISectionProps";
import { getLatitudeIndicator } from "../helpers/getLatitudeIndicator";
import { getLongitudeIndicator } from "../helpers/getLongitudeIndicator";
import { useAppContext } from "../hooks/useAppContext";

const Coordinates: FC = (): JSX.Element => {
  const { coords, labels } = useAppContext();
  const { latitude, longitude } = coords;

  const latitudeProps: ISectionProps = {
    label: labels.LATITUDE,
    value: latitude,
    unit: getLatitudeIndicator(latitude),
  };

  const longitudeProps: ISectionProps = {
    label: labels.LONGITUDE,
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
