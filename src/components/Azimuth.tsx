import React, { FC } from "react";
import { SETTINGS } from "../common/Settings";

interface Azimuth {
  label: string;
  value: number;
}

export const radiansToDegrees = (rad: number): number => {
  return (rad * 180) / Math.PI;
};

const Azimuth: FC<Azimuth> = (props): JSX.Element => {
  return (
    <div className="section">
      <div className="label">{props.label}</div>
      <span className="value">
        {new Intl.NumberFormat(SETTINGS.INTL, {
          maximumFractionDigits: SETTINGS.RADIANS_PRECISION,
        }).format(180 + radiansToDegrees(props.value))}
      </span>
    </div>
  );
};

export default Azimuth;
