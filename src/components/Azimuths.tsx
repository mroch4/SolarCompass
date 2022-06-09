import React, { FC } from "react";
import { GetTimesResult } from "suncalc";
import Labels from "../common/Labels";
import Azimuth from "./Azimuth";
import suncalc from "suncalc";

interface Azimuths {
  selectedLocation: {
    latitude: number;
    longitude: number;
  };
  solarTimes: GetTimesResult;
}

const Azimuths: FC<Azimuths> = (props): JSX.Element => {
  const { selectedLocation, solarTimes } = props;

  const currentAzimuth = suncalc.getPosition(new Date(), selectedLocation.latitude, selectedLocation.longitude).azimuth;
  const sunRiseAzimuth = suncalc.getPosition(solarTimes.sunrise, selectedLocation.latitude, selectedLocation.longitude).azimuth;
  const solarNoonAzimuth = suncalc.getPosition(solarTimes.solarNoon, selectedLocation.latitude, selectedLocation.longitude).azimuth;
  const sunSetAzimuth = suncalc.getPosition(solarTimes.sunset, selectedLocation.latitude, selectedLocation.longitude).azimuth;

  return (
    <section>
      <Azimuth label={Labels.CURRENT_AZIMUTH} value={currentAzimuth} />
      <Azimuth label={Labels.SUNRISE_AZIMUTH} value={sunRiseAzimuth} />
      <Azimuth label={Labels.SOLARNOON_AZIMUTH} value={solarNoonAzimuth} />
      <Azimuth label={Labels.SUNSET_AZIMUTH} value={sunSetAzimuth} />
    </section>
  );
};

export default Azimuths;
