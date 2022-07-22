import { FC } from "react";
import IUpdateMapProps from "./interfaces/IUpdateMapProps";
import useAppContext from "../hooks/useAppContext";
import { useMap } from "react-leaflet";

const UpdateMap: FC<IUpdateMapProps> = (): JSX.Element => {
  const { coords } = useAppContext();
  const { latitude, longitude } = coords;

  const map = useMap();
  map.setView([latitude, longitude]);

  return null;
};

export default UpdateMap;
