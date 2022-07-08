import { ILocation } from "../interfaces/ILocation";

const LOCATIONS: ILocation[] = [
  { id: 1, name: "Poznań", desc: "Poznań", latitude: 52.408552, longitude: 16.9338885 },
  { id: 2, name: "Stalowa Wola", desc: "Stalowa Wola", latitude: 50.573275451783395, longitude: 22.056781528266484 },
  { id: 3, name: "RPA", desc: "Western Cape", latitude: -34.833189785432, longitude: 19.999977946161064 },
  { id: 4, name: "Los Angeles", desc: "Los Angeles Banner", latitude: 34.1380870314891, longitude: -118.32201580745125 },
  { id: 5, name: "Rio de Janeiro", desc: "Jesus de Rio de Janeiro", latitude: -22.95158360844156, longitude: -43.21041778054874 },
  { id: 6, name: "Sydney", desc: "Sydney Opera", latitude: -33.85674439145561, longitude: 151.215299537288 },
  // { id: 7, name: "Zero-Min", desc: "Zero-Min", latitude: 0, longitude: -179 },
  // { id: 8, name: "Zero-Zero", desc: "Zero-Zero", latitude: 0, longitude: 0 },
  // { id: 9, name: "Zero-Max", desc: "Zero-Max", latitude: 0, longitude: 179 },
];

export default LOCATIONS;
