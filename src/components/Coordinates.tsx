import React from "react";
import { INTL, RADIANS_PRECISION } from "../services/Common";
import { getLatitudeSign, getLongitudeSign, degreesStringBuilder } from "../services/Helpers";
import { CoordsSection } from "../services/Interfaces";

function Coordinates(props: CoordsSection): JSX.Element {
    return (
        <div className="section">
            <span className="label">{props.label}</span>
            <span className="value">
                {
                    new Intl.NumberFormat(INTL, {
                        minimumFractionDigits: RADIANS_PRECISION,
                    }).format(props.coordinate)
                }
                <br />
                {degreesStringBuilder(props.coordinate)} &nbsp;
                {
                    props.NS ?
                        getLatitudeSign(props.coordinate) :
                        getLongitudeSign(props.coordinate)
                }
            </span>
        </div>
    );
}

export default Coordinates;
