import React, { FC } from "react";

import { ISectionProps } from "../../interfaces/props/ISectionProps";
import { radiansToDegrees } from "../../helpers/radiansConverter";
import { useAppContext } from "../../hooks/useAppContext";

const Angle: FC<ISectionProps> = (props): JSX.Element => {
  const { label, value } = props;

  const { intl } = useAppContext();

  const formattedValue = new Intl.NumberFormat(intl, {
    maximumFractionDigits: 1,
  }).format(radiansToDegrees(value));

  return (
    <section>
      <span className="label">{label}</span>
      <span className="value">{formattedValue}°</span>
    </section>
  );
};

export default Angle;
