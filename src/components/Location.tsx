import { Button, Form } from "react-bootstrap";
import React, { ChangeEvent, FC } from "react";

import LOCATIONS from "../common/Locations";
import useAppContext from "../hooks/useAppContext";

const Location: FC = (): JSX.Element => {
  const { coords, changeCoords, labels } = useAppContext();
  const { latitude, longitude } = coords;

  const getNavigator = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        changeCoords({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      },
      (error) => {
        alert(`Unable to get User location.\n\nError Code = ${error.code}: ${error.message}.`);
      }
    );
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const id = e.target.value;
    if (id === "user-location") {
      getNavigator();
    } else {
      const item = LOCATIONS.find((item) => item.id === id);
      changeCoords({ latitude: item.latitude, longitude: item.longitude });
    }
  };

  const getLocationId = (): string => {
    const item = LOCATIONS.find((item) => item.latitude === latitude && item.longitude === longitude);
    if (item) {
      return item.id;
    } else {
      return "user-location";
    }
  };

  return (
    <Form className="mb-2">
      <Form.Group className="d-flex">
        <select className="form-control" value={getLocationId()} onChange={handleChange}>
          <option value="user-location">{labels.USER_LOCATION}</option>
          {LOCATIONS.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>
        <Button className="ms-1" variant="light" onClick={getNavigator}>
          <img src="icons/location.svg" width="20" alt="Location icon" />
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Location;
