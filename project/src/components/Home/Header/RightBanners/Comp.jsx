import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RightComp = ({ isSearch, onClick }) => {
  const [search, setSearch] = useState("");

  return (
    <RightCompBox>
      <div>
        <div>
          <div>
            {isSearch ? (
              <form method="get" action={`/search?searchTerm=${search}`}>
                <input
                  type="text"
                  name="search"
                  value={search}
                  onInput={(e) => {
                    console.log(e.target.value);
                    setSearch(e.target.value);
                    console.log(search);
                  }}
                  placeholder="검색하기"
                ></input>
              </form>
            ) : (
              <></>
            )}
          </div>
          {/* <Link to="/search"> */}
          <div onClick={onClick}>
            <img src="./imgs/glass2.png" />
          </div>
          {/* </Link> */}
        </div>
      </div>
      <div>
        <Link to="/cart">
          <div>
            <img src="./imgs/cart.png" />
          </div>
        </Link>
      </div>
      <div>
        <Link to="/login">메뉴</Link>
      </div>
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
