import React, { FC, createContext, useContext, useState } from "react";

import { IContextProps } from "../interfaces/props/IContextProps";
import { IContextProviderProps } from "../interfaces/props/IContextProviderProps";
import { ICoordinates } from "../interfaces/ICoordinates";
import LOCATIONS from "../common/Locations";
import { TABS } from "../common/TabsEnum";

const AppContext = createContext<IContextProps | null>(null);

export const useAppContext = () => {
  return useContext(AppContext);
};

const initial = {
  appTime: new Date(),
  coords: {
    latitude: LOCATIONS[0].latitude,
    longitude: LOCATIONS[0].longitude,
  },
  tab: TABS.Pri,
};

const ContextProvider: FC<IContextProviderProps> = ({ children }) => {
  const [appTime, setAppTime] = useState<Date>(initial.appTime);
  const [coords, setCoords] = useState<ICoordinates>(initial.coords);
  const [tab, setTab] = useState<string>(initial.tab);

  const contextValue = {
    appTime: appTime,
    changeTime: setAppTime,
    coords: coords,
    changeCoords: setCoords,
    tab: tab,
    changeTab: setTab,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default ContextProvider;
