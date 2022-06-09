interface Location {
  id: number;
  name: string;
  desc: string;
  latitude: number;
  longitude: number;
}

const LOCATIONS: Location[] = [
  { id: 1, name: "Poznań", desc: "Poznań, os. Kosmonautów", latitude: 52.43932373054467, longitude: 16.94239674926772 },
  { id: 2, name: "Los Angeles", desc: "Los Angeles Banner", latitude: 34.1380870314891, longitude: -118.32201580745125 },
  { id: 3, name: "Rio de Janeiro", desc: "Jesus de Rio de Janeiro", latitude: -22.95158360844156, longitude: -43.21041778054874 },
  { id: 4, name: "Sydney", desc: "Sydney Opera", latitude: -33.85674439145561, longitude: 151.215299537288 },
  { id: 5, name: "Min-Min", desc: "Min-Min", latitude: -89, longitude: -179 },
  { id: 6, name: "Min-Zero", desc: "Min-Zero", latitude: -89, longitude: 0 },
  { id: 7, name: "Zero-Min", desc: "Zero-Min", latitude: 0, longitude: -179 },
  { id: 8, name: "Zero-Zero", desc: "Zero-Zero", latitude: 0, longitude: 0 },
  { id: 9, name: "Zero-Max", desc: "Zero-Max", latitude: 0, longitude: 179 },
  { id: 10, name: "Max-Zero", desc: "Max-Zero", latitude: 89, longitude: 0 },
  { id: 11, name: "Max-Max", desc: "Zero-Max", latitude: 89, longitude: 179 },
];

export default LOCATIONS;
