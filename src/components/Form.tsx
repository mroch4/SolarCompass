import React, { ChangeEvent, FC } from "react";

import LOCATIONS from "../common/Locations";
import { useAppContext } from "./Context";

const Form: FC = (): JSX.Element => {
  const { changeCoords } = useAppContext();

  const getNavigator = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        changeCoords({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      },
      (error) => {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const item = LOCATIONS.find((item) => item.name === e.target.value);
    changeCoords({ latitude: item.latitude, longitude: item.longitude });
  };

  return (
    <div className="form-group">
      <select className="form-control" onChange={handleChange}>
        {LOCATIONS.map((location) => (
          <option key={location.id} value={location.name}>
            {location.name}
          </option>
        ))}
      </select>
      <button className="btn btn-outline-secondary" onClick={getNavigator}>
        <img src="icons/location.svg" width="20" alt="Location icon" />
      </button>
    </div>
  );
};

export default Form;
