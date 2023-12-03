import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import BookCard from "./BookCard";
import SideButton from "../MoveToTop.js";

const ShowBookList = (props) => {
  const [bookDatas, setBookDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const category = props.category;

      try {
        const dataModule = await import(`../data/${category}Datas.json`);
        setBookDatas(dataModule.default || []);
      } catch (error) {
        console.error(`Error loading data for category ${category}:`, error);
        setBookDatas([]);
      }
    };

    fetchData();
  }, [props.category]);

  return (
    <>
      <div style={{ padding: "40px" }} />
      <Container>
        <Row>
          <Col md="12">
            {bookDatas.map((book, index) => (
              <BookCard key={index} {...book} />
            ))}
          </Col>
        </Row>
        <SideButton />
      </Container>
    </>
  );
};

export default ShowBookList;
