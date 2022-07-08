import React, { FC } from "react";

import Angle from "../partials/_Angle";
import Clock from "../Clock";
import { IDateProps } from "../../interfaces/props/IDateProps";
import { ISectionProps } from "../../interfaces/props/ISectionProps";
import LABELS from "../../common/Labels";
import Section from "../partials/_Section";
import SliderIcon from "../partials/_SliderIcon";
import suncalc from "suncalc";
import { useAppContext } from "../Context";

const Sun: FC = (): JSX.Element => {
  const { appTime, coords } = useAppContext();
  const { latitude, longitude } = coords;

  const solarTimes = suncalc.getTimes(appTime, latitude, longitude);
  const sunriseTime = solarTimes.sunrise;
  const noonTime = solarTimes.solarNoon;
  const sunsetTime = solarTimes.sunset;

  const dayProgress = ((appTime.getTime() - sunriseTime.getTime()) / (sunsetTime.getTime() - sunriseTime.getTime())) * 100;
  const progressProps: ISectionProps = {
    label: LABELS.PROGRESS,
    value: dayProgress,
    unit: "%",
  };

  const isDay = sunriseTime < appTime && appTime < sunsetTime;
  const inputProps = {
    value: isDay ? dayProgress : 100,
  };

  const currentAltitude = suncalc.getPosition(appTime, latitude, longitude).altitude;
  const altitudeProps: ISectionProps = {
    label: LABELS.CURRENT_ALTITUDE,
    value: currentAltitude,
    unit: "°",
  };

  const shadowLength = 1 / Math.tan(currentAltitude);
  const shadowProps: ISectionProps = {
    label: LABELS.SHADOW_LENGTH,
    value: shadowLength,
    unit: " m",
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
      <Clock />
      {isDay ? <Section {...progressProps} /> : null}
      <input type="range" className="form-range" disabled {...inputProps}></input>
      <div className="slider">
        <SliderIcon {...sunriseIcon} />
        <SliderIcon {...noonIcon} />
        <SliderIcon {...sunsetIcon} />
      </div>
      <Angle {...altitudeProps} />
      {shadowLength > 0 ? <Section {...shadowProps} /> : null}
    </>
  );
};

export default Sun;
