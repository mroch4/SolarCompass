import React, { FC } from "react";

import Angle from "../partials/_Angle";
import { IDateProps } from "../../interfaces/props/IDateProps";
import { ISectionProps } from "../../interfaces/props/ISectionProps";
import Section from "../partials/_Section";
import Slider from "../Slider";
import Time from "../partials/_Time";
import { isValidDate } from "../../helpers/isValidDate";
import suncalc from "suncalc";
import { useAppContext } from "../../hooks/useAppContext";

const Tri: FC = (): JSX.Element => {
  const { appTime, coords, labels } = useAppContext();
  const { latitude, longitude } = coords;

  const solarTimes = suncalc.getTimes(appTime, latitude, longitude);
  const currentAltitude = suncalc.getPosition(appTime, latitude, longitude).altitude;
  const shadowLength = 1 / Math.tan(currentAltitude);

  const altitudeProps: ISectionProps = {
    label: labels.CURRENT_ALTITUDE,
    value: currentAltitude,
  };

  const shadowProps: ISectionProps = {
    label: labels.SHADOW_LENGTH,
    rounding: 2,
    value: shadowLength,
  };

  const dawn: IDateProps = {
    label: labels.DAWN,
    date: solarTimes.dawn,
  };

  const dusk: IDateProps = {
    label: labels.DUSK,
    date: solarTimes.dusk,
  };

  const nauticalDawn: IDateProps = {
    label: labels.NAUTICAL_DAWN,
    date: solarTimes.nauticalDawn,
  };

  const nauticalDusk: IDateProps = {
    label: labels.NAUTICAL_DUSK,
    date: solarTimes.nauticalDusk,
  };

  const nightStart: IDateProps = {
    label: labels.NIGHT_START,
    date: solarTimes.night,
  };

  const nadir: IDateProps = {
    label: labels.NADIR,
    date: solarTimes.nadir,
  };

  const nightEnd: IDateProps = {
    label: labels.NIGHT_END,
    date: solarTimes.nightEnd,
  };

  return (
    <>
      <Angle {...altitudeProps} />
      {shadowLength > 0 ? <Section {...shadowProps} /> : null}
      {isValidDate(nightEnd.date) ? <Time {...nightEnd} /> : null}
      {isValidDate(nauticalDawn.date) ? <Time {...nauticalDawn} /> : null}
      {isValidDate(dawn.date) ? <Time {...dawn} /> : null}
      {isValidDate(dusk.date) ? <Time {...dusk} /> : null}
      {isValidDate(nauticalDusk.date) ? <Time {...nauticalDusk} /> : null}
      {isValidDate(nightStart.date) ? <Time {...nightStart} /> : null}
      {isValidDate(nadir.date) ? <Time {...nadir} /> : null}
      <div className="d-flex flex-column mt-3">
        <span>*dawn/dusk (alt: 6-12°)</span>
        <span>*nautical dawn/dusk (alt: 12-18°)</span>
        <span>*night start/end (alt&lt;18°)</span>
      </div>
    </>
  );
};

export default Tri;
