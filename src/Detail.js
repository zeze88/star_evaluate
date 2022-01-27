import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Evaluate from "./Evaluate";

const Detail = ({ targetDay }) => {
  targetDay = targetDay.current;

  return (
    <>
      <TargetDay>
        <span>{targetDay}요일 </span> 평점 남기기
      </TargetDay>
      <Evaluate isRandom={false} />
      <SubminBtn style={{ textAlign: "right" }}>
        <Link to="/">
          <button>평점남기기</button>
        </Link>
      </SubminBtn>
    </>
  );
};

const TargetDay = styled.h2`
  text-align: center;
  span {
    display: inline-block;
    padding: 10px;
    border-radius: 4px;
    background-color: #fff;
  }
`;

const SubminBtn = styled.div`
  margin: 20px;

  button {
    color: #fff;
    background-color: #189fff;
    border: none;
    border-radius: 4px;
    padding: 6px;
    transition: all 0.3s;

    &:hover {
      background-color: #008aff;
    }
  }
`;

export default Detail;
