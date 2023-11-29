// 맨 위로 올라가게 해주는 버튼 컴포넌트
// https://velog.io/@seoyul0203/REACT%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%A8%EC%9C%84%EB%A1%9C-%EC%9D%B4%EB%8F%99%ED%95%98%EB%8A%94-%EB%B2%84%ED%8A%BC-%EB%A7%8C%EB%93%A4%EA%B8%B0-scrollTo

import React from "react";
import styled from "styled-components";
import img from "./assets/images/ui/goToTop.png";

const GotoTop = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.3s ease-in-out;

  img {
    width: 40px;
    cursor: pointer;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

function SideButton({ opacity }) {
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <GotoTop opacity={opacity}>
      <img src={img} alt="Go to Top" onClick={MoveToTop} />
    </GotoTop>
  );
}

export default SideButton;
