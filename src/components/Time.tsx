import React, { FC } from "react";
import { SETTINGS } from "../common/Settings";

export interface Section {
  label: string;
  date: Date;
}

const Time: FC<Section> = (props): JSX.Element => {
  const { label, date } = props;

  return (
    <div className="section">
      <div className="label">{label}</div>
      <span className="value">{date.toLocaleTimeString(SETTINGS.INTL)}</span>
    </div>
  );
};

export default Time;
