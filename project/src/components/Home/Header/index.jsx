import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import ToHomeContainer from "./ToHome/Container";
import CategoryContainer from "./Category/Container";
import RightContainer from "./RightBanners/Container";

const Header = () => {
  const location = useLocation();
  const [scroll, setScroll] = useState(0);
  const [responWidth, setWidth] = useState(0);
  const changeScroll = () => {
    setScroll(window.scrollY || document.documentElement.scrollTop);
  };
  const changeWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
  });
  useEffect(() => {
    window.addEventListener("resize", changeWidth);
  });
  return (
    <>
      {location.pathname == "/login" ||
      location.pathname == "/regist" ||
      location.pathname == "/forgot" ? (
        <ChangeHeaderBox>
          <ToHomeContainer />
        </ChangeHeaderBox>
      ) : scroll > 0 || location.pathname !== "/" ? (
        <ChangeHeaderBox>
          <ToHomeContainer />
          <CategoryContainer scroll={scroll} />
          <RightContainer responWidth={responWidth} />
        </ChangeHeaderBox>
      ) : (
        <HeaderBox>
          <ToHomeContainer />
          <CategoryContainer />
          <RightContainer responWidth={responWidth} />
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
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 0 10px;
  color: white;
  z-index: 5;
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    color: black;
    background-color: white;
  }
  &:hover a {
    color: black;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child {
      justify-content: flex-start;
      width: fit-content;
    }
    &:nth-child(2) {
      width: fit-content;
    }
    &:last-child {
      justify-content: flex-end;
      width: fit-content;
      margin: 0;
    }
    & > div {
      padding: 0 10px;
    }
  }
  &:hover > div:last-child > div:first-child > div:first-child > div img,
  &:hover > div:last-child > div:nth-child(2) > a > div img {
    width: 24px;
    filter: invert(0);
  }

  @media only screen and (max-width: 730px) {
    & > div:nth-child(2) {
      display: none;
    }
  }
`;

const ChangeHeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: black;
  background-color: white;

  z-index: 5;
  a {
    text-decoration: none;
    color: black;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child {
      justify-content: flex-start;
      width: fit-content;
    }
    &:nth-child(2) {
      width: fit-content;
      margin: 0;
    }
    &:last-child {
      justify-content: flex-end;
      width: fit-content;
    }
    & > div {
      padding: 0 10px;
    }
  }

  & > div:last-child > div:first-child > div:first-child > div img,
  & > div:last-child > div:nth-child(2) > a > div img {
    width: 24px;
    filter: invert(0);
  }

  @media only screen and (max-width: 730px) {
    & > div:nth-child(2) {
      display: none;
    }
  }
`;
