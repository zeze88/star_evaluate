import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>잘 못된 경로입니다. :)</p>
      <button
        onClick={() => {
          navigate(-1);
        }}>
        뒤로가기!
      </button>
    </div>
  );
};
export default NotFound;
