import React, { FC } from "react";

import IDateProps from "../interfaces/IDateProps";
import Other from "../Other";
import Slider from "../Slider";
import Time from "../partials/_Time";
import useAppContext from "../../hooks/useAppContext";

const Pri: FC = (): JSX.Element => {
  const { appTime, labels } = useAppContext();

  const appTimeProps: IDateProps = {
    label: labels.APP_TIME,
    date: appTime,
  };

  return (
    <>
      <Time {...appTimeProps} />
      <Slider />
      <Other />
    </>
  );
};

export default Pri;
