import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React, { FC } from "react";

import UpdateMapCentre from "./UpdateMapCenter";
import { useAppContext } from "./Context";

const Map: FC = (): JSX.Element => {
  const { coords } = useAppContext();
  const { latitude, longitude } = coords;

  return (
    <MapContainer center={[latitude, longitude]} zoom={12} scrollWheelZoom={false} style={{ width: "100%", height: "400px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}>
        <Popup>Selected Location</Popup>
      </Marker>
      <UpdateMapCentre center={[latitude, longitude]} />
    </MapContainer>
  );
};

export default Map;
