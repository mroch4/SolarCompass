import React, { useState } from "react";

import Calc from "./Calc";

import locations from '../services/Locations';

function Location(): JSX.Element {

    const [selectedLocation, setSelectedLocation] = useState({
        "latitude": locations[0].latitude,
        "longitude": locations[0].longitude
    });

    const handleOpitonChange = (e: string) => {
        setSelectedLocation({
            "latitude": parseFloat(e.split(",")[0]),
            "longitude": parseFloat(e.split(",")[1])
        });
    };

    return (
        <>
            <div className="form-group mb-2">
                <select
                    className="form-control"
                    onChange={(e) => handleOpitonChange(e.target.value)}>
                    {locations.map((location => (
                        <option
                            key={location.id}
                            value={[location.latitude.toString(), location.longitude.toString()]}>
                            {location.name}</option>
                    )))}
                </select>
            </div>
            <Calc {...selectedLocation} />
        </>
    );
}

export default Location;