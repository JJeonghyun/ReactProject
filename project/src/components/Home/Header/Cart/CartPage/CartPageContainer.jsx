import CartPageComp from "./CartPageComp";
import CartPageItem from "./CartPageItem/comp";
import { useState } from "react";

const CartPageContainer = () => {
  const [list, setList] = useState([
    { name: "트포", price: "3300", img: "./imgs/second.DB/Tp.jpg" },
    { name: "트포", price: "3300", img: "./imgs/second.DB/Tp.jpg" },
    { name: "트포", price: "3300", img: "./imgs/second.DB/Tp.jpg" },
    { name: "트포", price: "3300", img: "./imgs/second.DB/Tp.jpg" },
    { name: "트포", price: "3300", img: "./imgs/second.DB/Tp.jpg" },
  ]);

  return (
    <div>
      <CartPageItem list={list} setList={setList} />
    </div>
  );
};

export default CartPageContainer;
