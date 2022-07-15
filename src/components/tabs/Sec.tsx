import React, { FC } from "react";

import Angle from "../partials/_Angle";
import Canvas from "../Canvas";
import { ICanvasProps } from "../../interfaces/props/ICanvasProps";
import { ISectionProps } from "../../interfaces/props/ISectionProps";
import suncalc from "suncalc";
import { useAppContext } from "../../hooks/useAppContext";

const Sec: FC = (): JSX.Element => {
  const { appTime, coords, labels } = useAppContext();
  const { latitude, longitude } = coords;

  const solarTimes = suncalc.getTimes(appTime, latitude, longitude);
  const currentAzimuth = suncalc.getPosition(appTime, latitude, longitude).azimuth;
  const sunRiseAzimuth = suncalc.getPosition(solarTimes.sunrise, latitude, longitude).azimuth;
  const noonAzimuth = suncalc.getPosition(solarTimes.solarNoon, latitude, longitude).azimuth;
  const sunSetAzimuth = suncalc.getPosition(solarTimes.sunset, latitude, longitude).azimuth;

  const currentAzimuthProps: ISectionProps = {
    label: labels.CURRENT_AZIMUTH,
    value: Math.PI + currentAzimuth,
    unit: "°",
  };

  const sunRiseAzimuthProps: ISectionProps = {
    label: labels.SUNRISE_AZIMUTH,
    value: Math.PI + sunRiseAzimuth,
  };

  const solarNoonAzimuthProps: ISectionProps = {
    label: labels.SOLARNOON_AZIMUTH,
    value: Math.PI + noonAzimuth,
  };

  const sunSetAzimuthProps: ISectionProps = {
    label: labels.SUNSET_AZIMUTH,
    value: Math.PI + sunSetAzimuth,
  };

  const azimuthSpanProps: ISectionProps = {
    label: labels.AMIUTH_SPAN,
    value: Math.abs(sunRiseAzimuth - sunSetAzimuth),
  };

  const canvasProps: ICanvasProps = {
    currentAzimuth: currentAzimuth,
    sunRiseAzimuth: sunRiseAzimuth,
    noonAzimuth: noonAzimuth,
    sunSetAzimuth: sunSetAzimuth,
  };

  return (
    <>
      <Angle {...sunRiseAzimuthProps} />
      <Angle {...solarNoonAzimuthProps} />
      <Angle {...sunSetAzimuthProps} />
      <Angle {...azimuthSpanProps} />
      <Angle {...currentAzimuthProps} />
      <Canvas {...canvasProps} />
    </>
  );
};

export default Sec;
