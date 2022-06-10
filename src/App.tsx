import React from "react";
import Layout from "./components/Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import "./index.css";

function App(): JSX.Element {
  return (
    <div className="container mt-3">
      <Layout />
    </div>
  );
}

export default App;
