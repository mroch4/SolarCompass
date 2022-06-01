import React from "react";
import { INTL, RADIANS_PRECISION, } from "../services/Common";
import { radiansToDegrees } from "../services/Helpers";
import { AzimuthSection } from "../services/Interfaces";

function Azimuth(props: AzimuthSection): JSX.Element {
    return (
        <div className="section">
            <span className="label">{props.label}</span>
            <span className="value">
                {
                    new Intl.NumberFormat(INTL, {
                        minimumFractionDigits: RADIANS_PRECISION
                    }).format(radiansToDegrees(props.sunPosition.azimuth))
                }
            </span>
        </div>
    );
}

export default Azimuth;