import React, { FC, createContext, useEffect, useState } from "react";

import { IContextProps } from "../interfaces/props/IContextProps";
import { IContextProviderProps } from "../interfaces/props/IContextProviderProps";
import { ICoordinates } from "../interfaces/ICoordinates";
import LOCATIONS from "../common/Locations";
import { TABS } from "../common/TabsEnum";
import { getLabelsPack } from "../helpers/getLabelsPack";

export const AppContext = createContext<IContextProps | null>(null);

const initialIntl = "pl-PL";

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
