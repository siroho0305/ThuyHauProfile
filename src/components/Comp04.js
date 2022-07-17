import React from "react";
import { Col, Row } from "reactstrap";
import MsHoaGiaoTiep from "../images/MsHoaGiaoTiep.jpg"
import Img1980books from "../images/1980books.jpg"
import ZoProject from "../images/ZoProject.jpg"
import { ArrowUpRight, Facebook } from "react-feather"

const Comp04 = props => {
    return (
        <div className="comp04">
            <div className="container body__title mt-4">
                {"Create content Social:"}
            </div>
            <div className="container">
                <Row>
                    <Col xl="12" lg="12" md="12" sm="12" xs="12">
                        <div className="comp04__containerItem pt-4">
                            <div className="comp04__contentItem">
                                <div className="comp04__imgItem">
                                    <img
                                        alt="MsHoaGiaoTiep"
                                        src={MsHoaGiaoTiep}
                                    />
                                    <div className="comp04__fb"><Facebook/></div>
                                </div>
                                <div className="comp04__titleItem">
                                    <div>Ms Hoa Giao Tiếp</div>
                                    <div
                                        onClick={() => window.open("https://www.facebook.com/tienganhgiaotiep.dinhcao", "_blank")}
                                    ><ArrowUpRight/></div>
                                </div>
                                <div>
                                    (8.2021 - now)
                                </div>
                                <div>
                                    <div>
                                        - Create content on social platforms: Facebook, Group, Website, Zalo, Email, Youtube
                                    </div>
                                    <div>
                                        - Plan marketing Campaigns
                                    </div>
                                    <div>
                                        - Support Online/ Offline Event
                                    </div>
                                    <div>
                                        - Build & care community
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl="5" lg="5" md="5" sm="12" xs="12">
                        <div className="comp04__containerItem pt-4">
                            <div className="comp04__contentItem">
                                <div className="comp04__imgItem">
                                    <img
                                        alt="Img1980books"
                                        src={Img1980books}
                                    />
                                    <div className="comp04__fb"><Facebook/></div>
                                </div>
                                <div className="comp04__titleItem">
                                    <div>1980Books</div>
                                    <div
                                        onClick={() => window.open("https://www.facebook.com/1980BOOKS.COM.VN", "_blank")}
                                    ><ArrowUpRight/></div>
                                </div>
                                <div>
                                    (6.2020 - 8.2021)
                                </div>
                                <div>
                                    <div>
                                        - Create content on Facebook
                                    </div>
                                    <div>
                                        - Support event
                                    </div>
                                    <div>
                                        - Seeding
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl="7" lg="7" md="7" sm="12" xs="12">
                        <div className="comp04__containerItem pt-4">
                            <div className="comp04__contentItem">
                                <div className="comp04__imgItem">
                                    <img
                                        alt="ZoProject"
                                        src={ZoProject}
                                    />
                                    <div className="comp04__fb"><Facebook/></div>
                                </div>
                                <div className="comp04__titleItem">
                                    <div>Zó Project</div>
                                    <div
                                        onClick={() => window.open("https://www.facebook.com/zoproject", "_blank")}
                                    ><ArrowUpRight/></div>
                                </div>
                                <div>
                                    (Part-time)
                                </div>
                                <div>
                                    <div>
                                        - Create content on Facebook
                                    </div>
                                    <div>
                                        - Support event & sale offline
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Comp04