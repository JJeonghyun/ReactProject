import styled from "styled-components";

const Search = () => {
  return (
    <div>
      <SearchImg>
        <img src="./imgs/glass2.png" />
      </SearchImg>
    </div>
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
`;
