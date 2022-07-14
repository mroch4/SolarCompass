import React, { FC } from "react";

import { ISectionProps } from "../../interfaces/props/ISectionProps";
import { useAppContext } from "../Context";
import { zeroPrefixer } from "../../common/Helpers";

const degreesStringBuilder = (decimalCoordinate: number): string => {
  const degrees: number = Math.trunc(decimalCoordinate);
  const minutes: number = Math.trunc((decimalCoordinate - degrees) * 60);
  const seconds: number = ((decimalCoordinate - degrees) * 60 - minutes) * 60;
  return `${Math.abs(degrees)}° ${zeroPrefixer(Math.abs(minutes))}' ${zeroPrefixer(Math.abs(+seconds.toFixed(2)))}''`;
};

const Coordinate: FC<ISectionProps> = (props): JSX.Element => {
  const { label, value, unit } = props;

  const { intl } = useAppContext();

  const formattedValue = new Intl.NumberFormat(intl, {
    minimumFractionDigits: 6,
  }).format(value);

  return (
    <>
      <div className="section">
        <div className="label">{label}</div>
        <div className="column">
          <span className="line">{formattedValue}</span>
          <span className="line">
            {degreesStringBuilder(value)}
            {unit}
          </span>
        </div>
      </div>
    </>
  );
};

export default Coordinate;
