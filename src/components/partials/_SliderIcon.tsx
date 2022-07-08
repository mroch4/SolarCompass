import React, { FC } from "react";

import { IDateProps } from "../../interfaces/props/IDateProps";
import { SETTINGS } from "../../common/Settings";

const SliderIcon: FC<IDateProps> = (props): JSX.Element => {
  const iconSource = `icons/${props.label}.svg`;

  return (
    <div className="slider-icon">
      <img src={iconSource} width={SETTINGS.ICON_SIZE} height={SETTINGS.ICON_SIZE} alt={props.label} />
      <span>{props.date.toLocaleTimeString(SETTINGS.INTL, { timeStyle: "short" })}</span>
    </div>
  );
};

export default SliderIcon;
