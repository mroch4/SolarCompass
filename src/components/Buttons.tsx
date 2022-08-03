import React, { FC } from "react";

import { Button } from "react-bootstrap";
import useAppContext from "../hooks/useAppContext";

const Buttons: FC = (): JSX.Element => {
  const { labels, changeTime } = useAppContext();

  const buttonVariant = "light text-wrap";

  return (
    <div className="d-flex justify-content-between">
      <Button variant={buttonVariant} size="sm" onClick={() => changeTime(new Date(2022, 2, 20, 16, 33))}>
        {labels.BUTTON_III_EQUNIOX}
      </Button>
      <Button className="mx-1" variant={buttonVariant} size="sm" onClick={() => changeTime(new Date(2022, 5, 21, 11, 14))}>
        {labels.BUTTON_IV_SOLSTICE}
      </Button>
      <Button variant={buttonVariant} size="sm" onClick={() => changeTime(new Date(2022, 8, 23, 3, 4))}>
        {labels.BUTTON_IX_EQUNIOX}
      </Button>
      <Button className="mx-1" variant={buttonVariant} size="sm" onClick={() => changeTime(new Date(2022, 11, 21, 22, 48))}>
        {labels.BUTTON_XII_SOLSTICE}
      </Button>
      <Button variant="danger" size="sm" onClick={() => changeTime(new Date())}>
        {labels.BUTTON_NOW}
      </Button>
    </div>
  );
};

export default Buttons;
