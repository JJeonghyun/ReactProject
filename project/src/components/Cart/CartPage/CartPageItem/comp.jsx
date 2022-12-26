import styled from "styled-components";
import { useEffect, useState } from "react";
import { Boxbox } from "../../../Common";
const CartPageItem = ({ cartList, accountFn, accountControl, dbRemove }) => {
  const [resize, setResize] = useState();

  const handleResize = () => {
    setResize(window.innerWidth);
    console.log(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {cartList?.map((item, index) => (
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
              <div key={`cartpagename2-${index}`}>수량:</div>
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
                  }}
                >
                  삭제하기
                </button>
              </CartPageNameDelete>
              <CartPagePrice key={`CartPagePrice-${index}`}>
                ₩
                {(item.account * item.Product.productPrice)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </CartPagePrice>
            </CartPageNameBottom>
          </CartPageName>
        </CartPageBox>
      ))}
    </div>
  );
};
export default CartPageItem;

const CartPageImg = styled.div`
  display: flex;
  width: 30%;
  color: white;
  background-color: black;
  justify-content: center;
  overflow: hidden;
`;
const CartPageBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 5px;
  @media screen and (max-width: 1440px) {
    justify-content: flex-start;
    width: 80%;
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 425px) {
  }
`;
const CartPageName = styled.div`
  width: calc(65%);
  margin: auto;
  @media screen and (max-width: 1440px) {
    width: 65%;
    font-size: 1.3rem;
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 425px) {
  }
`;
const CartPageSearchName = styled.div`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  @media screen and (max-width: 1440px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 425px) {
  }
`;
const CartPagePrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 140px;
  @media screen and (max-width: 1440px) {
    min-width: 100%;
    font-size: 1.2rem;
    justify-content: flex-start;
  }
  @media screen and (max-width: 1024px) {
    min-width: 100%;
  }
  @media screen and (max-width: 425px) {
  }
`;

const CartPageNameBottom = styled.div`
  display: flex;
  padding: 2px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 1440px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 425px) {
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
  button {
    border: none;
  }
`;
