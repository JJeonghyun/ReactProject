import { useState } from "react";
import ItemListComp from "./Comp";

const ItemListContainer = ({ name, price, img, hoverImg, searchResult }) => {
  return (
    <ItemListComp
      name={name}
      price={price}
      img={img}
      hoverImg={hoverImg}
      searchResult={searchResult}
    />
  );
};
export default ItemListContainer;
