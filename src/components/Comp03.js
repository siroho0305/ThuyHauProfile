import React from "react";
import { Camera, Feather, Film, Globe, PenTool, Users } from "react-feather";
import { Row, Col } from "reactstrap";

const Comp03 = props => {
    return (
        <div className="comp03 pb-4">
            <div className="container body__title mt-4">
                {"Skills:"}
            </div>
            <div className="container pb-5">
                <Row>
                    <Col xl="6" lg="6" md="6" sm="6" xs="6">
                        <div className="comp03__item">
                            <div className="comp03__icon">
                                <Globe style={{color: "#17a2b8"}}/>
                            </div>
                            <div className="comp03__value">
                                <span>{"English:"}</span> <strong>TOEIC 665</strong>
                            </div>
                        </div>
                    </Col>
                    <Col xl="6" lg="6" md="6" sm="6" xs="6">
                        <div className="comp03__item">
                            <div className="comp03__icon">
                                <PenTool style={{color: "#28a745"}}/>
                            </div>
                            <div className="comp03__value">
                                <strong>Content Brand, Funnel, Ads, SEO Web, Youtube</strong>
                            </div>
                        </div>
                    </Col>
                    <Col xl="6" lg="6" md="6" sm="6" xs="6">
                        <div className="comp03__item">
                            <div className="comp03__icon">
                                <Feather style={{color: "#007bff"}}/>
                            </div>
                            <div className="comp03__value">
                                <span>{"Design:"}</span> <strong>Photoshop, Canva</strong>
                            </div>
                        </div>
                    </Col>
                    <Col xl="6" lg="6" md="6" sm="6" xs="6">
                        <div className="comp03__item">
                            <div className="comp03__icon">
                                <Film/>
                            </div>
                            <div className="comp03__value">
                                <span>{"Edit video:"}</span> <strong>Premiere, CapCut</strong>
                            </div>
                        </div>
                    </Col>
                    <Col xl="6" lg="6" md="6" sm="6" xs="6">
                        <div className="comp03__item">
                            <div className="comp03__icon">
                                <Users style={{color: "#ffc107"}}/>
                            </div>
                            <div className="comp03__value">
                                <strong>Organize event</strong>
                            </div>
                        </div>
                    </Col>
                    
                    <Col xl="6" lg="6" md="6" sm="6" xs="6">
                        <div className="comp03__item">
                            <div className="comp03__icon">
                                <Camera style={{color: "#dc3545"}}/>
                            </div>
                            <div className="comp03__value">
                                <strong>Photographer</strong>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Comp03