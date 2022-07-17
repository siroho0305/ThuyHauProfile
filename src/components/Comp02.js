import React from "react";
import About from "../images/About.jpg"
import School from "../images/School.jpg"
import College from "../images/College.jpg"
const Comp02 = props => {
    return (
        <div className="comp02">
            <div className="container body__title mt-4">
                {"About:"}
            </div>
            <div className="container mb-4" style={{display: "flex", justifyContent: "center", position: "relative", marginTop: "20px"}} >
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
                <div className="comp02__edu">
                    <div>
                        Education:
                        <br/>
                        <strong>University of Social Science & Humanity</strong>
                    </div>
                </div>
                <div className="comp02__school">
                    <img
                        alt="school"
                        src={School}
                    />
                </div>
                <div className="comp02__college">
                    <img
                        alt="school"
                        src={College}
                    />
                </div>
                <div className="comp02__major">
                    <div>
                        Major:
                        <br/>
                        <strong>Journalism</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comp02