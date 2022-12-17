import { useState } from "react";
import ProductComp from "./Comp";

const ProductContainer = ({ name, price, img, hoverImg }) => {
  return (
    <ProductComp name={name} price={price} img={img} hoverImg={hoverImg} />
  );
};
export default ProductContainer;
