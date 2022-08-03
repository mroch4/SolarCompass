import React, { FC } from "react";

import Buttons from "./Buttons";
import DateForm from "./DateForm";
import Location from "./Location";

const Header: FC = (): JSX.Element => {
  return (
    <header className="mb-3">
      <Location />
      <DateForm />
      <Buttons />
    </header>
  );
};

export default Header;
