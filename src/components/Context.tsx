import React, { FC, createContext, useContext, useEffect, useState } from "react";

import { IContextProps } from "../interfaces/props/IContextProps";
import { IContextProviderProps } from "../interfaces/props/IContextProviderProps";
import { ICoordinates } from "../interfaces/ICoordinates";
import { LABELS } from "../common/Labels";
import LOCATIONS from "../common/Locations";
import { TABS } from "../common/TabsEnum";

const AppContext = createContext<IContextProps | null>(null);

export const useAppContext = () => {
  return useContext(AppContext);
};

const initialIntl = "pl-PL";
const getLabelsPack = (countryCode: string) => {
  const labelsPackage = LABELS.find((set) => set.intl === countryCode);
  return labelsPackage.labels;
};

const initial = {
  appTime: new Date(),
  coords: {
    latitude: LOCATIONS[0].latitude,
    longitude: LOCATIONS[0].longitude,
  },
  tab: TABS.Pri,
  labelsPackage: getLabelsPack(initialIntl),
};

const ContextProvider: FC<IContextProviderProps> = ({ children }) => {
  const [appTime, setAppTime] = useState<Date>(initial.appTime);
  const [coords, setCoords] = useState<ICoordinates>(initial.coords);
  const [tab, setTab] = useState<string>(initial.tab);
  const [intl, setIntl] = useState<string>(initialIntl);
  const [labelsPackage, setLabelsPack] = useState(initial.labelsPackage);

  useEffect(() => {
    const labelsPackage = getLabelsPack(intl);
    setLabelsPack(labelsPackage);
  }, [intl]);

  const contextValue = {
    appTime: appTime,
    changeTime: setAppTime,
    coords: coords,
    changeCoords: setCoords,
    tab: tab,
    changeTab: setTab,
    intl: intl,
    changeIntl: setIntl,
    labels: labelsPackage,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default ContextProvider;
