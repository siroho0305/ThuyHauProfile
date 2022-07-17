import React from "react";
import { Facebook, Mail, Phone } from "react-feather";
import { Col, Row } from "reactstrap";
import Contact from "../images/Contact.JPG"

const Comp08 = props => {
    return (
        <div className="pt-5 pb-5 comp08">
            <div className="container">
                <Row>
                    <Col xl="6" lg="6" md="6" sm="12" xs="12">
                        <div className="comp08__itemCol content">
                            <div className="comp08__title">
                                Contact
                            </div>
                            <div>
                                <Phone className="phone"/> Phone/Zalo: <strong>0389657070</strong>
                            </div>
                            <div>
                                <Mail className="mail" /> Email: <strong>hauthuynguyenn@gmail.com</strong>
                            </div>
                            <div>
                                <Facebook className="fb" /> Facebook: <strong><a href="https://www.facebook.com/hau.thuy.562" target={"_blank"} rel={"noreferrer"}>Hậu Thúy</a></strong>
                            </div>
                        </div>
                    </Col>
                    <Col xl="6" lg="6" md="6" sm="12" xs="12">
                        <div className="comp08__itemCol">
                            <div className="comp08__img">
                                <div className="comp08__img--container">
                                    <div>
                                        <img
                                            src={Contact}
                                            alt="Contact"
                                        />
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

export default Comp08