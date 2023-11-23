import { useState } from "react";
import { Button, Card, Col, Container, Row } from "reactstrap";
import Cards from "../views/components/sections/cards";
import { Link } from "react-router-dom";
import img2 from "../assets/images/bookimg/novel/2.jpg";

const ShowBookList = () => {
  const [isHovered, setHovered] = useState(false);

  return (
    <>
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
          <Col md="12">
            <Card
              body
              className="card-shadow"
              style={{
                border: "#A2A2A2 3px solid",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "3%",
                    transition: "transform 0.3s ease-in-out",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  {/* Add your text content here */}
                  <h3>Text on the right</h3>
                  <p>Additional information goes here.</p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                {/* <Button
                    style={{
                      width: "80%",
                    }}
                    outline
                    color="info"
                  >
                    소설
                  </Button> */}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShowBookList;
