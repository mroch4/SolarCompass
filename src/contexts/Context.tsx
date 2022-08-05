import React, { FC, createContext, useEffect, useState } from "react";

import IContext from "./interfaces/IContext";
import IContextProviderProps from "./interfaces/IContextProviderProps";
import ICoordinates from "../common/interfaces/ICoordinates";
import ILabels from "../labels/interfaces/ILabels";
import LABELS from "../labels/Labels";
import LOCATIONS from "../common/Locations";
import getLabelsPack from "../helpers/getLabelsPack";

export const AppContext = createContext<IContext | null>(null);

const initialIndex = 0;
const initialTab = LABELS[initialIndex].labels.TAB_SEC;
export const initialIntl = LABELS[initialIndex].intl;

const initial = {
  appTime: new Date(),
  coords: {
    latitude: LOCATIONS[0].latitude,
    longitude: LOCATIONS[0].longitude,
  },
  tab: initialTab,
  labelsPackage: getLabelsPack(initialIntl),
};

const ContextProvider: FC<IContextProviderProps> = ({ children }) => {
  const [appTime, setAppTime] = useState<Date>(initial.appTime);
  const [coords, setCoords] = useState<ICoordinates>(initial.coords);
  const [tab, setTab] = useState<string>(initial.tab);
  const [intl, setIntl] = useState<string>(initialIntl);
  const [labelsPackage, setLabelsPack] = useState<ILabels>(initial.labelsPackage);

  useEffect(() => {
    const labelsPackage = getLabelsPack(intl);
    setLabelsPack(labelsPackage);
  }, [intl]);

  useEffect(() => {
    const currentItem = LABELS.find((item) => item.intl === intl);
    const indexOfcurrentItem = LABELS.indexOf(currentItem);
    const secondTab = LABELS[indexOfcurrentItem].labels.TAB_SEC;
    setTab(secondTab);
  }, [intl, labelsPackage]);

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
