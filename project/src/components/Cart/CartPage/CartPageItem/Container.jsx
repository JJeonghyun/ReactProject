import { action } from "../../../../modules/cartDB";
import axios from "axios";
import CartPageItem from "./Comp";
import { useEffect, useState } from "react";

const CartPageItemContainer = ({ totalState, setTotalState }) => {
  const [cartList, setCartList] = useState([]);

  const userCart = async function () {
    const data = await axios.post("http://localhost:8080/api/cart/userCart/");
    setCartList(data.data.list);
    let tempTotal = 0;
    data.data.list?.map((item, index) => {
      tempTotal += item.Product.productPrice * item.account;
    });
    console.log(tempTotal);
    setTotalState(tempTotal);
  };

  // const accountControl = function (num, id) {
  //   axios
  //     .post(
  //       "http://localhost:8080/api/cart/accUpdate/",

  //       {
  //         num: num,
  //         id: id,
  //       }
  //     )
  //     .then(() => {
  //       userCart();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const accountControl = async function (num, id) {
    try {
      await axios.post(
        "http://localhost:8080/api/cart/accUpdate/",

        {
          num: num,
          id: id,
        }
      );
      await userCart();
    } catch (err) {
      console.log(err);
    }
  };

  // const accountControl = async function (num, id) {
  //   const data = await axios
  //     .post(
  //       "http://localhost:8080/api/cart/accUpdate/",

  //       {
  //         num: num,
  //         id: id,
  //       }
  //     )
  //     .then(() => {
  //       userCart();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    userCart();
    accountControl();
  }, []);

  console.log(cartList);
  return (
    <>{<CartPageItem cartList={cartList} accountControl={accountControl} />}</>
  );
};

export default CartPageItemContainer;
