import React from "react";

import suncalc from "suncalc";

import { INTL, RADIANS_PRECISION } from "../services/Common";
import { getLatitudeSign, getLongitudeSign, degreesStringBuilder, radiansToDegrees } from "../services/Helpers";
import { Coords } from "../services/Interfaces";

function Calc(coords: Coords): JSX.Element {

  const currentDate = new Date();

  const solarTimes = suncalc.getTimes(currentDate, coords.latitude, coords.longitude);

  const sunriseDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    solarTimes.sunrise.getHours(),
    solarTimes.sunrise.getMinutes(),
    solarTimes.sunrise.getSeconds());

  const sunriseAzimuth = suncalc.getPosition(solarTimes.sunrise, coords.latitude, coords.longitude);

  const sunsetDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    solarTimes.sunset.getHours(),
    solarTimes.sunset.getMinutes(),
    solarTimes.sunset.getSeconds());

  const sunsertAzimuth = suncalc.getPosition(solarTimes.sunset, coords.latitude, coords.longitude);

  return (
    <>
      <div className="section">
        <span className="label">Szerokość geograficzna:</span>
        <span className="value">
          {new Intl.NumberFormat(INTL, {
            minimumFractionDigits: RADIANS_PRECISION,
          }).format(coords.latitude)}
          <br />
          {degreesStringBuilder(coords.latitude)} &nbsp;
          {getLatitudeSign(coords.latitude)}
        </span>
      </div>

      <div className="section">
        <span className="label">Długość geograficzna:</span>
        <span className="value">
          {new Intl.NumberFormat(INTL, {
            minimumFractionDigits: RADIANS_PRECISION,
          }).format(coords.longitude)}
          <br />
          {degreesStringBuilder(coords.longitude)}&nbsp;
          {getLongitudeSign(coords.longitude)}
        </span>
      </div>

      <div className="section">
        <span className="label">Wschód słońca:</span>
        <span className="value">{sunriseDate.toLocaleTimeString(INTL)}</span>
      </div>

      <div className="section">
        <span className="label">Zachód słońca:</span>
        <span className="value">{sunsetDate.toLocaleTimeString(INTL)}</span>
      </div>

      <div className="section">
        <span className="label">Azymut wschodu słońca:</span>
        <span className="value">
          {new Intl.NumberFormat(INTL, {
            minimumFractionDigits: RADIANS_PRECISION,
          }).format(radiansToDegrees(sunriseAzimuth.azimuth))}
        </span>
      </div>

      <div className="section">
        <span className="label">Azymut zachodu słońca:</span>
        <span className="value">
          {new Intl.NumberFormat(INTL, {
            minimumFractionDigits: RADIANS_PRECISION,
          }).format(radiansToDegrees(sunsertAzimuth.azimuth))}
        </span>
      </div>
    </>
  );
}

export default Calc;
