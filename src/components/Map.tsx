import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import React, { FC } from "react";

import { LatLng } from "leaflet";
import { useAppContext } from "./Context";

interface MapCentreProps {
  mapCentre: LatLng;
}

const Map: FC = (): JSX.Element => {
  const { coords } = useAppContext();
  const { latitude, longitude } = coords;

  const UpdateMapCentre = (props: MapCentreProps): JSX.Element => {
    const map = useMap();
    map.panTo(props.mapCentre);
    return null;
  };

  return (
    <MapContainer center={[latitude, longitude]} zoom={12} scrollWheelZoom={false} style={{ width: "100%", height: "400px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}>
        <Popup>Selected Location</Popup>
      </Marker>
      {/* <UpdateMapCentre mapCentre={{ lat: latitude, lng: longitude }} /> */}
    </MapContainer>
  );
};

export default Map;
