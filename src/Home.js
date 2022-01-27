import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Evaluate from "./Evaluate";

const Home = ({ weekDay, targetDay }) => {
  // eslint-disable-next-line
  const navigate = useNavigate();

  return (
    <>
      <h1> 내 일주일은?</h1>
      <div>
        {weekDay.map((v) => {
          return (
            <WeekList key={v} ref={targetDay}>
              <span>{v}</span>
              <Evaluate isRandom={true}></Evaluate>
              <Btn
                onClick={() => {
                  navigate("/detail");
                  targetDay.current = v;
                }}>
                go
              </Btn>
            </WeekList>
          );
        })}
      </div>
    </>
  );
};

const WeekList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;

  > div {
    flex: auto;
  }
`;

const Btn = styled.button`
  color: #fff;
  background-color: #189fff;
  border: none;
  border-radius: 4px;
  padding: 6px;
  transition: all 0.3s;

  &:hover {
    background-color: #008aff;
  }
`;
export default Home;
