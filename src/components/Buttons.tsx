import React, { FC } from "react";

import { Button } from "react-bootstrap";
import useAppContext from "../hooks/useAppContext";

const Buttons: FC = (): JSX.Element => {
  const { labels, changeTime } = useAppContext();

  const buttonVariant = "outline-secondary";

  return (
    <div className="d-flex">
      <Button variant={buttonVariant} size="sm" onClick={() => changeTime(new Date(2022, 2, 20, 16, 33))}>
        III equinox
      </Button>
      <Button className="ms-1" variant={buttonVariant} size="sm" onClick={() => changeTime(new Date(2022, 5, 21, 11, 14))}>
        IV solstice
      </Button>
      <Button className="ms-1" variant={buttonVariant} size="sm" onClick={() => changeTime(new Date(2022, 8, 23, 3, 4))}>
        IX equinox
      </Button>
      <Button className="mx-1" variant={buttonVariant} size="sm" onClick={() => changeTime(new Date(2022, 11, 21, 22, 48))}>
        XII solstice
      </Button>
      <Button variant="outline-danger" size="sm" onClick={() => changeTime(new Date())}>
        {labels.BUTTON_NOW}
      </Button>
    </div>
  );
};

export default Buttons;
