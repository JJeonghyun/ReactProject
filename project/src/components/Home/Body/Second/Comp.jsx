import styled from "styled-components";

import ItemContainer from "./Item/Container";

const SecondComp = ({ mainListUp, orderList, isOrder, setIsOrder }) => {
  return (
    <SecondBox>
      <div>
        <div>가격순</div>
        {isOrder ? (
          <div
            onClick={() => {
              setIsOrder(false);
              mainListUp("DESC");
            }}
          >
            높은 순
          </div>
        ) : (
          <div
            onClick={() => {
              setIsOrder(true);
              mainListUp("ASC");
            }}
          >
            낮은 순
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
