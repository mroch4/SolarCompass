import ILocation from "./interfaces/ILocation";
import { v4 as uuid } from "uuid";

const LOCATIONS: ILocation[] = [
  { id: uuid(), name: "Poznań", desc: "Poznań", latitude: 52.408552, longitude: 16.9338885 },
  { id: uuid(), name: "Stalowa Wola", desc: "Stalowa Wola", latitude: 50.573275451783395, longitude: 22.056781528266484 },
  { id: uuid(), name: "RPA", desc: "Western Cape", latitude: -34.833189785432, longitude: 19.999977946161064 },
  { id: uuid(), name: "Los Angeles", desc: "Los Angeles Banner", latitude: 34.1380870314891, longitude: -118.32201580745125 },
  { id: uuid(), name: "Rio de Janeiro", desc: "Jesus de Rio de Janeiro", latitude: -22.95158360844156, longitude: -43.21041778054874 },
  { id: uuid(), name: "Sydney", desc: "Sydney Opera", latitude: -33.85674439145561, longitude: 151.215299537288 },
  { id: uuid(), name: "Zero-Zero", desc: "Zero-Zero", latitude: 0, longitude: 0 },
  { id: uuid(), name: "Cancer", desc: "Cancer", latitude: 23.43636, longitude: 16.9338885 },
  { id: uuid(), name: "Capricorn", desc: "Capricorn", latitude: -23.43636, longitude: 16.9338885 },
  { id: uuid(), name: "Zero-Max", desc: "Zero-Max", latitude: 0, longitude: 179 },
  { id: uuid(), name: "Zero-Max", desc: "Zero-Max", latitude: 0, longitude: 179 },
];

export default LOCATIONS;
