import React, { FC } from "react";

import Compass from "./tabs/Compass";
import Map from "./tabs/Main";
import Navbar from "./Navbar";
import Sun from "./tabs/Sun";
import { TABS } from "../common/TabsEnum";
import { useAppContext } from "./Context";

const Layout: FC = (): JSX.Element => {
  const { tab } = useAppContext();

  return (
    <div className="container mt-3">
      <Navbar />
      <div className="card">
        {tab === TABS[0] ? <Map /> : null}
        {tab === TABS[1] ? <Sun /> : null}
        {tab === TABS[2] ? <Compass /> : null}
      </div>
    </div>
  );
};

export default Layout;
