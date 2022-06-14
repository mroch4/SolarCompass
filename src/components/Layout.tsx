import React, { FC, useState } from "react";
import suncalc from "suncalc";
import LOCATIONS from "../common/Locations";
import Azimuths from "./Azimuths";
import Times from "./Times";
import Map from "./Map";
import { TABS } from "../common/Tabs";
import Coordinates from "./Coordinates";

const Layout: FC = (): JSX.Element => {
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: LOCATIONS[0].latitude,
    longitude: LOCATIONS[0].longitude,
  });

  const handleOptionChange = (e: string) => {
    setSelectedLocation(LOCATIONS.find((item) => item.name === e));
  };

  const currentDate = new Date();

  const solarTimes = suncalc.getTimes(currentDate, selectedLocation.latitude, selectedLocation.longitude);

  const getNavigator = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setSelectedLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  };

  const [currentTab, setCurrentTab] = useState(TABS[0]);

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

            <Map latitude={selectedLocation.latitude} longitude={selectedLocation.longitude} />
          </>
        ) : null}

        {currentTab === TABS[1] ? (
          <>
            <Coordinates selectedLocation={selectedLocation} />
            <Times solarTimes={solarTimes} />
          </>
        ) : null}
        {currentTab === TABS[2] ? <Azimuths selectedLocation={selectedLocation} solarTimes={solarTimes} /> : null}
      </div>

      {/* <Background solarTimes={solarTimes} /> */}
    </>
  );
};

export default Layout;
