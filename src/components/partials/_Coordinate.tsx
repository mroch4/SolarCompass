import React, { FC } from "react";

import { ISectionProps } from "../../interfaces/props/ISectionProps";
import { degreesStringBuilder } from "../../helpers/degreesStringBuilder";
import { useAppContext } from "../../hooks/useAppContext";

const Coordinate: FC<ISectionProps> = (props): JSX.Element => {
  const { label, value, unit } = props;

  const { intl } = useAppContext();

  const decimalValue = new Intl.NumberFormat(intl, {
    minimumFractionDigits: 6,
  }).format(value);

  const angularValue = degreesStringBuilder(value);

  return (
    <section>
      <span className="label">{label}</span>
      <div className="column">
        <span className="line">{decimalValue}</span>
        <span className="line">
          {angularValue}
          {unit}
        </span>
      </div>
    </section>
  );
};

export default Coordinate;
