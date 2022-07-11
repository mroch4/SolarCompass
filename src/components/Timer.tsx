import React, { FC, useEffect, useState } from "react";

import LABELS from "../common/Labels";
import { SETTINGS } from "../common/Settings";

const Timer: FC = (): JSX.Element => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setCurrentTime(new Date());
  }, [currentTime]);

  return (
    <div className="section">
      <div className="label">{LABELS.CURRENT_TIME}</div>
      <span className="value">{currentTime.toLocaleTimeString(SETTINGS.INTL)}</span>
    </div>
  );
};

export default Timer;
