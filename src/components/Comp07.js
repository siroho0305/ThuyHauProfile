import React from "react";
import { Edit3, Camera, UserCheck, Settings } from "react-feather";
import Event01 from "../images/Event01.jpg"
import Event02 from "../images/Event02.jpg"

const Comp07 = props => {
    return (
        <div className="comp07">
            <div className="container body__title">
                {("Event Oganization:")}
            </div>
            <div className="container comp07__content">
                <div className="comp07__content--fade01">
                    <img
                        alt="Event01"
                        src={Event01}
                    />
                </div>
                <div className="comp07__contentItem">
                    <Edit3/> {("Prepare online/offline publications")}
                </div>
                <div className="comp07__contentItem">
                    <UserCheck/> {("Check-in/ Chek-out")}
                </div>
                <div className="comp07__contentItem">
                    <Settings/> {("Set up")}
                </div>
                <div className="comp07__contentItem">
                    <Camera/> {("Take photos")}
                </div>
                <div className="comp07__content--fade02">
                    <img
                        alt="Event02"
                        src={Event02}
                    />
                </div>
            </div>
        </div>
    )
}

export default Comp07