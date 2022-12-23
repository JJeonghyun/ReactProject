import { action } from "../../../../modules/cartDB";
import axios from "axios";
import CartPageItem from "./Comp";
import { useEffect, useState } from "react";

const CartPageItemContainer = () => {
  let data;

  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const userCart = async function () {
      data = await axios.post("http://localhost:8080/api/cart/userCart/");
      setCartList(data.data.list);
    };

    userCart();
  }, []);

  console.log(cartList);
  return <>{<CartPageItem cartList={cartList} />}</>;
};

export default CartPageItemContainer;
