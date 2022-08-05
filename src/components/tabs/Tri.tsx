import React, { FC } from "react";

import Angle from "../partials/_Angle";
import Canvas from "../Canvas";
import ICanvasProps from "../interfaces/ICanvasProps";
import ISectionProps from "../interfaces/ISectionProps";
import Section from "../partials/_Section";
import suncalc from "suncalc";
import useAppContext from "../../hooks/useAppContext";

const Tri: FC = (): JSX.Element => {
  const { appTime, coords, labels } = useAppContext();
  const { latitude, longitude } = coords;

  const solarTimes = suncalc.getTimes(appTime, latitude, longitude);
  const currentAzimuth = suncalc.getPosition(appTime, latitude, longitude).azimuth;
  const sunRiseAzimuth = suncalc.getPosition(solarTimes.sunrise, latitude, longitude).azimuth;
  const noonAzimuth = suncalc.getPosition(solarTimes.solarNoon, latitude, longitude).azimuth;
  const sunSetAzimuth = suncalc.getPosition(solarTimes.sunset, latitude, longitude).azimuth;
  const currentAltitude = suncalc.getPosition(appTime, latitude, longitude).altitude;
  const shadowLength = 1 / Math.tan(currentAltitude);

  const currentAzimuthProps: ISectionProps = {
    label: labels.AZIMUTH_CURRENT,
    value: Math.PI + currentAzimuth,
    unit: "°",
  };

  const sunRiseAzimuthProps: ISectionProps = {
    label: labels.AZIMUTH_SUNRISE,
    value: Math.PI + sunRiseAzimuth,
  };

  const solarNoonAzimuthProps: ISectionProps = {
    label: labels.AZIMUTH_SOLARNOON,
    value: Math.PI + noonAzimuth,
  };

  const sunSetAzimuthProps: ISectionProps = {
    label: labels.AZIMUTH_SUNSET,
    value: Math.PI + sunSetAzimuth,
  };

  const azimuthSpanProps: ISectionProps = {
    label: labels.AZIMUTH_SPAN,
    value: Math.abs(sunRiseAzimuth - sunSetAzimuth),
  };

  const canvasProps: ICanvasProps = {
    currentAzimuth: currentAzimuth,
    sunRiseAzimuth: sunRiseAzimuth,
    noonAzimuth: noonAzimuth,
    sunSetAzimuth: sunSetAzimuth,
  };

  const altitudeProps: ISectionProps = {
    label: labels.SUN_ALTITUDE,
    value: currentAltitude,
  };

  const shadowProps: ISectionProps = {
    label: labels.SHADOW,
    rounding: 2,
    value: shadowLength,
  };

  return (
    <>
      <Angle {...currentAzimuthProps} />
      <Angle {...sunRiseAzimuthProps} />
      <Angle {...solarNoonAzimuthProps} />
      <Angle {...sunSetAzimuthProps} />
      <Angle {...azimuthSpanProps} />
      <Canvas {...canvasProps} />
      <Angle {...altitudeProps} />
      {shadowLength > 0 ? <Section {...shadowProps} /> : null}
    </>
  );
};

export default Tri;
