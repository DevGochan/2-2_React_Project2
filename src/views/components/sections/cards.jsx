/* eslint-disable */
import React from "react";
import { Card, Button, Row, Col, Container } from "reactstrap";

// image import
import novelImg from "./1.png";
import humanitiesImg from "./2.png";
import ReligionImg from "./3.png";
import scienceImg from "./6.png";
import historyImg from "./4.jpg";
import ItImg from "./5.png";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div>
      <div className="spacer" id="card-component">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">주제별 분류</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col md="4">
            <Card body className="card-shadow">
              <img
                src={novelImg}
                alt="소설책 이미지"
                style={{ borderRadius: "20px" }}
              />
              <p></p>
              <Link to="/novel">
                <div
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Button
                    style={{
                      width: "80%",
                    }}
                    outline
                    color="info"
                  >
                    소설
                  </Button>
                </div>
              </Link>
            </Card>
          </Col>
          <Col md="4">
            <Card body className="card-shadow">
              <img
                src={humanitiesImg}
                alt="인문책 이미지"
                style={{ borderRadius: "20px" }}
              />
              <p></p>
              <Link to="/humanities">
                <div
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Button
                    style={{
                      width: "80%",
                    }}
                    outline
                    color="info"
                  >
                    인문
                  </Button>
                </div>
              </Link>
            </Card>
          </Col>
          <Col md="4">
            <Card body className="card-shadow">
              <img
                src={ReligionImg}
                alt="종교책 이미지"
                style={{ borderRadius: "20px" }}
              />
              <p></p>
              <Link to="/religion">
                <div
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Button
                    style={{
                      width: "80%",
                    }}
                    outline
                    color="info"
                  >
                    종교
                  </Button>
                </div>
              </Link>
            </Card>
          </Col>
          <Col md="4">
            <Card body className="card-shadow">
              <img
                src={historyImg}
                alt="역사책 이미지"
                style={{ borderRadius: "20px" }}
              />
              <p></p>
              <Link to="/history">
                <div
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Button
                    style={{
                      width: "80%",
                    }}
                    outline
                    color="info"
                  >
                    역사
                  </Button>
                </div>
              </Link>
            </Card>
          </Col>
          <Col md="4">
            <Card body className="card-shadow">
              <img
                src={ItImg}
                alt="컴퓨터/IT책 이미지"
                style={{ borderRadius: "20px" }}
              />
              <p></p>
              <Link to="/IT">
                <div
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Button
                    style={{
                      width: "80%",
                    }}
                    outline
                    color="info"
                  >
                    컴퓨터/IT
                  </Button>
                </div>
              </Link>
            </Card>
          </Col>
          <Col md="4">
            <Card body className="card-shadow">
              <img
                src={scienceImg}
                alt="과학책 이미지"
                style={{ borderRadius: "20px" }}
              />
              <p></p>
              <Link to="/science">
                <div
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Button
                    style={{
                      width: "80%",
                    }}
                    outline
                    color="info"
                  >
                    과학
                  </Button>
                </div>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
