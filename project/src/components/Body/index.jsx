import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import styled from "styled-components";

import FirstContainer from "./First/Container";
import SecondContainer from "./Second/Container";
import ThirdContainer from "./Third/Container";
import IteminfoContainer from "./Iteminfo/Container";
import CartPage from "../CartPage";
const Body = () => {
  return (
    <>
      {/* <BodyBox>
        <FirstContainer />
        <SecondContainer />
        <ThirdContainer />
      </BodyBox> */}

      <MainBox>
        <Router>
          <Routes>
            <Route path="info" element={<IteminfoContainer />} />
            <Route path="cart" element={<CartPage />} />
          </Routes>
        </Router>
      </MainBox>
    </>
  );
};

export default Body;

const BodyBox = styled.div`
  width: 100%;
`;
const MainBox = styled.div`
  font-family: "tesla";
`;
