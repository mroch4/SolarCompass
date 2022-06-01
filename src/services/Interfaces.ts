import { GetSunPositionResult } from "suncalc";

export interface AzimuthSection {
    label: string,
    sunPosition: GetSunPositionResult
}

export interface CoordsSection {
    label: string,
    coordinate: number,
    NS: boolean
}

export interface DaylightSection {
    label: string,
    date: Date
}

export interface Location {
    id: number,
    name: string,
    desc: string,
    latitude: number,
    longitude: number
};

export interface Coords {
    latitude: number,
    longitude: number
};
