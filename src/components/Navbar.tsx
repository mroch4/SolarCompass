import React, { FC, useRef } from "react";

import { TABS } from "../common/TabsEnum";
import { useAppContext } from "./Context";

const Layout: FC = (): JSX.Element => {
  const { tab, changeTab } = useAppContext();

  const ref = useRef<HTMLAnchorElement>(null);

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
