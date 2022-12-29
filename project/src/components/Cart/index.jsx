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

        <OrderContainer totalState={totalState} setTotalState={setTotalState} />
      </Fbox>
    </Main>
  );
};

export default CartPage;

const Main = styled.div`
  padding: 100px 0;
  font-size: 1.5rem;
  width: 100%;
  & > h3 {
    width: 87.5%;
    margin: 0 auto;
    padding: 0 0 15px 0;
  }
`;

const Fbox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  gap: 3rem;

  > div:first-child {
    margin-right: 1rem;
    @media only screen and (max-width: 1200px) {
      font-size: 1rem;
      width: 100%;
    }
  }
  > div:last-child {
    width: 40%;
    min-width: 380px;
    @media only screen and (max-width: 1200px) {
      width: 100%;
      margin: auto;
    }
  }

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
  }
`;
