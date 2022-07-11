import React, { FC } from "react";

import Angle from "../partials/_Angle";
import Canvas from "../Canvas";
import { ISectionProps } from "../../interfaces/props/ISectionProps";
import LABELS from "../../common/Labels";
import suncalc from "suncalc";
import { useAppContext } from "../Context";

const Sec: FC = (): JSX.Element => {
  const { appTime, coords } = useAppContext();
  const { latitude, longitude } = coords;

  const solarTimes = suncalc.getTimes(appTime, latitude, longitude);

  const currentAzimuthProps: ISectionProps = {
    label: LABELS.CURRENT_AZIMUTH,
    value: Math.PI + suncalc.getPosition(appTime, latitude, longitude).azimuth,
    unit: "°",
  };

  const sunRiseAzimuth = suncalc.getPosition(solarTimes.sunrise, latitude, longitude).azimuth;
  const sunRiseAzimuthProps: ISectionProps = {
    label: LABELS.SUNRISE_AZIMUTH,
    value: Math.PI + sunRiseAzimuth,
  };

  const solarNoonAzimuthProps: ISectionProps = {
    label: LABELS.SOLARNOON_AZIMUTH,
    value: Math.PI + suncalc.getPosition(solarTimes.solarNoon, latitude, longitude).azimuth,
  };

  const sunSetAzimuth = suncalc.getPosition(solarTimes.sunset, latitude, longitude).azimuth;
  const sunSetAzimuthProps: ISectionProps = {
    label: LABELS.SUNSET_AZIMUTH,
    value: Math.PI + sunSetAzimuth,
  };

  const azimuthSpanProps: ISectionProps = {
    label: LABELS.AMIUTH_SPAN,
    value: Math.abs(sunRiseAzimuth - sunSetAzimuth),
  };

  return (
    <>
      <Angle {...currentAzimuthProps} />
      <Angle {...sunRiseAzimuthProps} />
      <Angle {...solarNoonAzimuthProps} />
      <Angle {...sunSetAzimuthProps} />
      <Angle {...azimuthSpanProps} />
      <Canvas />
    </>
  );
};

export default Sec;
