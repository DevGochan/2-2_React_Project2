import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Container, Row, Col } from "reactstrap";

const MainHeaderBanner = () => {
  return (
    <div className="static-slider-head">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">Welcome to the library!</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const HeaderBanner = (props) => {
  return (
    <div className="static-slider-head">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">{props.category}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainHeaderBanner;
