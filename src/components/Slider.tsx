import React, { FC } from "react";

import { IDateProps } from "../interfaces/props/IDateProps";
import { ISectionProps } from "../interfaces/props/ISectionProps";
import LABELS from "./../common/Labels";
import Section from "./partials/_Section";
import SliderIcon from "./partials/_SliderIcon";
import suncalc from "suncalc";
import { useAppContext } from "./Context";

const Slider: FC = (): JSX.Element => {
  const { appTime, coords } = useAppContext();
  const { latitude, longitude } = coords;

  const solarTimes = suncalc.getTimes(appTime, latitude, longitude);
  const sunriseTime = solarTimes.sunrise;
  const noonTime = solarTimes.solarNoon;
  const sunsetTime = solarTimes.sunset;

  const dayProgress = ((appTime.getTime() - sunriseTime.getTime()) / (sunsetTime.getTime() - sunriseTime.getTime())) * 100;

  // const isDay = sunriseTime < appTime && appTime < sunsetTime;
  const getProgess = (): number => {
    if (dayProgress < 0) return 0;
    if (dayProgress > 100) return 100;
    return dayProgress;
  };

  const progressProps: ISectionProps = {
    label: LABELS.PROGRESS,
    value: getProgess(),
    rounding: 0,
    unit: "%",
  };

  const inputProps = {
    value: getProgess(),
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
      <Section {...progressProps} />
      <input type="range" className="form-range" disabled {...inputProps}></input>
      <div className="slider">
        <SliderIcon {...sunriseIcon} />
        <SliderIcon {...noonIcon} />
        <SliderIcon {...sunsetIcon} />
      </div>
    </>
  );
};

export default Slider;
