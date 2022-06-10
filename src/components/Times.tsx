import React, { FC } from "react";
import { GetTimesResult } from "suncalc";
import Labels from "../common/Labels";
import Clock from "./Clock";
import Time from "./Time";

interface Times {
  solarTimes: GetTimesResult;
}

const Times: FC<Times> = (props): JSX.Element => {
  const start = props.solarTimes.sunrise;
  const now = new Date().getTime();
  const end = props.solarTimes.sunset;
  const percent = ((now - start.getTime()) / (end.getTime() - start.getTime())) * 100;

  return (
    <section>
      <Clock />
      <Time label={Labels.SUNRISE_TIME} date={start} />
      <Time label={Labels.SOLARNOON_TIME} date={props.solarTimes.solarNoon} />
      <Time label={Labels.SUNSET_TIME} date={end} />
      <div className="section">
        <div className="label">Day:</div>
        <span className="value">{percent.toFixed(5)}%</span>
      </div>
      <input type="range" className="slider form-range" value={percent} disabled></input>
    </section>
  );
};

export default Times;
