import React, { FC } from "react";
import { SETTINGS } from "../common/Settings";

interface Section {
  label: string;
  value: number;
}

const Shadow: FC<Section> = (props): JSX.Element => {
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
