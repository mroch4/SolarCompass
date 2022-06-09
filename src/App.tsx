import React from "react";
import Layout from "./components/Layout";
import GRADIENTS from "./common/Gradients";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const getBackgroundGradient = (): string => {
  const randomNumber: number = Math.floor(GRADIENTS.length * Math.random());
  return `${GRADIENTS[randomNumber]}`;
};

function App(): JSX.Element {
  document.documentElement.style.setProperty("--background-gradient", getBackgroundGradient());

  return (
    <div className="container mt-3">
      <Layout />
    </div>
  );
}

export default App;
