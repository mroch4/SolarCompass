import React, { FC } from "react";

import { ISectionProps } from "../../interfaces/props/ISectionProps";
import { useAppContext } from "../../hooks/useAppContext";

const Section: FC<ISectionProps> = (props): JSX.Element => {
  const { label, value, rounding, unit } = props;

  const { intl } = useAppContext();

  const formattedValue = new Intl.NumberFormat(intl, {
    maximumFractionDigits: rounding,
  }).format(value);

  return (
    <section>
      <span className="label">{label}</span>
      <span className="value">
        {formattedValue}
        {unit}
      </span>
    </section>
  );
};

export default Section;
