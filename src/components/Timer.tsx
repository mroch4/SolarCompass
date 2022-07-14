import React, { FC, useEffect, useState } from "react";

import { useAppContext } from "./Context";

const Timer: FC = (): JSX.Element => {
  const { labels, intl } = useAppContext();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setCurrentTime(new Date());
  }, [currentTime]);

  const label = labels.CURRENT_TIME;
  const formattedValue = currentTime.toLocaleTimeString(intl, { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="section">
      <div className="label">{label}</div>
      <span className="value">{formattedValue}</span>
    </div>
  );
};

export default Timer;
