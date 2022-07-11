import React, { FC } from "react";

import Clock from "./Clock";
import Navbar from "./Navbar";
import Pri from "./tabs/Pri";
import Sec from "./tabs/Sec";
import { TABS } from "../common/TabsEnum";
import Tri from "./tabs/Tri";
import { useAppContext } from "./Context";

const Layout: FC = (): JSX.Element => {
  const { tab } = useAppContext();

  return (
    <div className="container mt-3">
      <Clock />
      <Navbar />
      <div className="card">
        {tab === TABS.Pri ? <Pri /> : null}
        {tab === TABS.Sec ? <Sec /> : null}
        {tab === TABS.Tri ? <Tri /> : null}
      </div>
    </div>
  );
};

export default Layout;
