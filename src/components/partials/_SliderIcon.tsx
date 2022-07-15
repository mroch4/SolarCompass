import React, { FC } from "react";

import { IDateProps } from "../../interfaces/props/IDateProps";
import { useAppContext } from "../../hooks/useAppContext";

const SliderIcon: FC<IDateProps> = (props): JSX.Element => {
  const { label, date } = props;

  const { intl } = useAppContext();

  const iconSource = `icons/${props.label}.svg`;
  const iconSize = 24;
  const dateFormatted = date.toLocaleTimeString(intl, { timeStyle: "short" });

  return (
    <div className="slider-icon">
      <img src={iconSource} width={iconSize} height={iconSize} alt={label} />
      <span>{dateFormatted}</span>
    </div>
  );
};

export default SliderIcon;
