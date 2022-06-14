import React, { FC, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

interface Coords {
  latitude: number;
  longitude: number;
}

const Map: FC<Coords> = (props): JSX.Element => {
  const { latitude, longitude } = props;

  const handleOnFlyTo = () => {
    const map = useMap();
    map.panTo([latitude, longitude]);
  };

  useEffect(() => {
    handleOnFlyTo;
  }, [latitude, longitude]);

  return (
    <MapContainer center={[latitude, longitude]} zoom={12} scrollWheelZoom={false} style={{ width: "100%", height: "400px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}>
        <Popup>Selected Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
