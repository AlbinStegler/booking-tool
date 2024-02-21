import React from "react";
import './style.css';

const ColorExplanation = () => {

    return (
        <div className="container">

            <div className="color">
                <p>TILLGÄNGLIG</p>
                <div className="color-box blue" id="available"></div>
            </div>
            <div className="color">
                <p>BOKAD</p>
                <div className="color-box red" id="booked"></div>
            </div>
            <div className="color">
                <p>VALD</p>
                <div className="color-box gray" id="selected"></div>
            </div>

        </div>
    )
}

export default ColorExplanation;