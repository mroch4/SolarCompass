interface Location {
    id: number,
    name: string,
    desc: string,
    latitude: number,
    longitude: number
};

interface Coords {
    latitude: number,
    longitude: number
};

export {
    Location,
    Coords
};