import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { action } from "../../../../modules/cartDB";

const CartPageItem = ({ cartList }) => {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      {cartList?.map((item, index) => (
        <CartPageBox key={`cartpagebox-${index}`}>
          <CartPageImg key={`cartpageimg-${index}`}>
            <img src={item.img} />
          </CartPageImg>
          <CartPageName key={`cartpagename-${index}`}>
            <CartPageSearchName key={`cartpageSearchName-${index}`}>
              {item.name}
            </CartPageSearchName>
            <CartPageNameBottom key={`cartpagceNameBottom-${index}`}>
              <CartPageName key={`cartpagename2-${index}`}>수량:</CartPageName>
              <CartPageNameSelect key={`CartPageNameSelect-${index}`}>
                <select
                  onChange={(e) => {
                    const account = e.target.value;
                    dispatch(action.listSelect(account, index));
                    setCheck(true);
                  }}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </CartPageNameSelect>
              <CartPageNameDelete key={`CartPageNameDelete-${index}`}>
                <button
                  onClick={() => {
                    dispatch(action.listRemove(index));
                  }}
                >
                  삭제하기
                </button>
              </CartPageNameDelete>
            </CartPageNameBottom>
          </CartPageName>
          <CartPagePrice key={`CartPagePrice-${index}`}>
            ₩{check ? item.price * item.account : item.price * 1}
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
  justify-content: space-around;
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
  justify-content: space-around;
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
