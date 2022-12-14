import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ItemHeadComp from "./Comp";
import RightComp from "../../Home/Header/RightBanners/Comp";
import queryString from "query-string";

const ItemHeadContainer = () => {
  const location = useLocation();

  const result = queryString.parse(location.search);
  console.log(location.search);
  console.log(queryString.parse(location.search));

  return <ItemHeadComp result={result} />;
};
export default ItemHeadContainer;
