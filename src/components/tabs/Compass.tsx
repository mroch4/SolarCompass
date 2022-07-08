import React, { FC, useRef } from "react";

import Angle from "../partials/_Angle";
import { ISectionProps } from "../../interfaces/props/ISectionProps";
import LABELS from "../../common/Labels";
import suncalc from "suncalc";
import { useAppContext } from "../Context";

const Compass: FC = (): JSX.Element => {
  const { appTime, coords } = useAppContext();
  const { latitude, longitude } = coords;

  const ref = useRef(null);

  const solarTimes = suncalc.getTimes(appTime, latitude, longitude);

  const currentAzimuthProps: ISectionProps = {
    label: LABELS.CURRENT_AZIMUTH,
    value: suncalc.getPosition(appTime, latitude, longitude).azimuth,
    unit: "°",
  };

  const sunRiseAzimuth = suncalc.getPosition(solarTimes.sunrise, latitude, longitude).azimuth;
  const sunRiseAzimuthProps: ISectionProps = {
    label: LABELS.SUNRISE_AZIMUTH,
    value: sunRiseAzimuth,
    unit: "°",
  };

  const solarNoonAzimuthProps: ISectionProps = {
    label: LABELS.SOLARNOON_AZIMUTH,
    value: suncalc.getPosition(solarTimes.solarNoon, latitude, longitude).azimuth,
    unit: "°",
  };

  const sunSetAzimuth = suncalc.getPosition(solarTimes.sunset, latitude, longitude).azimuth;
  const sunSetAzimuthProps: ISectionProps = {
    label: LABELS.SUNSET_AZIMUTH,
    value: sunSetAzimuth,
    unit: "°",
  };

  const azimuthSpanProps: ISectionProps = {
    label: LABELS.AMIUTH_SPAN,
    value: Math.abs(sunRiseAzimuth - sunSetAzimuth),
    unit: "°",
  };

  return (
    <>
      <Angle {...currentAzimuthProps} />
      <Angle {...sunRiseAzimuthProps} />
      <Angle {...solarNoonAzimuthProps} />
      <Angle {...sunSetAzimuthProps} />
      <Angle {...azimuthSpanProps} />
      <canvas ref={ref} width="348" height="348"></canvas>
    </>
  );
};

export default Compass;
