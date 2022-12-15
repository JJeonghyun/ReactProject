import styled from "styled-components";

import ItemContainer from "./Item/Container";

const SecondComp = () => {
  return (
    <SecondBox>
      <div>
        <div>베스트 셀러</div>
        <div>모든 상품</div>
      </div>
      <div>
        <div>
          <ItemContainer />
        </div>
      </div>
    </SecondBox>
  );
};
export default SecondComp;

const SecondBox = styled.div`
  width: 100%;
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 30px 5px;
    & > div:first-child {
      font-size: 1.7rem;
    }
  }
  & > div:last-child > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;

    & > div {
      width: 20%;
      padding: 10px;
      & > div:first-child {
        width: 100%;
        & > img {
          width: 100%;
        }
      }
    }
  }
`;
