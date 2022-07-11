import React, { FC } from "react";

import { ISectionProps } from "../../interfaces/props/ISectionProps";
import { SETTINGS } from "../../common/Settings";

const Section: FC<ISectionProps> = (props): JSX.Element => {
  const { label, value, rounding, unit } = props;

  const formattedValue = new Intl.NumberFormat(SETTINGS.INTL, {
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
