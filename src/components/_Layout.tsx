import { Card, Container } from "react-bootstrap";
import React, { FC } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Pri from "./tabs/Pri";
import Sec from "./tabs/Tri";
import TABS from "../common/TabsEnum";
import Tri from "./tabs/Sec";
import useAppContext from "../hooks/useAppContext";

const Layout: FC = (): JSX.Element => {
  const { tab } = useAppContext();

  return (
    <Container className="mt-3">
      <Header />
      <Navbar />
      <Card>
        {tab === TABS.Pri ? <Pri /> : null}
        {tab === TABS.Sec ? <Sec /> : null}
        {tab === TABS.Tri ? <Tri /> : null}
      </Card>
      <Footer />
    </Container>
  );
};

export default Layout;
