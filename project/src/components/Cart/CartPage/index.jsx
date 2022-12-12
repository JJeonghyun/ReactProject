<<<<<<<< HEAD:project/src/components/Cart/index.jsx
import CartPageItemContainer from "./CartPage/CartPageItem/Container";
import OrderContainer from "./OrderPage/OrderContainer";
========
import CartPageContainer from "./test/CartPageContainer";
// import OrderContainer from "./OrderContainer";
>>>>>>>> 203de66 (1212 2:01 장바구니 머지):project/src/components/Cart/CartPage/index.jsx
import styled from "styled-components";
const CartPage = () => {
  return (
    <Main>
      <h3>장바구니</h3>
      <Fbox>
        <CartPageItemContainer />
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
