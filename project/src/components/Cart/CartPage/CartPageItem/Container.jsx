import { action } from "../../../../modules/cartDB";
import axios from "axios";
import CartPageItem from "./Comp";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const CartPageItemContainer = ({ setTotalState }) => {
  const [cartList, setCartList] = useState([]);
  const dispatch = useDispatch();

  const userCart = function () {
    axios
      .post("http://localhost:8080/api/cart/userCart/")
      .then((data) => {
        setCartList(data.data.list);
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
      .then((data) => {
        dispatch(action.listRemove(index, productId));
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
      await userCart();
    } catch (err) {
      console.log(err);
    }
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
          accountControl={accountControl}
          dbRemove={dbRemove}
        />
      }
    </>
  );
};

export default CartPageItemContainer;
