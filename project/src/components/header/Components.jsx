import styled from "styled-components";
import Search from "./HeaderSearch/Components";
import Cart from "./HeadCart/Components";
import { useState } from "react";
const HeadComponent = () => {
  return (
    <>
      <HeadBox>
        <MunuLeft>
          <span>TESLA</span>
          <span>shop</span>
        </MunuLeft>
        <MenuMiddle>
          <span>충전</span>
          <span>차량 액세서리</span>
          <span>의류</span>
          <span>라이프스타일</span>
          <span>서비스 설치</span>
        </MenuMiddle>
        <MenuRight>
          <Search />
          <Cart />
          <span>메뉴</span>
        </MenuRight>
      </HeadBox>
    </>
  );
};

export default HeadComponent;

const HeadBox = styled.div`
  display: felx;
  width: 100%;
  height: 50px;
  border: 1px solid black;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;
const MunuLeft = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-between;
  > span {
    margin-left: 7px;
  }
`;

const MenuMiddle = styled.div`
  display: felx;
  margin: 10px;
  justify-content: space-between;
  > span {
    margin-left: 7px;
  }
  & > span:hover {
    background-color: rgba(227, 241, 241, 0.5);
  }
`;
const MenuRight = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  > span {
    margin-left: 7px;
  }
  & > span:hover {
    background-color: rgba(227, 241, 241, 0.5);
  }
`;
