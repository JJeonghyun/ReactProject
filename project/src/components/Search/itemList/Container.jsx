import { useState } from "react";
import ItemListComp from "./Comp";

const ItemListContainer = ({ name, price, img, hoverImg }) => {
  return (
    <ItemListComp name={name} price={price} img={img} hoverImg={hoverImg} />
  );
};
export default ItemListContainer;
