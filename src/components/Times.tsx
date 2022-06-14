import React, { FC } from "react";
import { GetTimesResult } from "suncalc";
import Clock from "./Clock";
import Labels from "../common/Labels";
import UtcOffset from "./UtcOffset";
import Progress from "./Progress";
import SliderIcon from "./SliderIcon";

interface Times {
  solarTimes: GetTimesResult;
}

const Times: FC<Times> = (props): JSX.Element => {
  const start = props.solarTimes.sunrise;
  const now = new Date();
  const end = props.solarTimes.sunset;
  const progress = Math.floor(((now.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100);
  const day = start < now && now < end;

  return (
    <section>
      <Clock />
      <UtcOffset label={Labels.UTC_OFFSET} date={now} />
      {day ? (
        <>
          <input type="range" className="slider form-range" value={progress} disabled></input>
          <div className="d-flex justify-content-between">
            <SliderIcon icon="sunrise" date={start} />
            <SliderIcon icon="noon" date={props.solarTimes.solarNoon} />
            <SliderIcon icon="sunset" date={end} />
          </div>
          <Progress label={Labels.PROGRESS} value={progress} />
        </>
      ) : null}
    </section>
  );
};

export default Times;
