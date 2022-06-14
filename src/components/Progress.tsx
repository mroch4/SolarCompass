import React, { FC } from "react";

interface Section {
  label: string;
  value: number;
}

const Progress: FC<Section> = (props): JSX.Element => {
  return (
    <div className="section">
      <div className="label">{props.label}</div>
      <span className="value">{props.value}%</span>
    </div>
  );
};

export default Progress;
