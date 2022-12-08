import styled from "styled-components";
const Cart = () => {
  return (
    <div>
      <SearchImg>
        <img src="./imgs/cart.png" />
      </SearchImg>
    </div>
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
`;
