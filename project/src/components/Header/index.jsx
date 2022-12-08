import styled from "styled-components";

import ToHomeContainer from "./ToHome/Container";
import CategoryContainer from "./Category/Container";
import CartContainer from "./Cart/CartContainer";
import { useEffect, useState } from "react";
const Header = () => {
  const [scroll, setScroll] = useState(0);
  const changeScroll = () => {
    setScroll(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
  });

  console.log(scroll);
  return (
    <>
      {scroll > 0 ? (
        <ChangeHeaderBox>
          <ToHomeContainer />
          <CategoryContainer />
          <CartContainer />
        </ChangeHeaderBox>
      ) : (
        <HeaderBox>
          <ToHomeContainer />
          <CategoryContainer />
          <CartContainer />
        </HeaderBox>
      )}
    </>
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
  &:hover {
    color: black;
    background-color: white;
  }
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

const ChangeHeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: black;
  background-color: white;

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
