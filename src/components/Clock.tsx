import React, { FC } from "react";

import LABELS from "../common/Labels";
import { SETTINGS } from "../common/Settings";
import { useAppContext } from "./Context";

const Clock: FC = (): JSX.Element => {
  const { appTime } = useAppContext();

  const formattedValue = appTime.toLocaleTimeString(SETTINGS.INTL, { timeStyle: "medium" });

  return (
    <div className="section">
      <div className="label">{LABELS.CURRENT_TIME}</div>
      <span className="value">{formattedValue}</span>
    </div>
  );
};

export default Clock;
