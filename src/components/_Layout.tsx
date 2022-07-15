import { Card, Container } from "react-bootstrap";
import React, { FC } from "react";

import { IDateProps } from "../interfaces/props/IDateProps";
import Language from "./Language";
import Navbar from "./Navbar";
import Pri from "./tabs/Pri";
import Sec from "./tabs/Sec";
import { TABS } from "../common/TabsEnum";
import Time from "./partials/_Time";
import Tri from "./tabs/Tri";
import { useAppContext } from "../hooks/useAppContext";

const Layout: FC = (): JSX.Element => {
  const { appTime, tab } = useAppContext();

  const appTimeProps: IDateProps = {
    label: "App Time:",
    date: appTime,
  };

  return (
    <Container>
      <Time {...appTimeProps} />
      <Navbar />
      <Card>
        {tab === TABS.Pri ? <Pri /> : null}
        {tab === TABS.Sec ? <Sec /> : null}
        {tab === TABS.Tri ? <Tri /> : null}
      </Card>
      <Language />
    </Container>
  );
};

export default Layout;
