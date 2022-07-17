import React from "react";
import Slider from "react-slick";
import Photo01 from "../images/Photo01.jpg"
import Photo02 from "../images/Photo02.jpg"
import Photo03 from "../images/Photo03.jpg"
import Photo04 from "../images/Photo04.jpg"
import Photo05 from "../images/Photo05.jpg"
import Photo06 from "../images/Photo06.jpg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const Comp06 = props => {

    const res_01 = useMediaQuery({query: "(max-width: 1024px)"})
    const res_02 = useMediaQuery({query: "(max-width: 425px)"})

    const photos_list = [
        {
            id: 0,
            photo: Photo01,
        },
        {
            id: 1,
            photo: Photo02,
        },
        {
            id: 2,
            photo: Photo03,
        },
        {
            id: 3,
            photo: Photo04,
        },
        {
            id: 4,
            photo: Photo05,
        },
        {
            id: 5,
            photo: Photo06,
        },
    ]

    return (
        <div className="comp06">
            <div className="container body__title">
                {("PHOTOGRAPHER:")}
            </div>
            <div className="container">
                <Slider
                    slidesToShow={res_02 ? 1 : res_01 ? 2 : 3}
                    slidesToScroll={res_02 ? 1 : res_01 ? 2 : 3}
                    dots={true}
                    arrows={true}
                >
                    {
                        photos_list?.map((ps, index) => {
                            return (
                                <div className="comp06__slideItem"
                                    key={index}
                                >
                                    <div className="comp06__imgItem">
                                        <img
                                            src={ps?.photo}
                                            alt="ps"
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Comp06