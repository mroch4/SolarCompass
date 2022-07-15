import React, { FC, useEffect, useState } from "react";

import { IDateProps } from "../interfaces/props/IDateProps";
import Time from "./partials/_Time";
import { useAppContext } from "../hooks/useAppContext";

const Clock: FC = (): JSX.Element => {
  const { labels } = useAppContext();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setCurrentTime(new Date());
  }, [currentTime]);

  const currentTimeProps: IDateProps = {
    label: labels.CURRENT_TIME,
    date: currentTime,
  };

  return <Time {...currentTimeProps} />;
};

export default Clock;
