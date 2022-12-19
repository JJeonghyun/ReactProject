import { useState } from "react";
import ProductComp from "./Comp";
import styled from "styled-components";

const ProductContainer = ({ name, price, img, hoverImg }) => {
  return (
    <Item>
      <ProductComp name={name} price={price} img={img} hoverImg={hoverImg} />
    </Item>
  );
};
export default ProductContainer;
const Item = styled.div`
  display: flex;
  width: 32%;
  margin-right: 1.5rem;
`;
