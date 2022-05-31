import Calc from './components/Calc';
import Clock from './components/Clock';
import { getRandomGradient } from './services/Helpers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function App() {

  document.documentElement.style.setProperty("--background-gradient", getRandomGradient());

  return (
    <div className="container">
      <div className="card">
        <Calc />
        <Clock />
      </div>
    </div>
  );
}