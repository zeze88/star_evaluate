import React from "react";
import styled from "styled-components";

const Evaluate = ({ isRandom }) => {
  const randomNum = Math.floor(Math.random() * 5);
  const [evaluate, setEvaluate] = React.useState(isRandom ? randomNum : -1);

  React.useEffect(() => {
    !isRandom &&
      window.addEventListener("keypress", (e) => {
        if (e.key >= 1 && e.key <= 5) {
          setEvaluate(e.key - 1);
        }
      });
  }, [evaluate, isRandom]);

  return (
    <StarWrap>
      {Array.from({ length: 5 }, (_, i) => {
        return (
          <Star
            isRandom={isRandom}
            key={i}
            onClick={() => {
              setEvaluate(i);
            }}
            className={i <= evaluate ? "active" : null}></Star>
        );
      })}
    </StarWrap>
  );
};

const StarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Star = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 4px;
  background-color: #eee;
  border-radius: 100%;
  ${({ isRandom }) =>
    isRandom &&
    `width: 30px;
  height: 30px;`};

  &.active {
    background-color: #c0ff7a;
  }
`;
export default Evaluate;
