import React, { FC } from "react";

import { IDateProps } from "../interfaces/props/IDateProps";
import { ISectionProps } from "../interfaces/props/ISectionProps";
import Section from "./partials/_Section";
import SliderIcon from "./partials/_SliderIcon";
import suncalc from "suncalc";
import { useAppContext } from "./Context";
import { zeroPrefixer } from "../common/Helpers";

const Slider: FC = (): JSX.Element => {
  const { appTime, coords, labels } = useAppContext();
  const { latitude, longitude } = coords;

  const solarTimes = suncalc.getTimes(appTime, latitude, longitude);
  const sunriseTime = solarTimes.sunrise;
  const noonTime = solarTimes.solarNoon;
  const sunsetTime = solarTimes.sunset;

  const dayLength = sunsetTime.valueOf() - sunriseTime.valueOf();

  const dayLengthStringBuilder = () => {
    const hours = dayLength / (60 * 60 * 1000);
    const hoursFormatted = Math.trunc(hours);
    const hoursString = zeroPrefixer(hoursFormatted);

    const minutes = (hours - hoursFormatted) * 60;
    const minutesFormatted = Math.trunc(minutes);
    const minutesString = zeroPrefixer(minutesFormatted);

    const seconds = (minutes - minutesFormatted) * 60;
    const secondsFormatted = Math.trunc(seconds);
    const secondsString = zeroPrefixer(secondsFormatted);

    return `${hoursString}h ${minutesString}m ${secondsString}s`;
    //return `${hoursString}:${minutesString}:${secondsString}`;
  };

  const dayProgress = ((appTime.valueOf() - sunriseTime.valueOf()) / dayLength) * 100;

  // const isDay = sunriseTime < appTime && appTime < sunsetTime;
  const getProgess = (): number => {
    if (dayProgress < 0) return 0;
    if (dayProgress > 100) return 100;
    return dayProgress;
  };

  const progressProps: ISectionProps = {
    label: labels.PROGRESS,
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
      <div className="section">
        <div className="label">Day duration:</div>
        <span className="value">{dayLengthStringBuilder()}</span>
      </div>
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
