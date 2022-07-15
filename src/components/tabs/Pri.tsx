import React, { FC, useRef } from "react";

import Coordinates from "../Coordinates";
import Form from "react-bootstrap/Form";
import Location from "../Location";
import Map from "../Map";
import Slider from "../Slider";
import { useAppContext } from "../../hooks/useAppContext";

const Pri: FC = (): JSX.Element => {
  const { appTime, changeTime } = useAppContext();

  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const handleOnChange = () => {
    const dateRefVal = dateRef.current.value;
    const timeRefVal = timeRef.current.value;
    const parsedDate = Date.parse(`${dateRefVal}T${timeRefVal}`);
    const customDate = new Date(parsedDate);
    changeTime(customDate);
  };

  const datePlaceholder = appTime.toISOString().split("T")[0];
  const timePlaceholder = appTime.toISOString().split("T")[1].slice(0, 5);

  return (
    <>
      <Slider />
      <Form>
        <Form.Group className="mt-1 mb-3">
          <div className="input-group">
            <input type="date" className="form-control" value={datePlaceholder} ref={dateRef} onChange={handleOnChange} />
            <input type="time" className="form-control" value={timePlaceholder} ref={timeRef} onChange={handleOnChange} />
          </div>
        </Form.Group>
      </Form>
      <Location />
      <Map />
      <Coordinates />
    </>
  );
};

export default Pri;
