import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import "./styles/styles.min.css";

import ContextProvider from "./contexts/Context";
import Layout from "./components/_Layout";
import React from "react";

function App(): JSX.Element {
  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
}

export default App;
