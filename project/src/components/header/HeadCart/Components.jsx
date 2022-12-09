import styled from "styled-components";
const Cart = () => {
  return (
    <>
      <SearchImg>
        <img src="./imgs/cart.png" />
        <span>장바구니</span>
      </SearchImg>
    </>
  );
};
export default Cart;

const SearchImg = styled.div`
  display: flex;
  width: 35px;
  height: 30px;
  margin: auto;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  > span {
    display: none;
  }
  &:hover > img {
    display: none;
  }
  &:hover > span {
    display: inline;
  }
`;
