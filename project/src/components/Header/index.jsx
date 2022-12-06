import styled from "styled-components";

import ToHomeContainer from "./ToHome/Container";
import CategoryContainer from "./Category/Container";
import CartContainer from "./Cart/CartContainer";
const Header = () => {
  return (
    <HeaderBox>
      <ToHomeContainer />
      <CategoryContainer />
      <CartContainer />
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
  z-index: 5;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child {
      justify-content: flex-start;
      width: 20%;
    }
    &:nth-child(2) {
      width: 58%;
    }
    &:last-child {
      justify-content: flex-end;
      width: 20%;
    }
    & > div {
      padding: 0 10px;
    }
  }
`;
