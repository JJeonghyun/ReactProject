import styled from "styled-components";

import ItemContainer from "./Item/Container";

const SecondComp = ({ mainListUp, orderList, isOrder, setIsOrder }) => {
  return (
    <SecondBox>
      <div>
        <div>전체 상품들</div>
        {isOrder ? (
          <div
            onClick={() => {
              setIsOrder(false);
              mainListUp("DESC");
            }}
          >
            가격 높은순
          </div>
        ) : (
          <div
            onClick={() => {
              setIsOrder(true);
              mainListUp("ASC");
            }}
          >
            가격 낮은순
          </div>
        )}
      </div>
      <div>
        <div>
          <ItemContainer mainListUp={mainListUp} orderList={orderList} />
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
    width: 90%;
    padding: 30px 5px;
    margin: 0 auto;
    & > div {
      padding: 10px;
      width: fit-content;
      border-radius: 10px;
    }
    & > div:first-child {
      font-size: 1.7rem;
    }
    & > div:last-child {
      &:hover {
        cursor: pointer;
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
      }
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
