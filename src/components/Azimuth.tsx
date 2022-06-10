import React, { FC } from "react";
import { SETTINGS } from "../common/Settings";

interface Azimuth {
  label: string;
  value: number;
}

const radiansToDegrees = (rad: number): number => {
  return (rad * 180) / Math.PI;
};

const Azimuth: FC<Azimuth> = (props): JSX.Element => {
  const { label, value } = props;

  return (
    <div className="section">
      <div className="label">{label}</div>
      <span className="value">
        {new Intl.NumberFormat(SETTINGS.INTL, {
          minimumFractionDigits: SETTINGS.RADIANS_PRECISION,
        }).format(radiansToDegrees(value))}
      </span>
    </div>
  );
};

export default Azimuth;
