import styled from "styled-components";

const Search = () => {
  return (
    <SearchImg>
      <img src="./imgs/glass2.png" />
      <span>검색</span>
    </SearchImg>
  );
};
export default Search;
const SearchImg = styled.div`
  display: flex;
  width: 35px;
  height: 30px;
  margin: auto;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  > span {
    display: none;
  }
  &:hover > img {
    display: none;
  }
  &:hover > span {
    display: inline;
  }
`;
