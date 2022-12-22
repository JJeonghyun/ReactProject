import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "../../../font/font.css";
import styled from "styled-components";

import FirstContainer from "./First/Container";
import SecondContainer from "./Second/Container";
import ThirdContainer from "./Third/Container";
const Body = () => {
  return (
    <>
      <BodyBox>
        <FirstContainer />
        <SecondContainer />
        <ThirdContainer />
      </BodyBox>
    </>
  );
};

export default Body;

const BodyBox = styled.div`
  width: 100%;
`;
