import { Link } from "react-router-dom";
import styled from "styled-components";

const RightComp = () => {
  return (
    <RightCompBox>
      <Search>
        <SearchBtn>
          <button onClick={""}>검색</button>
        </SearchBtn>
        <SearchInput>
          <input type="text" name="search" onInput={""} placeholder="Search" />
        </SearchInput>
      </Search>
      <div>
        <Link to="/cart">장바구니</Link>
      </div>
      <div>
        <Link to="/login">메뉴</Link>
      </div>
    </RightCompBox>
  );
};

export default RightComp;
const RightCompBox = styled.div`
  &:hover > Search > SearchBtn > button {
    color: black;
  }
  &:hover > div > button:onclick {
  }
`;
const Search = styled.div`
  display: flex;
  & > SearchBtn > button {
    display: flex;
    border: none;
    background: none;
    color: white;
  }
  & > div > input {
    display: none;
    width: 130px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
  }
`;
const SearchInput = styled.div``;
const SearchBtn = styled.div`
  & > button {
    display: flex;
    border: none;
    background: none;
    color: white;
  }
`;
