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
  align-items: flex-start;
  gap: 3rem;

  > div:first-child {
    width: 57%;
    margin-right: 1rem;
    // @media only screen and (max-width: 1440px) {
    //   font-size: 1.5rem;
    // }

    // @media only screen and (max-width: 1250px) {
    //   font-size: 1.1rem;
    // }

    // @media only screen and (max-width: 1200px) {
    //   font-size: 1rem;
    //   width: 100%;

    //   justify-content: space-around;
    // }
    // @media only screen and (max-width: 670px) {
    //   font-size: 1rem;
    //   width: 80%;
    // }
  }
  > div:last-child {
    width: 40%;

    // @media only screen and (max-width: 1440px) {
    //   flex-direction: column;
    // }

    // @media only screen and (max-width: 400px) {
    //   width: 120%;
    //   font-size: 0.8 rem;
    // }
  }

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }

  // @media only screen and (max-width: 400px) {

  // }
`;
