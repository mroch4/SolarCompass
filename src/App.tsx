import React from "react";
import Clock from './components/Clock';
import Location from './components/Location';
import { getBackgroundGradient } from './services/Helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App(): JSX.Element {

  document.documentElement.style.setProperty("--background-gradient", getBackgroundGradient());

  return (
    <div className="container">
      <div className="card">
        <Clock />
        <Location />
      </div>
    </div>
  );
}

export default App;
