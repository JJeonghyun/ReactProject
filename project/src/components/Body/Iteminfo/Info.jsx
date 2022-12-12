import { useState } from "react";
import styled from "styled-components";
import InfoAdd from "./InfoAdd";
const InfoComponent = () => {
  const [itemNum, setItemNum] = useState(1);
  return (
    <MainBox>
      <Iteminfo>
        <div>
          <Fbox>
            <h3 className="itemModel">Model 3 18"/19"</h3>
            <span className="itemName">스노우 체인</span>
          </Fbox>
          <h4 className="itemPrice">₩173,000</h4>
        </div>
        <div>
          <span className="itemNum">수량</span>
          <NumBox>
            <BtnNum
              onClick={() => {
                setItemNum(itemNum - 1);
              }}
            >
              -
            </BtnNum>
            {itemNum}
            <BtnNum
              onClick={() => {
                setItemNum(itemNum + 1);
              }}
            >
              +
            </BtnNum>
          </NumBox>
        </div>
        <div>
          <AddCartBtn>장바구니에 추가</AddCartBtn>
        </div>
      </Iteminfo>
      <InfoAdd></InfoAdd>
    </MainBox>
  );
};

export default InfoComponent;

const Fbox = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
`;

const MainBox = styled.div`
  padding: 50px;
  padding-top: 0;
`;

const BtnNum = styled.button`
  width: 20px;
  background: none;
  border: none;
  font-weight: Bold;
  font-size: 20px;
  opacity: 0.4;
`;

const NumBox = styled.div`
  display: flex;
  font-weight: Bold;
  font-size: 20px;
  align-items: center;
  justify-content: flex-start;
  > Button {
    margin-left: 10px;
    margin-right: 10px;
  }
  > Button:first-child {
    margin-left: 0;
  }
`;

const AddCartBtn = styled.button`
  width: 75%;
  padding: 1rem;
  background-color: #3e6ae1;
  color: white;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
`;

const Iteminfo = styled.div`
  > div {
    margin-bottom: 15px;
  }
  > div:last-child {
    margin-bottom: 45px;
  }
`;
