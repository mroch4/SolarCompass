import React, { useEffect, useState } from "react";

import { INTL } from "../services/Common";

function Clock(): JSX.Element {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setCurrentTime(new Date());
  }, [currentTime]);

  return (
    <div className="section">
      <span className="label">Bieżący czas:</span>
      <span className="value">{currentTime.toLocaleTimeString(INTL)}</span>
    </div>
  );
}

export default Clock;
