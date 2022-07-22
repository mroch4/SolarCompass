import React, { FC } from "react";

import IDateProps from "../interfaces/IDateProps";
import useAppContext from "../../hooks/useAppContext";

const Time: FC<IDateProps> = (props): JSX.Element => {
  const { label, date } = props;

  const { intl } = useAppContext();

  const formattedValue = date.toLocaleTimeString(intl, { hour: "2-digit", minute: "2-digit" });

  return (
    <section>
      <span className="label">{label}</span>
      <span className="value">{formattedValue}</span>
    </section>
  );
};

export default Time;
