import { ICoordinates } from "../ICoordinates";

export interface IContextProps {
  appTime: Date;
  changeTime: (coords: Date) => void;
  coords: ICoordinates;
  changeCoords: (coords: ICoordinates) => void;
  tab: string;
  changeTab: (tab: string) => void;
}
