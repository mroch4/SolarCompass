import { FC } from "react";
import { IUpdateMapCentre } from "../interfaces/props/IUpdateMapCenter";
import { useAppContext } from "../hooks/useAppContext";
import { useMap } from "react-leaflet";

const UpdateMapCentre: FC<IUpdateMapCentre> = (): JSX.Element => {
  const { coords } = useAppContext();
  const { latitude, longitude } = coords;

  const map = useMap();
  map.setView([latitude, longitude]);

  return null;
};

export default UpdateMapCentre;
