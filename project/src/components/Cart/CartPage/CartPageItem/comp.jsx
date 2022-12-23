import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { action } from "../../../../modules/cartDB";
import PriceComp from "./PriceComp";
const CartPageItem = ({ cartList, accountControl }) => {
  // const [_, render] = useState(1);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  // const useRerender = () => {
  //   const [, reRender] = useState();
  //   return useCallback(() => reRender({}), []);
  // };
  const [account, setAccount] = useState(1);
  let num;

  return (
    <div>
      {cartList?.map((item, index) => {
        let num = 1;

        return (
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
                      num = e.target.value;
                      setCheck(true);
                      console.log(num);
                      accountControl(e.target.value, item.productId);
                    }}
                  >
                    <option value={item.account}>{item.account}</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                </CartPageNameSelect>
                <CartPageNameDelete key={`CartPageNameDelete-${index}`}>
                  <button
                    onClick={() => {
                      dispatch(action.listRemove(index, item.name));

                      // render()
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
              {/* <PriceComp
                price={item.Product.productPrice}
                num={num}
                check={check}
                account={account}
                setAccount={setAccount}
              /> */}
            </CartPagePrice>
          </CartPageBox>
        );
      })}
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
