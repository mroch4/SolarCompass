import React, { FC, useState } from "react";
import suncalc from "suncalc";
import LOCATIONS from "../common/Locations";
import Azimuths from "./Azimuths";
import Coordinates from "./Coordinates";
import Times from "./Times";
import Map from "./Map";
import Background from "./Background";

const Layout: FC = (): JSX.Element => {
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: LOCATIONS[0].latitude,
    longitude: LOCATIONS[0].longitude,
  });

  const handleOptionChange = (e: string) => {
    setSelectedLocation({
      latitude: parseFloat(e.split(",")[0]),
      longitude: parseFloat(e.split(",")[1]),
    });
  };

  const currentDate = new Date();

  const solarTimes = suncalc.getTimes(currentDate, selectedLocation.latitude, selectedLocation.longitude);

  const getNavigator = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setSelectedLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      },
      (error) => {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  };

  return (
    <div className="card px-2">
      <div className="form-group my-2">
        <select className="form-control" onChange={(e) => handleOptionChange(e.target.value)}>
          {LOCATIONS.map((location) => (
            <option key={location.id} value={[location.latitude.toString(), location.longitude.toString()]}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-success" onClick={getNavigator}>
        GET USER LOCATION
      </button>
      <Coordinates selectedLocation={selectedLocation} />
      <Map latitude={selectedLocation.latitude} longitude={selectedLocation.longitude} />
      <Times solarTimes={solarTimes} />
      <Background solarTimes={solarTimes} />
      <Azimuths selectedLocation={selectedLocation} solarTimes={solarTimes} />
    </div>
  );
};

export default Layout;
