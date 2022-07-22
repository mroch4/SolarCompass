import React, { FC, useRef } from "react";

import { Form } from "react-bootstrap";
import useAppContext from "../hooks/useAppContext";

const DateForm: FC = (): JSX.Element => {
  const { appTime, changeTime } = useAppContext();

  const dateRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);

  const datePlaceholder = appTime.toISOString().split("T")[0];
  const timePlaceholder = appTime.toISOString().split("T")[1].slice(0, 5);

  const handleOnChange = () => {
    const dateRefVal = dateRef.current.value;
    const timeRefVal = timeRef.current.value;
    const parsedDate = Date.parse(`${dateRefVal}T${timeRefVal}`);
    const customDate = new Date(parsedDate);

    //UTC correction
    const timezoneOffset = appTime.getTimezoneOffset();

    const offsetHours = timezoneOffset / 60;
    const hours = Math.trunc(offsetHours);
    const minutes = (offsetHours - hours) * 60;

    customDate.setHours(customDate.getHours() - hours);
    customDate.setMinutes(customDate.getMinutes() - minutes);
    changeTime(customDate);
  };

  return (
    <Form className="mb-2">
      <Form.Group>
        <div className="input-group">
          <input type="date" className="form-control" value={datePlaceholder} ref={dateRef} onChange={handleOnChange} />
          <input type="time" className="form-control" value={timePlaceholder} ref={timeRef} onChange={handleOnChange} />
        </div>
      </Form.Group>
    </Form>
  );
};

export default DateForm;
