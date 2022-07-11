import React, { FC } from "react";

import Angle from "../partials/_Angle";
import { ISectionProps } from "../../interfaces/props/ISectionProps";
import LABELS from "../../common/Labels";
import Section from "../partials/_Section";
import suncalc from "suncalc";
import { useAppContext } from "../Context";

const Tri: FC = (): JSX.Element => {
  const { appTime, coords } = useAppContext();
  const { latitude, longitude } = coords;

  const currentAltitude = suncalc.getPosition(appTime, latitude, longitude).altitude;
  const altitudeProps: ISectionProps = {
    label: LABELS.CURRENT_ALTITUDE,
    value: currentAltitude,
  };

  const shadowLength = 1 / Math.tan(currentAltitude);
  const shadowProps: ISectionProps = {
    label: LABELS.SHADOW_LENGTH,
    rounding: 2,
    value: shadowLength,
  };

  return (
    <>
      <Angle {...altitudeProps} />
      {shadowLength > 0 ? <Section {...shadowProps} /> : null}
    </>
  );
};

export default Tri;
