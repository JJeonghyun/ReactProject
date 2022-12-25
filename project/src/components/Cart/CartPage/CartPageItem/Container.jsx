import { action } from "../../../../modules/cartDB";
import axios from "axios";
import CartPageItem from "./Comp";
import { useEffect, useState } from "react";

const CartPageItemContainer = () => {
  const [cartList, setCartList] = useState([]);

  const userCart = function () {
    const data = axios
      .post("http://localhost:8080/api/cart/userCart/")
      .then((data) => {
        setCartList(data.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    userCart();
    // accountControl();
  }, []);

  const accountFn = (num) => {
    let tempArr = [];
    for (let i = 0; i < num; i++) {
      tempArr.push(i + 1);
    }
    return tempArr;
  };

  return (
    <>
      {
        <CartPageItem
          cartList={cartList}
          userCart={userCart}
          accountFn={accountFn}
        />
      }
    </>
  );
};

export default CartPageItemContainer;
