/* eslint-disable */
import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";

// image import
import novelImg from "./image_1538033669589_2500.jpg";
import humanitiesImg from "./image_1538033669589_2500.jpg";
import SelfdevelopmentImg from "./image_1538033669589_2500.jpg";
import scienceImg from "./image_1538033669589_2500.jpg";
import travelImg from "./image_1538033669589_2500.jpg";
import ItImg from "./image_1538033669589_2500.jpg";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Novel from "../../../pages/Novel";

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
              <img src={novelImg} alt="소설책 이미지" />
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
              <img src={humanitiesImg} alt="인문책 이미지" />
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
              <img src={SelfdevelopmentImg} alt="자기계발책 이미지" />
              <Link to="/selfDevelopment">
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
                    자기계발
                  </Button>
                </div>
              </Link>
            </Card>
          </Col>
          <Col md="4">
            <Card body className="card-shadow">
              <img src={travelImg} alt="여행책 이미지" />
              <Link to="/travel">
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
                    여행
                  </Button>
                </div>
              </Link>
            </Card>
          </Col>
          <Col md="4">
            <Card body className="card-shadow">
              <img src={ItImg} alt="컴퓨터/IT책 이미지" />
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
              <img src={scienceImg} alt="과학책 이미지" />
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
