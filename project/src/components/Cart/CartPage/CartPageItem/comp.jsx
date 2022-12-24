import styled from "styled-components";

import PriceComp from "./PriceComp";

const CartPageItem = ({
  cartList,
  userCart,
  accountFn,
  accountControl,
  dbRemove,
}) => {
  return (
    <div>
      {cartList?.map((item, index) => (
        <CartPageBox key={`cartpagebox-${index}`}>
          <CartPageImg key={`cartpageimg-${index}`}>
            <img src={item.Product.productImg} />
          </CartPageImg>
          <CartPageName key={`cartpagename-${index}`}>
            <CartPageSearchName key={`cartpageSearchName-${index}`}>
              {item.Product.productName}
            </CartPageSearchName>
            <CartPageNameBottom key={`cartpagceNameBottom-${index}`}>
              <CartPageName key={`cartpagename2-${index}`}>수량:</CartPageName>
              <CartPageNameSelect key={`CartPageNameSelect-${index}`}>
                <select
                  onChange={(e) => {
                    accountControl(e.target.value, item.productId);
                  }}
                >
                  {accountFn(item.Product.productAccount).map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
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
      ))}
    </div>
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
`;
const CartPageBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 30px;
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
  width: 217px;
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
