import CartPageItem from "./Comp";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
const CartPageItemContainer = ({ setTotalState }) => {
  const cartList = useSelector((state) => state.cartDB);
  const [list, setList] = useState([]);
  useEffect(() => {
    try {
      async function addCartList() {
        const tempList = await axios.post("http://localhost:8080/api/cart/");
        setList(tempList.data.list);
      }
      addCartList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // return <>{<CartPageItem cartList={cartList} />}</>;
  return <>{<CartPageItem cartList={list} setTotalState={setTotalState} />}</>;
};

export default CartPageItemContainer;
