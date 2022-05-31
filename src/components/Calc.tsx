import React from "react";

import suncalc from "suncalc";

import { latitude, longitude } from "../services/Coords";
import { INTL } from "../services/Common";
import { getLatitudeSign, getLongitudeSign, degreesStringBuilder } from "../services/Helpers";

function Calc(): JSX.Element {

  const currentDate = new Date();

  const solarTimes = suncalc.getTimes(currentDate, latitude, longitude);

  const sunriseDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    solarTimes.sunrise.getHours(),
    solarTimes.sunrise.getMinutes(),
    solarTimes.sunrise.getSeconds());

  const sunsetDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    solarTimes.sunset.getHours(),
    solarTimes.sunset.getMinutes(),
    solarTimes.sunset.getSeconds());

  return (
    <>
      <div className="section">
        <span className="label">Szerokość geograficzna:</span>
        <span className="value">
          {new Intl.NumberFormat(INTL).format(latitude)}
          <br />
          {degreesStringBuilder(latitude)} &nbsp;
          {getLatitudeSign(latitude)}
        </span>
      </div>
      <div className="section">
        <span className="label">Długość geograficzna:</span>
        <span className="value">
          {new Intl.NumberFormat(INTL).format(longitude)}
          <br />
          {degreesStringBuilder(longitude)}&nbsp;
          {getLongitudeSign(longitude)}
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
    </>
  );
}

export default Calc;