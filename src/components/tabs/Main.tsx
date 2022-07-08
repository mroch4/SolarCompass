import React, { FC } from "react";

import Coordinates from "../Coordinates";
import Form from "../Form";
import Map from "../Map";

const Main: FC = (): JSX.Element => {
  return (
    <>
      <Form />
      <Coordinates />
      <Map />
    </>
  );
};

export default Main;
