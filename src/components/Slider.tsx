import React, { FC } from "react";

import IDateProps from "./interfaces/IDateProps";
import ISectionProps from "./interfaces/ISectionProps";
import Section from "./partials/_Section";
import SliderIcon from "./partials/_SliderIcon";
import dayLengthStringBuilder from "../helpers/dayLengthStringBuilder";
import getProgess from "../helpers/getProgress";
import suncalc from "suncalc";
import useAppContext from "../hooks/useAppContext";

const Slider: FC = (): JSX.Element => {
  const { appTime, coords, labels } = useAppContext();
  const { latitude, longitude } = coords;

  const solarTimes = suncalc.getTimes(appTime, latitude, longitude);
  const sunriseTime = solarTimes.sunrise;
  const noonTime = solarTimes.solarNoon;
  const sunsetTime = solarTimes.sunset;

  const dayLength = sunsetTime.valueOf() - sunriseTime.valueOf();
  const dayLengthFormatted = dayLengthStringBuilder(dayLength);
  const dayProgress = ((appTime.valueOf() - sunriseTime.valueOf()) / dayLength) * 100;

  const progressProps: ISectionProps = {
    label: labels.DAY_PROGRESS,
    value: getProgess(dayProgress),
    rounding: 0,
    unit: "%",
  };

  const inputProps = {
    value: getProgess(dayProgress),
  };

  const sunriseIcon: IDateProps = {
    label: "sunrise",
    date: sunriseTime,
  };

  const noonIcon: IDateProps = {
    label: "noon",
    date: noonTime,
  };

  const sunsetIcon: IDateProps = {
    label: "sunset",
    date: sunsetTime,
  };

  return (
    <>
      <section>
        <div className="label">{labels.DAY_DURATION}</div>
        <span className="value">{dayLengthFormatted}</span>
      </section>
      <input type="range" className="form-range" disabled {...inputProps}></input>
      <div className="slider">
        <SliderIcon {...sunriseIcon} />
        <SliderIcon {...noonIcon} />
        <SliderIcon {...sunsetIcon} />
      </div>
      <Section {...progressProps} />
    </>
  );
};

export default Slider;
