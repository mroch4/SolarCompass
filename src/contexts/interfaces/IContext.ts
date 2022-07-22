import ICoordinates from "../../common/interfaces/ICoordinates";
import ILabels from "../../labels/interfaces/ILabels";

interface IContext {
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

export default IContext;
