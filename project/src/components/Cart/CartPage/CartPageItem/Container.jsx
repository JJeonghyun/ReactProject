import CartPageItem from "./Comp";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
const CartPageItemContainer = () => {
  const cartList = useSelector((state) => state.cartDB);
  useEffect(() => {
    try {
      async function addCartList() {
        const response = await axios.get("http://localhost:8080/cart");
        console.log(response);
      }
      addCartList();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return <>{<CartPageItem cartList={cartList} />}</>;
};

export default CartPageItemContainer;
