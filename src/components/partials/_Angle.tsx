import React, { FC } from "react";

import { ISectionProps } from "../../interfaces/props/ISectionProps";
import { useAppContext } from "../Context";

const radiansToDegrees = (rad: number): number => {
  return (rad * 180) / Math.PI;
};

const Angle: FC<ISectionProps> = (props): JSX.Element => {
  const { label, value } = props;

  const { intl } = useAppContext();

  const formattedValue = new Intl.NumberFormat(intl, {
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
