import React, { FC } from "react";
import { SETTINGS } from "../common/Settings";

interface Section {
  icon: string;
  date: Date;
}

const SliderIcon: FC<Section> = (props): JSX.Element => {
  const iconSource = `icons/${props.icon}.svg`;

  return (
    <div className="slider-icon">
      <img src={iconSource} width={SETTINGS.ICON_SIZE} height={SETTINGS.ICON_SIZE} alt={props.icon} />
      <span>{props.date.toLocaleTimeString(SETTINGS.INTL, { timeStyle: "short" })}</span>
    </div>
  );
};

export default SliderIcon;
