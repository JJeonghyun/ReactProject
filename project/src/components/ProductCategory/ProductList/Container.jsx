import { useState } from "react";
import ProductComp from "./Comp";
import styled from "styled-components";

const ProductContainer = ({ name, price, img, hoverImg, account }) => {
  return (
    <Item>
      <ProductComp
        name={name}
        price={price}
        img={img}
        hoverImg={hoverImg}
        account={account}
      />
    </Item>
  );
};
export default ProductContainer;
const Item = styled.div`
  display: flex;
  width: 30%;
  margin-right: 1.5rem;

  @media only screen and (max-width: 1060px) {
    width: 42%;
  }

  @media only screen and (max-width: 570px) {
    width: 100%;
  }
`;
