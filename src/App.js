import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Detail from "./Detail";
import NotFound from "./NotFound";

function App() {
  const targetDay = React.useRef(null);
  let weekKoVersion = ["일", "월", "화", "수", "목", "금", "토"];

  const today = new Date().getDay();
  let passDay = weekKoVersion.splice(0, today);
  weekKoVersion = weekKoVersion.concat(passDay);

  return (
    <div className="App">
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <Home weekDay={weekKoVersion} targetDay={targetDay} />
            }></Route>

          <Route
            path="/detail"
            element={<Detail targetDay={targetDay} />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 280px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;

  h1 {
    text-align: center;
    font-size: 1.2rem;
  }
`;

export default App;
