import React, { FC } from "react";

import { IDateProps } from "../../interfaces/props/IDateProps";
import { SETTINGS } from "../../common/Settings";
import { useAppContext } from "../Context";

const SliderIcon: FC<IDateProps> = (props): JSX.Element => {
  const { label, date } = props;

  const { intl } = useAppContext();

  const iconSource = `icons/${props.label}.svg`;
  const iconSize = SETTINGS.ICON_SIZE;
  const dateFormatted = date.toLocaleTimeString(intl, { timeStyle: "short" });

  return (
    <div className="slider-icon">
      <img src={iconSource} width={iconSize} height={iconSize} alt={label} />
      <span>{dateFormatted}</span>
    </div>
  );
};

export default SliderIcon;
