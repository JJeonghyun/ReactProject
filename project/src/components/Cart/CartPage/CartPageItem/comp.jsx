import { useEffect } from "react";
import styled from "styled-components";

import PriceComp from "./PriceComp";

const CartPageItem = ({
  cartList,
  userCart,
  accountFn,
  accountControl,
  dbRemove,
}) => {
  useEffect(() => {
    console.log("리렌더");
  }, [cartList]);

  return (
    <MediaDiv>
      {cartList ? (
        cartList.map((item, index) => (
          <CartPageBox key={`cartpagebox-${index}`}>
            <CartPageImg key={`cartpageimg-${index}`}>
              <img src={item.Product.productImg} />
            </CartPageImg>
            <CartPageName key={`cartpagename-${index}`}>
              <CartPageSearchName key={`cartpageSearchName-${index}`}>
                {item.Product.productName}
              </CartPageSearchName>
              <CartPageNameBottom key={`cartpagceNameBottom-${index}`}>
                <CartPageName key={`cartpagename2-${index}`}>
                  수량:
                </CartPageName>
                <CartPageNameSelect key={`CartPageNameSelect-${index}`}>
                  <select
                    onChange={(e) => {
                      accountControl(e.target.value, item.productId);
                    }}
                  >
                    {accountFn(item.Product.productAccount).map(
                      (elem, index) => (
                        <option value={elem} key={index}>
                          {elem}
                        </option>
                      )
                    )}
                  </select>
                </CartPageNameSelect>
                <CartPageNameDelete key={`CartPageNameDelete-${index}`}>
                  <button
                    onClick={() => {
                      dbRemove(index, item.productId);
                      userCart();
                    }}
                  >
                    삭제하기
                  </button>
                </CartPageNameDelete>
              </CartPageNameBottom>
            </CartPageName>
            <CartPagePrice key={`CartPagePrice-${index}`}>
              ₩
              {(item.account * item.Product.productPrice)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </CartPagePrice>
          </CartPageBox>
        ))
      ) : (
        <>장바구니가 비었슴니다.</>
      )}
    </MediaDiv>
  );
};
export default CartPageItem;

const CartPageImg = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  color: white;
  background-color: black;
  justify-content: center;
  overflow: hidden;
  @media only screen and (max-width: 1250px) {
    width: 80px;
    height: 80px;
  }
  @media only screen and (max-width: 1200px) {
    width: 70px;
    height: 70px;
  }
`;
const CartPageBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 30px;
  min-width: 400px;
  margin:auto @media only screen and (max-width: 1200px) {
    width: 80%;
  }
`;
const CartPageName = styled.div`
  display: flex;
  flex-direction: column;
`;
const CartPageSearchName = styled.div`
  display: flex;
  width: 330px;
  overflow: hidden;
`;
const CartPagePrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CartPageNameBottom = styled.div`
  display: flex;
  @media only screen and (max-width: 1200px) {
    width: 50%;
  }
  padding: 2px;
  justify-content: space-between;
`;
const CartPageNameSelect = styled.div`
  display: flex;
  select {
    border: none;
  }
`;
const CartPageNameDelete = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  padding: 3px;
  button {
    border: none;
  }
`;

const MediaDiv = styled.div`
  // width: 30%;
`;
