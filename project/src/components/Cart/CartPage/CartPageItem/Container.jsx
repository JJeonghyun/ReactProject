import CartPageItem from "./Comp";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
const CartPageItemContainer = ({ setTotalState }) => {
  const cartList = useSelector((state) => state.cartDB);

  return <>{<CartPageItem cartList={cartList} />}</>;
};

export default CartPageItemContainer;
