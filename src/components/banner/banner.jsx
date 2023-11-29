import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

const MainHeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title">진혁이와 해찬이의 도서관</h1>
                        <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-14">이부분에 검색창 구현</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export const NovelHeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title">소설</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export const HumanitiesHeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title">인문</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export const SelfDevelopmentHeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title">자기계발</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export const TravelHeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title">여행</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export const ITHeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title">컴퓨터/IT</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export const ScienceHeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title">과학</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainHeaderBanner;