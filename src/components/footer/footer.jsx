/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">주소</h5>
            <p>경기도 포천시 호국로 1007(선단동) 대진대학교</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">전화번호</h5>
            <p>
              TEL : 031-123-1234 <br />
              FAX : 031-122-3322
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">이메일</h5>
            <h5 className="m-b-20">
              20200769@daejin.ac.kr 20201531@daejin.ac.kr
            </h5>
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20">Social</h5>
            <div className="round-social light">
              <a href="#" className="link">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="link">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="link">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#" className="link">
                <i className="fa fa-youtube-play"></i>
              </a>
              <a href="#" className="link">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14 justify-content-between">
                <div className="m-t-10 m-b-10 copyright">
                  All Rights Reserved by WrapPixel.
                </div>
                <div className="links ms-auto m-t-10 m-b-10">
                  <a href="#" className="p-10 p-l-0">
                    Terms of Use
                  </a>
                  <a href="#" className="p-10">
                    Legal Disclaimer
                  </a>
                  <a href="#" className="p-10">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
