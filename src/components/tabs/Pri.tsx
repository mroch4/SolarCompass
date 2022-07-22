import React, { FC } from "react";

import Angle from "../partials/_Angle";
import Buttons from "../Buttons";
import DateForm from "../DateForm";
import IDateProps from "../interfaces/IDateProps";
import ISectionProps from "../interfaces/ISectionProps";
import Other from "../Other";
import Section from "../partials/_Section";
import Slider from "../Slider";
import Time from "../partials/_Time";
import suncalc from "suncalc";
import useAppContext from "../../hooks/useAppContext";

const Pri: FC = (): JSX.Element => {
  const { appTime, labels, coords } = useAppContext();
  const { latitude, longitude } = coords;

  const appTimeProps: IDateProps = {
    label: labels.APP_TIME,
    date: appTime,
  };

  const currentAltitude = suncalc.getPosition(appTime, latitude, longitude).altitude;
  const shadowLength = 1 / Math.tan(currentAltitude);

  const altitudeProps: ISectionProps = {
    label: labels.SUN_ALTITUDE,
    value: currentAltitude,
  };

  const shadowProps: ISectionProps = {
    label: labels.SHADOW,
    rounding: 2,
    value: shadowLength,
  };

  return (
    <>
      <Time {...appTimeProps} />
      <Slider />
      <div className="my-2">
        <DateForm />
        <Buttons />
      </div>
      <Angle {...altitudeProps} />
      {shadowLength > 0 ? <Section {...shadowProps} /> : null}
      <Other />
    </>
  );
};

export default Pri;
