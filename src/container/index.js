import React from "react";
import Comp01 from "../components/Comp01";
import Comp02 from "../components/Comp02";

const Container = props => {
    return (
        <div className="body">
            <Comp01/>
            <Comp02/>
        </div>
    )
}

export default Container