import Header from "../components/Home/Header";
import CartPage from "../components/Cart";
import Footer from "../components/Home/Footer";
import styled from "styled-components";

const CartMainPage = () => {
  return (
    <PreventDrag>
      <Header />
      <CartPage />
      <Footer />
    </PreventDrag>
  );
};
export default CartMainPage;

const PreventDrag = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
`;
