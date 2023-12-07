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
import ReligionImg from "./image_1538033669589_2500.jpg";
import scienceImg from "./image_1538033669589_2500.jpg";
import historyImg from "./image_1538033669589_2500.jpg";
import ItImg from "./image_1538033669589_2500.jpg";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Novel from "../../../pages/Novel";

const Cards = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md="6">
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
          <Col md="6">
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
          <Col md="6">
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
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
