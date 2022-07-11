import React, { FC } from "react";

import Angle from "../partials/_Angle";
import { IDateProps } from "../../interfaces/props/IDateProps";
import { ISectionProps } from "../../interfaces/props/ISectionProps";
import LABELS from "../../common/Labels";
import Section from "../partials/_Section";
import SliderIcon from "../partials/_SliderIcon";
import suncalc from "suncalc";
import { useAppContext } from "../Context";

const Tri: FC = (): JSX.Element => {
  const { appTime, coords } = useAppContext();
  const { latitude, longitude } = coords;

  const solarTimes = suncalc.getTimes(appTime, latitude, longitude);

  const currentAltitude = suncalc.getPosition(appTime, latitude, longitude).altitude;
  const altitudeProps: ISectionProps = {
    label: LABELS.CURRENT_ALTITUDE,
    value: currentAltitude,
  };

  const shadowLength = 1 / Math.tan(currentAltitude);
  const shadowProps: ISectionProps = {
    label: LABELS.SHADOW_LENGTH,
    rounding: 2,
    value: shadowLength,
  };

  const dawn: IDateProps = {
    label: "sunrise",
    date: solarTimes.dawn,
  };

  const dusk: IDateProps = {
    label: "sunset",
    date: solarTimes.dusk,
  };

  const nauticalDawn: IDateProps = {
    label: "sunrise",
    date: solarTimes.nauticalDawn,
  };

  const nauticalDusk: IDateProps = {
    label: "sunset",
    date: solarTimes.nauticalDusk,
  };

  const nightStart: IDateProps = {
    label: "sunrise",
    date: solarTimes.night,
  };

  const nadir: IDateProps = {
    label: "sunset",
    date: solarTimes.nadir,
  };

  const nightEnd: IDateProps = {
    label: "sunset",
    date: solarTimes.nightEnd,
  };

  return (
    <>
      <Angle {...altitudeProps} />
      {shadowLength > 0 ? <Section {...shadowProps} /> : null}
      <div className="mt-3">
        <h6>Dawn/dusk (alt: 6-12°)</h6>
        <div className="slider mt-3">
          <SliderIcon {...dawn} />
          <SliderIcon {...dusk} />
        </div>
      </div>
      <div className="mt-3">
        <h6>Nautical dawn/dusk (alt: 12-18°)</h6>
        <div className="slider mt-3">
          <SliderIcon {...nauticalDawn} />
          <SliderIcon {...nauticalDusk} />
        </div>
      </div>
      <div className="mt-3">
        <h6>Night start/end (alt&lt;18°)</h6>
        <div className="slider mt-3">
          <SliderIcon {...nightStart} />
          <SliderIcon {...nightEnd} />
        </div>
      </div>
      <div className="mt-3">
        <h6>Nadir</h6>
        <div className="slider mt-3">
          <SliderIcon {...nadir} />
        </div>
      </div>
    </>
  );
};

export default Tri;
