import { ICoordinates } from "../ICoordinates";

export interface IContextProps {
  appTime: Date;
  coords: ICoordinates;
  changeCoords: (coords: ICoordinates) => void;
  tab: string;
  changeTab: (tab: string) => void;
}
