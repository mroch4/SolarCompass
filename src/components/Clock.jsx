import { useEffect, useState } from "react";
import { INTL } from "../services/Common";

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setCurrentTime(new Date());
  }, [currentTime]);

  return (
    <div className="section">
      <span className="label">Bieżący czas:</span>
      <span className="value">{currentTime.toLocaleTimeString(INTL)}</span>
    </div>
  );
}
