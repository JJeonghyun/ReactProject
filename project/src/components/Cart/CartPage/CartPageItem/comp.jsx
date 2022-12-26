import { useEffect } from "react";
import styled from "styled-components";
import { Boxbox } from "../../../Common";

import PriceComp from "./PriceComp";

const CartPageItem = ({
  cartList,
  userCart,
  accountFn,
  accountControl,
  dbRemove,
}) => {
  console.log(cartList);
  return (
    <MediaDiv>
      {cartList.length != 0 ? (
        cartList.map((item, index) => (
          <CartPageBox key={`cartpagebox-${index}`}>
            <CartPageImg key={`cartpageimg-${index}`}>
              <Boxbox>
                <img src={item.Product.productImg} />
              </Boxbox>
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
                      (item, index) => (
                        <option value={item} key={index}>
                          {item}
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
        <EmptyCart>
          <img src="/imgs/empty_cart.png" style={{ width: "60%" }} />
        </EmptyCart>
      )}
    </MediaDiv>
  );
};
export default CartPageItem;

const CartPageImg = styled.div`
  display: flex;
  width: 15%;
  color: white;
  background-color: black;
  justify-content: center;
  overflow: hidden;
`;
const CartPageBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 30px;
  min-width: 400px;
  align-items: center;
  margin:auto @media only screen and (max-width: 1024px) {
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
  @media only screen and (max-width: 1440px) {
  }
  @media only screen and (max-width: 1024px) {
    width: 50%;
  }
  @media only screen and (max-width: 425px) {
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

const EmptyCart = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
