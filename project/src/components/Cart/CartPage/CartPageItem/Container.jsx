import CartPageItem from "./comp";
import { useState } from "react";
const CartPageItemContainer = () => {
  const [list, setList] = useState([
    { name: "트포", number: 1, price: "3300", img: "./imgs/second.DB/Tp.jpg" },
    {
      name: "트포",
      number: 1,
      price: "1300",
      img: "./imgs/second.DB/wheel5.png",
    },
    {
      name: "트포",
      number: 1,
      price: "2300",
      img: "./imgs/second.DB/Sinpa.png",
    },
    {
      name: "트포",
      number: 1,
      price: "4300",
      img: "./imgs/second.DB/wheel8.png",
    },
    { name: "트포", number: 1, price: "5300", img: "./imgs/second.DB/Tp.jpg" },
  ]);

  return <>{<CartPageItem list={list} setList={setList} />}</>;
};

export default CartPageItemContainer;
