import styled from "styled-components";

const CartPageItem = () => {
  return (
    <CartPageBox>
      <CartPageImg>img</CartPageImg>
      <CartPageName>
        <div>model</div>
        <CartPageNameBottom>
          <div>수량:</div>
          <div>
            <select>
              <option value="">1</option> <option value="2">2</option>
            </select>
          </div>
          <div>삭제하기</div>
        </CartPageNameBottom>
      </CartPageName>
      <CartPagePrice>$234,000</CartPagePrice>
    </CartPageBox>
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
`;
const CartPageBox = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
  flex-wrap: wrap;
`;
const CartPageName = styled.div`
  display: flex;
  flex-direction: column;
`;
const CartPagePrice = styled.div`
  display: flex;
  border: 1px solid black;
`;

const CartPageNameBottom = styled.div`
  display: flex;
  width: 217px;
  height: 30px;
  border: 1px solid black;
  justify-content: space-around;
`;
