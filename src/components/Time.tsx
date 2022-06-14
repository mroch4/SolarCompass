import React, { FC } from "react";
import { SETTINGS } from "../common/Settings";

interface Section {
  label: string;
  date: Date;
}

const Time: FC<Section> = (props): JSX.Element => {
  return (
    <div className="section">
      <div className="label">{props.label}</div>
      <span className="value">{props.date.toLocaleTimeString(SETTINGS.INTL, { timeStyle: "short" })}</span>
    </div>
  );
};

export default Time;
