import React, { FC } from "react";

import { useAppContext } from "./Context";

const Clock: FC = (): JSX.Element => {
  const { appTime, intl } = useAppContext();

  const formattedValue = appTime.toLocaleTimeString(intl, { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="d-flex justify-content-end">
      <span className="value">{formattedValue}</span>
    </div>
  );
};

export default Clock;
