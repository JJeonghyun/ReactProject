import CartPageItemContainer from "./CartPage/CartPageItem/Container";
import OrderContainer from "./OrderPage/OrderContainer";
import styled from "styled-components";
import { useState } from "react";
const CartPage = () => {
  const [totalState, setTotalState] = useState(0);
  return (
    <Main>
      <h3>장바구니</h3>
      <Fbox>
        <CartPageItemContainer
          totalState={totalState}
          setTotalState={setTotalState}
        />

        <OrderContainer totalState={totalState} />
      </Fbox>
    </Main>
  );
};

export default CartPage;

const Main = styled.div`
  padding: 100px 30px;
  margin: 0 auto;
  font-size: 1.5rem;
  width: 85%;
`;

const Fbox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  > div:first-child {
    width: 57%;
  }
  > div:last-child {
    width: 40%;
  }
`;
