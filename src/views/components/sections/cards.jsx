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
import 소설이미지 from "./image_1538033669589_2500.jpg";
import 인문이미지 from "./image_1538033669589_2500.jpg";
import 자기계발이미지 from "./image_1538033669589_2500.jpg";
import 과학이미지 from "./image_1538033669589_2500.jpg";
import 여행이미지 from "./image_1538033669589_2500.jpg";
import 컴퓨터이미지 from "./image_1538033669589_2500.jpg";
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
              <img src={소설이미지} alt="소설책 이미지" />
              <Link to="/novel">
                <Button>소설</Button>
              </Link>
            </Card>
          </Col>
          <Col md="4">
            <Card body className="card-shadow">
              <img src={인문이미지} alt="소설책 이미지" />
              <Button>인문</Button>
            </Card>
          </Col>
          <Col md="4">
            <Card body className="card-shadow">
              <img src={자기계발이미지} alt="자기계발책 이미지" />
              <Button>자기계발</Button>
            </Card>
          </Col>
          <Col md="4">
            <Card body className="card-shadow">
              <img src={과학이미지} alt="과학책 이미지" />
              <Button>과학</Button>
            </Card>
          </Col>
          <Col md="4">
            <Card body className="card-shadow">
              <img src={여행이미지} alt="여행책 이미지" />
              <Button>여행</Button>
            </Card>
          </Col>
          <Col md="4">
            <Card body className="card-shadow">
              <img src={컴퓨터이미지} alt="컴퓨터책 이미지" />
              <Button>컴퓨터/IT</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
