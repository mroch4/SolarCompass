import React, { FC } from "react";

import { ISectionProps } from "../../interfaces/props/ISectionProps";
import { useAppContext } from "../Context";

const Section: FC<ISectionProps> = (props): JSX.Element => {
  const { label, value, rounding, unit } = props;

  const { intl } = useAppContext();

  const formattedValue = new Intl.NumberFormat(intl, {
    maximumFractionDigits: rounding,
  }).format(value);

  return (
    <div className="section">
      <div className="label">{label}</div>
      <span className="value">
        {formattedValue}
        {unit}
      </span>
    </div>
  );
};

export default Section;
