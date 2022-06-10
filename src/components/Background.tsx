import React, { FC } from "react";
import { GetTimesResult } from "suncalc";
import GRADIENTS from "../common/Gradients";
import { SETTINGS } from "../common/Settings";

interface Times {
  solarTimes: GetTimesResult;
}

const Background: FC<Times> = (props): JSX.Element => {
  const start = props.solarTimes.dawn;
  const now = new Date().getTime();
  const end = props.solarTimes.dusk;

  const fraction = (now - start.getTime()) / (end.getTime() - start.getTime());
  const percent = (fraction * 100).toFixed(5);

  const gradient = Math.floor(GRADIENTS.length * fraction);

  document.documentElement.style.setProperty("--background-gradient", GRADIENTS[gradient]);

  return (
    <>
      <div className="section">
        <div className="label">Start:</div>
        <span className="value">{start.toLocaleTimeString(SETTINGS.INTL)}</span>
      </div>
      <div className="section">
        <div className="label">Background:</div>
        <span className="value">
          ({gradient})&nbsp;{percent}%
        </span>
      </div>
      <div className="section">
        <div className="label">End:</div>
        <span className="value">{end.toLocaleTimeString(SETTINGS.INTL)}</span>
      </div>
    </>
  );
};

export default Background;
