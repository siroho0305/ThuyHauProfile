import React from "react";
import CoverImg from "../images/CoverImg.jpg"
import Avatar from "../images/Avatar.JPG"

const Comp01 = props => {
    return (
        <div className="comp01">
            <div className="container coverImage">
                <div className="comp01__coverImg">
                    <img
                        alt=""
                        src={CoverImg}
                    />
                    <div className="comp01__coverImg--fade"/>
                </div>
                <div className="comp01__infor">
                    <div className="comp01__avatar">
                        <img
                            src={Avatar}
                            alt=""
                        />
                    </div>
                    <div className="comp01__name">
                        <div className="comp01__name--main">
                            {"Nguyễn Thị Thúy Hậu"}
                        </div>
                        <div className="comp01__name--sub">
                            {"Content creator"}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Comp01