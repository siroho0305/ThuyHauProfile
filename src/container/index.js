import React from "react";
import Comp01 from "../components/Comp01";
import Comp02 from "../components/Comp02";
import Comp03 from "../components/Comp03";
import Comp04 from "../components/Comp04";
import Comp05 from "../components/Comp05";
import Comp06 from "../components/Comp06";
import Comp07 from "../components/Comp07";
import Comp08 from "../components/Comp08";

const Container = props => {
    return (
        <div className="body">
            <Comp01/>
            <Comp02/>
            <Comp03/>
            <Comp04/>
            <Comp05/>
            <Comp06/>
            <Comp07/>
            <Comp08/>
        </div>
    )
}

export default Container