import React, { FC } from "react";
import { NumberSection } from "../interfaces/NumberSection";
import { SETTINGS } from "../common/Settings";

const Shadow: FC<NumberSection> = (props): JSX.Element => {
  return (
    <div className="section">
      <div className="label">{props.label}</div>
      <span className="value">
        {new Intl.NumberFormat(SETTINGS.INTL, {
          minimumFractionDigits: SETTINGS.DECIMAL_PRECISION,
        }).format(props.value)}
        &nbsp;m
      </span>
    </div>
  );
};

export default Shadow;
