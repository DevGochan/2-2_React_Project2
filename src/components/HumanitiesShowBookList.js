import { useState } from "react";
import { Card, Col, Container, Row } from "reactstrap";
import img2 from "../assets/images/bookimg/novel/2.jpg";
import SideButton from "../MoveToTop.js";

const HumanitiesShowBookList = () => {
  const [hoveredImages, setHoveredImages] = useState({});

  const handleMouseEnter = (index) => {
    setHoveredImages((prevHovered) => ({ ...prevHovered, [index]: true }));
  };

  const handleMouseLeave = (index) => {
    setHoveredImages((prevHovered) => ({ ...prevHovered, [index]: false }));
  };

  return (
    <>
      <div style={{ padding: "40px" }} />{" "}
      {/* 헤더배너와 컨테이너 사이 공간을 위함 */}
      <Container>
        <Row>
          <Col md="12">
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img1"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[0] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={() => handleMouseLeave(0)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>asdf</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>수많은 청년세대의 마음에 깊은 울림을 전하고 있다.</p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[1] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>데미안</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>
                    현실에 대결하는 영혼의 발전을 담은 헤르만 헤세의 걸작
                    『데미안』. 독일 문학의 거장이자 노벨문학상 수상작가 헤르만
                    헤세의 자전적 소설이다. 1차 세계대전 직후인 1919년 에밀
                    싱클레어라는 가명으로 발표했던 작품으로, 열 살 소년이 스무
                    살 청년이 되기까지 고독하고 힘든 성장의 과정을 그리고 있다.
                    불안과 좌절에 사로잡힌 청춘의 내면을 다룬 이 작품은 지금까지
                    수많은 청년세대의 마음에 깊은 울림을 전하고 있다.
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[2] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={() => handleMouseLeave(2)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>데미안</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>
                    현실에 대결하는 영혼의 발전을 담은 헤르만 헤세의 걸작
                    『데미안』. 독일 문학의 거장이자 노벨문학상 수상작가 헤르만
                    헤세의 자전적 소설이다. 1차 세계대전 직후인 1919년 에밀
                    싱클레어라는 가명으로 발표했던 작품으로, 열 살 소년이 스무
                    살 청년이 되기까지 고독하고 힘든 성장의 과정을 그리고 있다.
                    불안과 좌절에 사로잡힌 청춘의 내면을 다룬 이 작품은 지금까지
                    수많은 청년세대의 마음에 깊은 울림을 전하고 있다.
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[1] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>데미안</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>
                    현실에 대결하는 영혼의 발전을 담은 헤르만 헤세의 걸작
                    『데미안』. 독일 문학의 거장이자 노벨문학상 수상작가 헤르만
                    헤세의 자전적 소설이다. 1차 세계대전 직후인 1919년 에밀
                    싱클레어라는 가명으로 발표했던 작품으로, 열 살 소년이 스무
                    살 청년이 되기까지 고독하고 힘든 성장의 과정을 그리고 있다.
                    불안과 좌절에 사로잡힌 청춘의 내면을 다룬 이 작품은 지금까지
                    수많은 청년세대의 마음에 깊은 울림을 전하고 있다.
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[1] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>데미안</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>
                    현실에 대결하는 영혼의 발전을 담은 헤르만 헤세의 걸작
                    『데미안』. 독일 문학의 거장이자 노벨문학상 수상작가 헤르만
                    헤세의 자전적 소설이다. 1차 세계대전 직후인 1919년 에밀
                    싱클레어라는 가명으로 발표했던 작품으로, 열 살 소년이 스무
                    살 청년이 되기까지 고독하고 힘든 성장의 과정을 그리고 있다.
                    불안과 좌절에 사로잡힌 청춘의 내면을 다룬 이 작품은 지금까지
                    수많은 청년세대의 마음에 깊은 울림을 전하고 있다.
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[1] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>데미안</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>
                    현실에 대결하는 영혼의 발전을 담은 헤르만 헤세의 걸작
                    『데미안』. 독일 문학의 거장이자 노벨문학상 수상작가 헤르만
                    헤세의 자전적 소설이다. 1차 세계대전 직후인 1919년 에밀
                    싱클레어라는 가명으로 발표했던 작품으로, 열 살 소년이 스무
                    살 청년이 되기까지 고독하고 힘든 성장의 과정을 그리고 있다.
                    불안과 좌절에 사로잡힌 청춘의 내면을 다룬 이 작품은 지금까지
                    수많은 청년세대의 마음에 깊은 울림을 전하고 있다.
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[1] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>데미안</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>
                    현실에 대결하는 영혼의 발전을 담은 헤르만 헤세의 걸작
                    『데미안』. 독일 문학의 거장이자 노벨문학상 수상작가 헤르만
                    헤세의 자전적 소설이다. 1차 세계대전 직후인 1919년 에밀
                    싱클레어라는 가명으로 발표했던 작품으로, 열 살 소년이 스무
                    살 청년이 되기까지 고독하고 힘든 성장의 과정을 그리고 있다.
                    불안과 좌절에 사로잡힌 청춘의 내면을 다룬 이 작품은 지금까지
                    수많은 청년세대의 마음에 깊은 울림을 전하고 있다.
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[1] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>데미안</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>
                    현실에 대결하는 영혼의 발전을 담은 헤르만 헤세의 걸작
                    『데미안』. 독일 문학의 거장이자 노벨문학상 수상작가 헤르만
                    헤세의 자전적 소설이다. 1차 세계대전 직후인 1919년 에밀
                    싱클레어라는 가명으로 발표했던 작품으로, 열 살 소년이 스무
                    살 청년이 되기까지 고독하고 힘든 성장의 과정을 그리고 있다.
                    불안과 좌절에 사로잡힌 청춘의 내면을 다룬 이 작품은 지금까지
                    수많은 청년세대의 마음에 깊은 울림을 전하고 있다.
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[1] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>데미안</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>
                    현실에 대결하는 영혼의 발전을 담은 헤르만 헤세의 걸작
                    『데미안』. 독일 문학의 거장이자 노벨문학상 수상작가 헤르만
                    헤세의 자전적 소설이다. 1차 세계대전 직후인 1919년 에밀
                    싱클레어라는 가명으로 발표했던 작품으로, 열 살 소년이 스무
                    살 청년이 되기까지 고독하고 힘든 성장의 과정을 그리고 있다.
                    불안과 좌절에 사로잡힌 청춘의 내면을 다룬 이 작품은 지금까지
                    수많은 청년세대의 마음에 깊은 울림을 전하고 있다.
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[1] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>데미안</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>
                    현실에 대결하는 영혼의 발전을 담은 헤르만 헤세의 걸작
                    『데미안』. 독일 문학의 거장이자 노벨문학상 수상작가 헤르만
                    헤세의 자전적 소설이다. 1차 세계대전 직후인 1919년 에밀
                    싱클레어라는 가명으로 발표했던 작품으로, 열 살 소년이 스무
                    살 청년이 되기까지 고독하고 힘든 성장의 과정을 그리고 있다.
                    불안과 좌절에 사로잡힌 청춘의 내면을 다룬 이 작품은 지금까지
                    수많은 청년세대의 마음에 깊은 울림을 전하고 있다.
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[1] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>데미안</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>
                    현실에 대결하는 영혼의 발전을 담은 헤르만 헤세의 걸작
                    『데미안』. 독일 문학의 거장이자 노벨문학상 수상작가 헤르만
                    헤세의 자전적 소설이다. 1차 세계대전 직후인 1919년 에밀
                    싱클레어라는 가명으로 발표했던 작품으로, 열 살 소년이 스무
                    살 청년이 되기까지 고독하고 힘든 성장의 과정을 그리고 있다.
                    불안과 좌절에 사로잡힌 청춘의 내면을 다룬 이 작품은 지금까지
                    수많은 청년세대의 마음에 깊은 울림을 전하고 있다.
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[1] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>데미안</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>
                    현실에 대결하는 영혼의 발전을 담은 헤르만 헤세의 걸작
                    『데미안』. 독일 문학의 거장이자 노벨문학상 수상작가 헤르만
                    헤세의 자전적 소설이다. 1차 세계대전 직후인 1919년 에밀
                    싱클레어라는 가명으로 발표했던 작품으로, 열 살 소년이 스무
                    살 청년이 되기까지 고독하고 힘든 성장의 과정을 그리고 있다.
                    불안과 좌절에 사로잡힌 청춘의 내면을 다룬 이 작품은 지금까지
                    수많은 청년세대의 마음에 깊은 울림을 전하고 있다.
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[1] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>데미안</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>
                    현실에 대결하는 영혼의 발전을 담은 헤르만 헤세의 걸작
                    『데미안』. 독일 문학의 거장이자 노벨문학상 수상작가 헤르만
                    헤세의 자전적 소설이다. 1차 세계대전 직후인 1919년 에밀
                    싱클레어라는 가명으로 발표했던 작품으로, 열 살 소년이 스무
                    살 청년이 되기까지 고독하고 힘든 성장의 과정을 그리고 있다.
                    불안과 좌절에 사로잡힌 청춘의 내면을 다룬 이 작품은 지금까지
                    수많은 청년세대의 마음에 깊은 울림을 전하고 있다.
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[1] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>데미안</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>
                    현실에 대결하는 영혼의 발전을 담은 헤르만 헤세의 걸작
                    『데미안』. 독일 문학의 거장이자 노벨문학상 수상작가 헤르만
                    헤세의 자전적 소설이다. 1차 세계대전 직후인 1919년 에밀
                    싱클레어라는 가명으로 발표했던 작품으로, 열 살 소년이 스무
                    살 청년이 되기까지 고독하고 힘든 성장의 과정을 그리고 있다.
                    불안과 좌절에 사로잡힌 청춘의 내면을 다룬 이 작품은 지금까지
                    수많은 청년세대의 마음에 깊은 울림을 전하고 있다.
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[1] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>데미안</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>
                    현실에 대결하는 영혼의 발전을 담은 헤르만 헤세의 걸작
                    『데미안』. 독일 문학의 거장이자 노벨문학상 수상작가 헤르만
                    헤세의 자전적 소설이다. 1차 세계대전 직후인 1919년 에밀
                    싱클레어라는 가명으로 발표했던 작품으로, 열 살 소년이 스무
                    살 청년이 되기까지 고독하고 힘든 성장의 과정을 그리고 있다.
                    불안과 좌절에 사로잡힌 청춘의 내면을 다룬 이 작품은 지금까지
                    수많은 청년세대의 마음에 깊은 울림을 전하고 있다.
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[1] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>데미안</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>
                    현실에 대결하는 영혼의 발전을 담은 헤르만 헤세의 걸작
                    『데미안』. 독일 문학의 거장이자 노벨문학상 수상작가 헤르만
                    헤세의 자전적 소설이다. 1차 세계대전 직후인 1919년 에밀
                    싱클레어라는 가명으로 발표했던 작품으로, 열 살 소년이 스무
                    살 청년이 되기까지 고독하고 힘든 성장의 과정을 그리고 있다.
                    불안과 좌절에 사로잡힌 청춘의 내면을 다룬 이 작품은 지금까지
                    수많은 청년세대의 마음에 깊은 울림을 전하고 있다.
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
            <Card
              body
              className="card-shadow"
              style={{
                boxShadow:
                  "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                borderRadius: "20px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "20%",
                    borderRadius: "20px",
                    transition: "transform 0.3s ease-in-out",
                    transform: hoveredImages[1] ? "scale(1.1)" : "scale(1)",
                    boxShadow:
                      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                />
                <div
                  style={{
                    margin: "30px",
                  }}
                >
                  <h1 style={{ marginBottom: "50px" }}>데미안</h1>
                  <h3>
                    <strong>헤르만 헤세</strong> 저자 | <strong>이미영</strong>{" "}
                    옮긴이
                  </h3>
                  <h3>코너스톤 2017년 01월 01일</h3> <hr />
                  <h2>
                    <i>불안한 젊음에 바치는 헤르만 헤세의 영혼의 이야기!</i>
                  </h2>
                  <p>
                    현실에 대결하는 영혼의 발전을 담은 헤르만 헤세의 걸작
                    『데미안』. 독일 문학의 거장이자 노벨문학상 수상작가 헤르만
                    헤세의 자전적 소설이다. 1차 세계대전 직후인 1919년 에밀
                    싱클레어라는 가명으로 발표했던 작품으로, 열 살 소년이 스무
                    살 청년이 되기까지 고독하고 힘든 성장의 과정을 그리고 있다.
                    불안과 좌절에 사로잡힌 청춘의 내면을 다룬 이 작품은 지금까지
                    수많은 청년세대의 마음에 깊은 울림을 전하고 있다.
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></div>
            </Card>
          </Col>
        </Row>
        <SideButton />
      </Container>
    </>
  );
};

export default HumanitiesShowBookList;
