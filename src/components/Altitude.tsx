import React, { FC } from "react";
import { NumberSection } from "../interfaces/NumberSection";
import { SETTINGS } from "../common/Settings";
import { radiansToDegrees } from "../common/Helpers";

const Altitude: FC<NumberSection> = (props): JSX.Element => {
  return (
    <div className="section">
      <div className="label">{props.label}</div>
      <span className="value">
        {new Intl.NumberFormat(SETTINGS.INTL, {
          maximumFractionDigits: SETTINGS.DECIMAL_PRECISION,
        }).format(radiansToDegrees(props.value))}
        °
      </span>
    </div>
  );
};

export default Altitude;
