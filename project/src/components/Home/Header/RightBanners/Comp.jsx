import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HiddenMenuContainer from "./HiddenMenu/Container";

const RightComp = ({ isSearch, onClick, tempUser, checkPath }) => {
  const [search, setSearch] = useState("");

  return (
    <RightCompBox>
      <div>
        <div>
          <div>
            {!isSearch || (
              <form
                method="get"
                action={search ? `/search?searchTerm=${search}` : "/all"}
                // onSubmit={(e)=>{
                //   if(!search){
                //     e.preventDefault()
                //     // 네비게이트
                //   }
                // }}
              >
                <input
                  type="text"
                  name="search"
                  value={search}
                  onInput={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="검색어를 입력해 주세요"
                ></input>
              </form>
            )}
          </div>
          <div onClick={onClick}>
            <img src="./imgs/glass2.png" />
          </div>
        </div>
      </div>
      <div>
        <Link to={`${tempUser ? "/cart" : checkPath}`}>
          <div>
            <img src="./imgs/cart.png" />
          </div>
        </Link>
      </div>
      <HiddenMenuContainer />
    </RightCompBox>
  );
};

export default RightComp;
const RightCompBox = styled.div`
  & > div:first-child > div:first-child {
    display: flex;
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
  & > div:first-child > div:first-child > div {
    cursor: pointer;
  }
  & > div:nth-child(2) > a > div img {
    width: 24px;
    filter: invert(1);
  }

  &:hover > div:first-child > div:first-child > div > img {
    width: 24px;
    filter: invert(0);
  }
  &:hover > div:nth-child(2) > a > div img {
    width: 24px;
    filter: invert(0);
  }
`;
