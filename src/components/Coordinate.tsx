import React, { FC } from "react";
import { degreesStringBuilder } from "../common/Helpers";
import { SETTINGS } from "../common/Settings";

interface CoordinatesSection {
  label: string;
  value: number;
  indicator: string;
}

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
