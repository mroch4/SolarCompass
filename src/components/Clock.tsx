import React, { FC, useEffect, useState } from "react";
import LABELS from "../common/Labels";
import { SETTINGS } from "../common/Settings";

const Clock: FC = (): JSX.Element => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section">
      <div className="label">{LABELS.CURRENT_TIME}</div>
      <span className="value">{currentTime.toLocaleTimeString(SETTINGS.INTL, { timeStyle: "medium" })}</span>
    </div>
  );
};

export default Clock;
