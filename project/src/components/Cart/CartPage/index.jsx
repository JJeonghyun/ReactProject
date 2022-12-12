import CartPageItemContainer from "./CartPageItem/Container";
// import OrderContainer from "./OrderContainer";
import styled from "styled-components";
const CartPage = () => {
  return (
    <Main>
      <div>
        <h1>장바구니</h1>
      </div>
      <Fbox>
        <CartPageItemContainer />
        {/* <OrderContainer /> */}
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
