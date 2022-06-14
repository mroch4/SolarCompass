import React, { FC } from "react";

interface Section {
  label: string;
  date: Date;
}

const UtcOffset: FC<Section> = (props): JSX.Element => {
  return (
    <div className="section">
      <div className="label">{props.label}</div>
      <span className="value">{props.date.getTimezoneOffset()}</span>
    </div>
  );
};

export default UtcOffset;
