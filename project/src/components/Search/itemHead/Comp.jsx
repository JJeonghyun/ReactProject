import { useEffect } from "react";
import styled from "styled-components";
const ItemHeadComp = ({ result, searchResult }) => {
  useEffect(() => {
    searchResult();
  }, []);

  return (
    <>
      <ItemheadBox>{result.search}에 대한 검색결과</ItemheadBox>
    </>
  );
};

export default ItemHeadComp;

const ItemheadBox = styled.div`
  display: flex;
  margin-top: 100px;
  height: 40px;
  justify-content: center;
`;
