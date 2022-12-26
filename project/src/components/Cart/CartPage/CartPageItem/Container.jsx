import axios from "axios";
import CartPageItem from "./Comp";
import { useEffect, useState } from "react";

const CartPageItemContainer = ({ setTotalState }) => {
  const [cartList, setCartList] = useState([]);

  const userCart = function () {
    axios
      .post("http://localhost:8080/api/cart/userCart/")
      .then((data) => {
        setCartList(data.data.list);
        console.log(cartList);
        let tempTotal = 0;
        data.data.list?.map((item, index) => {
          tempTotal += item.Product.productPrice * item.account;
        });
        setTotalState(tempTotal);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dbRemove = function (index, productId) {
    axios
      .post("http://localhost:8080/api/cart/remove/", {
        payload: { index: index, productId: productId },
      })
      .then(() => {
        userCart();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const accountControl = async function (num, id) {
    try {
      await axios.post(
        "http://localhost:8080/api/cart/accUpdate/",

        {
          num: num,
          id: id,
        }
      );
      userCart();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userCart();
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
          accountControl={accountControl}
          dbRemove={dbRemove}
        />
      }
    </>
  );
};

export default CartPageItemContainer;
