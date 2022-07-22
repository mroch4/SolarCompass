import React, { FC } from "react";

import IDateProps from "./interfaces/IDateProps";
import Time from "./partials/_Time";
import getProgess from "../helpers/getProgress";
import isValidDate from "../helpers/isValidDate";
import suncalc from "suncalc";
import useAppContext from "../hooks/useAppContext";

const Other: FC = (): JSX.Element => {
  const { appTime, labels, coords } = useAppContext();
  const { latitude, longitude } = coords;

  const solarTimes = suncalc.getTimes(appTime, latitude, longitude);

  const dawn: IDateProps = {
    label: labels.DAWN,
    date: solarTimes.dawn,
  };

  const dusk: IDateProps = {
    label: labels.DUSK,
    date: solarTimes.dusk,
  };

  const nauticalDawn: IDateProps = {
    label: labels.DAWN_NAUTICAL,
    date: solarTimes.nauticalDawn,
  };

  const nauticalDusk: IDateProps = {
    label: labels.DUSK_NAUTICAL,
    date: solarTimes.nauticalDusk,
  };

  const nightStart: IDateProps = {
    label: labels.NIGHT_START,
    date: solarTimes.night,
  };

  const nadir: IDateProps = {
    label: labels.NIGHT_NADIR,
    date: solarTimes.nadir,
  };

  const nightEnd: IDateProps = {
    label: labels.NIGHT_END,
    date: solarTimes.nightEnd,
  };

  const getBackground = (end: Date, start: Date) => {
    const begining = start.valueOf();
    const dayLength = end.valueOf() - begining;
    const dayProgress = ((appTime.valueOf() - begining) / dayLength) * 100;
    return getProgess(dayProgress);
  };

  getBackground(dusk.date, dawn.date);
  getBackground(nauticalDusk.date, nauticalDawn.date);
  getBackground(nightEnd.date, nightStart.date);

  return (
    <>
      {isValidDate(nightEnd.date) ? <Time {...nightEnd} /> : null}
      {isValidDate(nauticalDawn.date) ? <Time {...nauticalDawn} /> : null}
      {isValidDate(dawn.date) ? <Time {...dawn} /> : null}
      {isValidDate(dusk.date) ? <Time {...dusk} /> : null}
      {isValidDate(nauticalDusk.date) ? <Time {...nauticalDusk} /> : null}
      {isValidDate(nightStart.date) ? <Time {...nightStart} /> : null}
      {isValidDate(nadir.date) ? <Time {...nadir} /> : null}
    </>
  );
};

export default Other;
