import React from "react";
import { Col, Row } from "reactstrap";
import News01 from "../images/News01.jpg"
import News02 from "../images/News02.jpg"
import News03 from "../images/News03.png"
import News04 from "../images/News04.jpg"

const Comp05 = props => {
    return (
        <div className="comp05">
            <div className="container body__title pt-4">
                {"Create content Social:"}
            </div>
            <div className="container mt-3 mb-3">
                Edit & create articals on Social Web, Online Press like: Ione - Vnexpress. Lostbird.vn,..
            </div>
            <div className="container">
                <Row>
                    <Col xl="6" lg="6" md="12" sm="12" xs="!2">
                        <div className="comp05__containerItem"
                            onClick={() => window.open("https://ione.vnexpress.net/si-tu-phu-huynh-vat-lon-voi-nang-nong-trong-3-ngay-thi-thpt-3944533.html", "_blank")}
                        >
                            <div className="comp05__imgItem">
                                <img
                                    alt="News01"
                                    src={News01}
                                />
                            </div>
                            <div className="comp05__contentItem">
                                <div className="title">
                                    Sĩ tử, phụ huynh vật lộn với nắng nóng trong 3 ngày thi THPT
                                </div>
                                <div className="description">
                                    Thời tiết cả nước trong 3 ngày thi THPT Quốc gia 2019 khá nóng bức khiến nhiều thí sinh lẫn phụ huynh mệt mỏi.
                                </div>
                                <div style={{fontStyle: "italic"}}>
                                    27/6/2019
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl="6" lg="6" md="12" sm="12" xs="!2">
                        <div className="comp05__containerItem"
                            onClick={() => window.open("https://ione.vnexpress.net/nha-tap-the-go-70-nam-cho-sap-khu-o-chuot-giua-thu-do-3968384.html", "_blank")}
                        >
                            <div className="comp05__imgItem">
                                <img
                                    alt="News02"
                                    src={News02}
                                />
                            </div>
                            <div className="comp05__contentItem">
                                <div className="title">
                                    Nhà tập thể gỗ 70 năm chờ sập: 'khu ổ chuột' giữa thủ đô
                                </div>
                                <div className="description">
                                    Trên con phố Hàm Tử Quan tấp nập có một khu tập thể hai tầng bằng gỗ: tối tăm, chật hẹp, dậy mùi ẩm mốc, nhiều chuột bọ và dường như sập bất cứ lúc nào.
                                </div>
                                <div style={{fontStyle: "italic"}}>
                                    17/8/2019
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl="6" lg="6" md="12" sm="12" xs="!2">
                        <div className="comp05__containerItem"
                            onClick={() => window.open("https://ione.vnexpress.net/ha-10-diem-chuan-dau-vao-lop-10-cua-thpt-thang-long-thap-ky-luc-3942948.html", "_blank")}
                        >
                            <div className="comp05__imgItem">
                                <img
                                    alt="News03"
                                    src={News03}
                                />
                            </div>
                            <div className="comp05__contentItem">
                                <div className="title">
                                    Hạ 10 điểm, chuẩn đầu vào lớp 10 của THPT Thăng Long thấp kỷ lục
                                </div>
                                <div className="description">
                                    Từng là một trong số THPT thuộc top đầu Hà Nội với điểm chuẩn dao động 48 - 52 điểm, năm 2019, trường Thăng Long gây bất ngờ khi đầu vào lớp 10 chỉ còn 30 điểm.
                                </div>
                                <div style={{fontStyle: "italic"}}>
                                    24/6/2019
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl="6" lg="6" md="12" sm="12" xs="!2">
                        <div className="comp05__containerItem"
                            onClick={() => window.open("https://ione.vnexpress.net/shawn-mendes-camila-cabello-nhung-tuong-tac-gan-gui-da-tao-nen-mot-moi-tinh-3949822.html", "_blank")}
                        >
                            <div className="comp05__imgItem">
                                <img
                                    alt="News04"
                                    src={News04}
                                />
                            </div>
                            <div className="comp05__contentItem">
                                <div className="title">
                                    Shawn Mendes - Camila Cabello: Những tương tác gần gũi đã tạo nên một mối tình?
                                </div>
                                <div className="description">
                                    Quen biết từ 2014 với nhiều đưa đẩy và lấp lửng, chỉ đến sau lần hợp tác trong "Senorita", Shawn và Camila mới để lộ những biểu hiện rõ nét hơn của một-mối-tình-sắp-đến.
                                </div>
                                <div style={{fontStyle: "italic"}}>
                                    9/7/2019
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Comp05