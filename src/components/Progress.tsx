import React, { FC } from "react";
import { NumberSection } from "../interfaces/NumberSection";

const Progress: FC<NumberSection> = (props): JSX.Element => {
  return (
    <div className="section">
      <div className="label">{props.label}</div>
      <span className="value">{props.value}%</span>
    </div>
  );
};

export default Progress;
