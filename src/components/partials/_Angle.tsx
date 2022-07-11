import React, { FC } from "react";

import { ISectionProps } from "../../interfaces/props/ISectionProps";
import { SETTINGS } from "../../common/Settings";

const radiansToDegrees = (rad: number): number => {
  return (rad * 180) / Math.PI;
};

const Angle: FC<ISectionProps> = (props): JSX.Element => {
  const { label, value } = props;

  const formattedValue = new Intl.NumberFormat(SETTINGS.INTL, {
    maximumFractionDigits: 1,
  }).format(radiansToDegrees(value));

  return (
    <div className="section">
      <div className="label">{label}</div>
      <span className="value">{formattedValue}°</span>
    </div>
  );
};

export default Angle;
