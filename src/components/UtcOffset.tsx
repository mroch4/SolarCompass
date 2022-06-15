import React, { FC } from "react";
import { DateSection } from "../interfaces/DateSection";

const UtcOffset: FC<DateSection> = (props): JSX.Element => {
  return (
    <div className="section">
      <div className="label">{props.label}</div>
      <span className="value">{props.date.getTimezoneOffset()}</span>
    </div>
  );
};

export default UtcOffset;
