import React, { FC, useEffect, useState } from "react";

import IDateProps from "./interfaces/IDateProps";
import Time from "./partials/_Time";
import useAppContext from "../hooks/useAppContext";

const Clock: FC = (): JSX.Element => {
  const { labels } = useAppContext();

  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    setCurrentTime(new Date());
  }, [currentTime]);

  const currentTimeProps: IDateProps = {
    label: labels.APP_TIME,
    date: currentTime,
  };

  return <Time {...currentTimeProps} />;
};

export default Clock;
