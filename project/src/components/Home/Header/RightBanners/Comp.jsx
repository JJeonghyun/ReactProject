import { Link } from "react-router-dom";
import styled from "styled-components";

import HiddenMenuContainer from "./HiddenMenu/Container";

const RightComp = ({ isSearch, onClick }) => {
  return (
    <RightCompBox>
      <div>
        <div>
          <div>
            {isSearch ? (
              <input
                type="text"
                name="search"
                // value={searchText}
                // onInput={(e) => {
                //   setSearch(e.target.value);
                // }}
                placeholder="검색하기"
              ></input>
            ) : (
              <></>
            )}
          </div>
          <div onClick={onClick}>
            <img src="./imgs/glass2.png" />
          </div>
        </div>
      </div>
      <div>
        <Link to="/cart">장바구니</Link>
      </div>
      <HiddenMenuContainer />
    </RightCompBox>
  );
};

export default RightComp;
const RightCompBox = styled.div`
  & > div:first-child > div:first-child {
    display: flex;

    // display: none;
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }
  & > div:first-child > div:first-child > div:first-child {
    display: flex;
  }

  & > div:first-child > div:first-child > div > img {
    width: 24px;
    filter: invert(1);
  }
  &:hover > div:first-child > div:first-child > div > img {
    width: 24px;
    filter: invert(0);
  }
  &:hover > div > div:last-child > button {
    color: black;
    border: none;
  }
`;
