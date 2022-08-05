import React, { FC, useRef } from "react";

import useAppContext from "../hooks/useAppContext";

const Layout: FC = (): JSX.Element => {
  const { tab, changeTab, labels } = useAppContext();

  const ref = useRef<HTMLAnchorElement>(null);

  const TABS = {
    Pri: labels.TAB_PRI,
    Sec: labels.TAB_SEC,
    Tri: labels.TAB_TRI,
  };

  return (
    <ul className="nav nav-tabs">
      {Object.entries(TABS).map(([key, value]) => (
        <li key={key} className="nav-item">
          <a className={tab === value ? "nav-link active" : "nav-link"} ref={ref} onClick={() => changeTab(value)}>
            {value.toUpperCase()}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Layout;
