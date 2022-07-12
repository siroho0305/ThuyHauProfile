import React from "react";
import About from "../images/About.jpg"

const Comp02 = props => {
    return (
        <div className="comp02">
            <div className="container" style={{display: "flex", justifyContent: "center", position: "relative"}} >
                <div className="comp02__aboutImg">
                    <img
                        src={About}
                        alt=""
                    />
                </div>
                <div className="comp02__DOB">
                    <div>
                        DOB:
                        <br/>
                        <strong>20/04/1998</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comp02