import React, { FC } from "react";
import { GetTimesResult } from "suncalc";
import Labels from "../common/Labels";
import Clock from "./Clock";
import Time from "./Time";

interface Times {
  solarTimes: GetTimesResult;
}

const Times: FC<Times> = (props): JSX.Element => {
  return (
    <section>
      <Clock />
      <Time label={Labels.SUNRISE_TIME} date={props.solarTimes.sunrise} />
      <Time label={Labels.SOLARNOON_TIME} date={props.solarTimes.solarNoon} />
      <Time label={Labels.SUNSET_TIME} date={props.solarTimes.sunset} />
    </section>
  );
};

export default Times;
