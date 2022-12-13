import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ItemHeadComp from "./Comp";
import RightComp from "../../Home/Header/RightBanners/Comp";

const ItemHeadContainer = ({ search }) => {
  return <ItemHeadComp search={search} />;
};
export default ItemHeadContainer;
