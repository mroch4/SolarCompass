import React, { FC } from "react";
import { SETTINGS } from "../common/Settings";

interface CoordinatesSection {
  label: string;
  value: number;
  indicator: string;
}

const degreesStringBuilder = (decimalCoordinate: number): string => {
  const degrees: number = Math.trunc(decimalCoordinate);
  const minutes: number = Math.trunc((decimalCoordinate - degrees) * 60);
  const seconds: number = ((decimalCoordinate - degrees) * 60 - minutes) * 60;
  return `${Math.abs(degrees)}° ${zeroPrefixer(Math.abs(minutes))}' ${zeroPrefixer(Math.abs(+seconds.toFixed(SETTINGS.DECIMAL_PRECISION)))}''`;
};

const zeroPrefixer = (value: number): string => {
  if (value < 10) return `0${value}`;
  return `${value}`;
};

const Coordinate: FC<CoordinatesSection> = (props): JSX.Element => {
  const { label, value, indicator } = props;

  return (
    <>
      <div className="section">
        <div className="label">{label}</div>
        <div className="d-flex flex-column">
          <span className="d-flex justify-content-end">
            {new Intl.NumberFormat(SETTINGS.INTL, {
              minimumFractionDigits: SETTINGS.RADIANS_PRECISION,
            }).format(value)}
          </span>
          <span className="d-flex justify-content-end">
            {degreesStringBuilder(value)}
            {indicator}
          </span>
        </div>
      </div>
    </>
  );
};

export default Coordinate;
