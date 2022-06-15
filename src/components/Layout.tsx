import React, { FC, useState } from "react";
import suncalc from "suncalc";
import LOCATIONS from "../common/Locations";
import Map from "./Map";
import { TABS } from "../common/Tabs";
import Coordinates from "./Coordinates";
import Azimuth from "./Azimuth";
import Altitude from "./Altitude";
import Labels from "../common/Labels";
import Shadow from "./Shadow";
import Clock from "./Clock";
import SliderIcon from "./SliderIcon";
import Progress from "./Progress";

const Layout: FC = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

  const [coordinates, setCoordinates] = useState({
    latitude: LOCATIONS[0].latitude,
    longitude: LOCATIONS[0].longitude,
  });

  const currentTime = new Date();
  const solarTimes = suncalc.getTimes(currentTime, coordinates.latitude, coordinates.longitude);
  const sunriseTime = solarTimes.sunrise;
  const noonTime = solarTimes.solarNoon;
  const sunsetTime = solarTimes.sunset;

  const dayProgress = Math.floor(((currentTime.getTime() - sunriseTime.getTime()) / (sunsetTime.getTime() - sunriseTime.getTime())) * 100);
  const isDay = sunriseTime < currentTime && currentTime < sunsetTime;

  const moonTimes = suncalc.getMoonTimes(currentTime, coordinates.latitude, coordinates.longitude);
  const moonriseTime = moonTimes.rise;
  const moonsetTime = moonTimes.set;
  const nightProgress = Math.floor(((currentTime.getTime() - moonriseTime.getTime()) / (moonsetTime.getTime() - moonriseTime.getTime())) * 100);

  const currentSunPosition = suncalc.getPosition(currentTime, coordinates.latitude, coordinates.longitude);

  const currentAzimuth = currentSunPosition.azimuth;
  const sunRiseAzimuth = suncalc.getPosition(sunriseTime, coordinates.latitude, coordinates.longitude).azimuth;
  const noonAzimuth = suncalc.getPosition(noonTime, coordinates.latitude, coordinates.longitude).azimuth;
  const sunSetAzimuth = suncalc.getPosition(sunsetTime, coordinates.latitude, coordinates.longitude).azimuth;

  const currentAltitude = currentSunPosition.altitude;
  const shadowLength = 1 / Math.tan(currentAltitude);

  const getNavigator = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  };

  const handleOptionChange = (e: string) => {
    setCoordinates(LOCATIONS.find((item) => item.name === e));
  };

  return (
    <>
      <ul className="nav nav-tabs">
        {Object.entries(TABS).map(([key, value]) => (
          <li key={key} className="nav-item">
            <a className={currentTab === value ? "nav-link active" : "nav-link"} onClick={() => setCurrentTab(value)}>
              {value.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>

      <div className="card p-2">
        {currentTab === TABS[0] ? (
          <>
            <div className="d-flex form-group mb-2">
              <select className="form-control" onChange={(e) => handleOptionChange(e.currentTarget.value)}>
                {LOCATIONS.map((location) => (
                  <option key={location.id} value={location.name}>
                    {location.name}
                  </option>
                ))}
              </select>
              <button className="btn btn-outline-secondary ms-1" onClick={getNavigator}>
                <img src="icons/location.svg" width="20" />
              </button>
            </div>
            <Coordinates coordinates={coordinates} />
            <Map latitude={coordinates.latitude} longitude={coordinates.longitude} />
          </>
        ) : null}

        {currentTab === TABS[1] ? (
          <>
            <Clock />
            {/* <UtcOffset label={Labels.UTC_OFFSET} date={now} /> */}
            {isDay ? <Progress label={Labels.PROGRESS} value={dayProgress} /> : null}
            <input type="range" className="slider form-range" value={isDay ? dayProgress : 100} disabled></input>
            <div className="d-flex justify-content-between">
              <SliderIcon label="sunrise" date={sunriseTime} />
              <SliderIcon label="noon" date={noonTime} />
              <SliderIcon label="sunset" date={sunsetTime} />
            </div>
            <Altitude label={Labels.CURRENT_ALTITUDE} value={currentAltitude} />
            {shadowLength > 0 ? <Shadow label={Labels.SHADOW_LENGTH} value={shadowLength} /> : null}
          </>
        ) : null}

        {currentTab === TABS[2] ? (
          <>
            <Azimuth label={Labels.CURRENT_AZIMUTH} value={currentAzimuth} />
            <Azimuth label={Labels.SUNRISE_AZIMUTH} value={sunRiseAzimuth} />
            <Azimuth label={Labels.SOLARNOON_AZIMUTH} value={noonAzimuth} />
            <Azimuth label={Labels.SUNSET_AZIMUTH} value={sunSetAzimuth} />
          </>
        ) : null}

        {currentTab === TABS[3] ? (
          <>
            {isDay ? <Progress label={Labels.PROGRESS} value={nightProgress} /> : null}
            <input type="range" className="slider form-range" value={nightProgress} disabled></input>
            <div className="d-flex justify-content-between">
              <SliderIcon label="sunrise" date={moonriseTime} />
              <SliderIcon label="sunset" date={moonsetTime} />
            </div>
          </>
        ) : null}
      </div>

      {/* <Background solarTimes={solarTimes} /> */}
    </>
  );
};

export default Layout;
