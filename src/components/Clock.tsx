import React, { FC } from "react";

import { SETTINGS } from "../common/Settings";
import { useAppContext } from "./Context";

const Clock: FC = (): JSX.Element => {
  const { appTime } = useAppContext();

  const formattedValue = appTime.toLocaleString(SETTINGS.INTL);

  return (
    <div className="d-flex justify-content-end">
      <span className="value">{formattedValue}</span>
    </div>
  );
};

export default Clock;
