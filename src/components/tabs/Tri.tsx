import React, { FC } from "react";

import Coordinates from "../Coordinates";
import Location from "../Location";
import Map from "../Map";

const Tri: FC = (): JSX.Element => {
  return (
    <>
      <Location />
      <Map />
      <Coordinates />
    </>
  );
};

export default Tri;
