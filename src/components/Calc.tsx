import React from "react";
import suncalc from "suncalc";
import Azimuth from './Azimuth';
import Coordinates from "./Coordinates";
import Dailylight from './Daylight';
import { LABELS } from "../services/Common";
import { AzimuthSection, Coords, CoordsSection, DaylightSection } from "../services/Interfaces";

function Calc(coords: Coords): JSX.Element {

  const latitudeProps: CoordsSection = {
    label: LABELS.latitude,
    coordinate: coords.latitude,
    NS: true
  }

  const longitudeProps: CoordsSection = {
    label: LABELS.longitude,
    coordinate: coords.longitude,
    NS: false
  }

  const currentDate = new Date();

  const solarTimes = suncalc.getTimes(currentDate, coords.latitude, coords.longitude);

  const sunriseProps: DaylightSection = {
    label: LABELS.sunriseTime,
    date: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      solarTimes.sunrise.getHours(),
      solarTimes.sunrise.getMinutes(),
      solarTimes.sunrise.getSeconds())
  };

  const sunsetProps: DaylightSection = {
    label: LABELS.sunsetTime,
    date: new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      solarTimes.sunset.getHours(),
      solarTimes.sunset.getMinutes(),
      solarTimes.sunset.getSeconds())
  };

  const sunriseAzimuth: AzimuthSection = {
    label: LABELS.sunriseAzimuth,
    sunPosition: suncalc.getPosition(
      solarTimes.sunrise,
      coords.latitude,
      coords.longitude)
  };

  const sunsetAzimuth: AzimuthSection = {
    label: LABELS.sunsetAzimuth,
    sunPosition: suncalc.getPosition(
      solarTimes.sunset,
      coords.latitude,
      coords.longitude)
  };

  return (
    <>
      <Coordinates {...latitudeProps} />
      <Coordinates {...longitudeProps} />
      <Dailylight {...sunriseProps} />
      <Dailylight {...sunsetProps} />
      <Azimuth {...sunriseAzimuth} />
      <Azimuth {...sunsetAzimuth} />
    </>
  );
}

export default Calc;
