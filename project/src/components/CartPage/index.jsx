import CartPageContainer from "./CartPageContainer";
import OrderContainer from "./OrderContainer";
import styled from "styled-components";
const CartPage = () => {
  return (
    <Main>
      <h3>장바구니</h3>
      <Fbox>
        <CartPageContainer />
        <OrderContainer />
      </Fbox>
    </Main>
  );
};

export default CartPage;

const Main = styled.div`
  padding: 100px 30px 500px 30px;
  margin: auto;
  font-size: 1.5rem;
  width: 60%;
`;

const Fbox = styled.div`
  display: flex;
  justify-content: space-between;
  > div:first-child {
    width: 60%;
  }
  > div:last-child {
    width: 40%;
  }
`;
