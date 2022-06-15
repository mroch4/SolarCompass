import React, { FC } from "react";
import { DateSection } from "../interfaces/DateSection";
import { SETTINGS } from "../common/Settings";

const Time: FC<DateSection> = (props): JSX.Element => {
  return (
    <div className="section">
      <div className="label">{props.label}</div>
      <span className="value">{props.date.toLocaleTimeString(SETTINGS.INTL, { timeStyle: "short" })}</span>
    </div>
  );
};

export default Time;
