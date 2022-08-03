import React, { FC } from "react";

import Coordinates from "../Coordinates";
import Map from "../Map";

const Tri: FC = (): JSX.Element => {
  return (
    <>
      <Coordinates />
      <Map />
    </>
  );
};

export default Tri;
