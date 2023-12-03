// BookCard.js

import React, { useState } from "react";
import { Card } from "reactstrap";

const BookCard = ({
  imgSrc,
  title,
  author,
  publicationDate,
  description,
  description2,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
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
          src={imgSrc}
          alt={title}
          style={{
            width: "20%",
            borderRadius: "20px",
            transition: "transform 0.3s ease-in-out",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            boxShadow:
              "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div
          style={{
            margin: "30px",
          }}
        >
          <h1 style={{ marginBottom: "50px" }}>{title}</h1>
          <h3>
            저자 <strong>{author}</strong>
          </h3>
          <h3>{publicationDate}</h3> <hr />
          <h2>
            <i>{description}</i>
          </h2>
          <p>{description2}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            책 보러 가기
          </a>
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
  );
};

export default BookCard;
