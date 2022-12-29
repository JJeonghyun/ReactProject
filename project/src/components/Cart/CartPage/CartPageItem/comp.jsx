import styled from "styled-components";

import { Boxbox } from "../../../Common";

const CartPageItem = ({
  cartList,
  userCart,
  accountFn,
  accountControl,
  dbRemove,
}) => {
  return (
    <MediaDiv>
      {cartList?.length != 0 ? (
        cartList?.map((item, index) => (
          <CartPageBox key={`cartpagebox-${index}`}>
            <CartPageImg key={`cartpageimg-${index}`}>
              <Boxbox>
                {item.Product.productImg.includes("/imgs") ? (
                  <img src={item.Product.productImg} />
                ) : (
                  <img src={`/upload/${item.Product.productImg}`} />
                )}
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
  margin-top: 30px;
  align-items: center;
  margin: auto;
  @media only screen and (max-width: 1024px) {
    width: 85%;
  }
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
  @media only screen and (max-width: 1440px) {
  }
  @media only screen and (max-width: 1024px) {
    width: 50%;
  }
  @media only screen and (max-width: 425px) {
  }
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

const EmptyCart = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
