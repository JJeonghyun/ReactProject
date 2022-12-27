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
  useEffect(() => {
    console.log("리렌더");
  }, [cartList]);

  return (
    <MediaDiv>
      {cartList ? (
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
                <CartPageNameVolum key={`cartpagename2-${index}`}>
                  수량:
                </CartPageNameVolum>
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
                    삭제
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
        <>장바구니가 비었슴다.</>
      )}
    </MediaDiv>
  );
};
export default CartPageItem;

const CartPageImg = styled.div`
  display: flex;
  width: 20%;

  color: white;
  background-color: black;
  justify-content: center;
  overflow: hidden;
`;
const CartPageBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;

  font-size: 1rem;
`;
const CartPageName = styled.div`
  display: block;
  width: 60%;
  flex-direction: column;
  margin: auto;
`;
const CartPageNameVolum = styled.div`
  display: block;
  flex-direction: column;
  margin: auto;
  @media only screen and (max-width: 620px) {
    display: none;
  }
`;
const CartPageSearchName = styled.div`
  display: block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: 3%;
`;
const CartPagePrice = styled.div`
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CartPageNameBottom = styled.div`
  display: flex;
  width: 45%;
  padding: 2px;
  justify-content: space-between;
  @media only screen and (max-width: 620px) {
  }
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
  @media only screen and (max-width: 465px) {
    font-size: 1rem;
  }
  button {
    border: none;
  }
`;

const MediaDiv = styled.div`
  display: block;
  width: 100%;
`;
