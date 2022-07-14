import { ICoordinates } from "../ICoordinates";
import { ILabels } from "../ILabels";

export interface IContextProps {
  appTime: Date;
  changeTime: (coords: Date) => void;
  coords: ICoordinates;
  changeCoords: (coords: ICoordinates) => void;
  tab: string;
  changeTab: (tab: string) => void;
  intl: string;
  changeIntl: (countryCode: string) => void;
  labels: ILabels;
}
