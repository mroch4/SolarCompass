import React from "react";
import { INTL } from "../services/Common";
import { DaylightSection } from "../services/Interfaces";

function DailySection(props: DaylightSection): JSX.Element {
    return (
        <div className="section">
            <span className="label">{props.label}</span>
            <span className="value">{props.date.toLocaleTimeString(INTL)}</span>
        </div>
    );
}

export default DailySection;