import styled from "styled-components";
import CartPageItem from "./comp";
import { useState } from "react";
const CartPageItemContainer = () => {
  const [list, setList] = useState([
    { name: "트포", price: "3300", img: "./imgs/second.DB/Tp.jpg" },
    { name: "트포", price: "3300", img: "./imgs/second.DB/wheel5.png" },
    { name: "트포", price: "3300", img: "./imgs/second.DB/Sinpa.png" },
    { name: "트포", price: "3300", img: "./imgs/second.DB/wheel8.png" },
    { name: "트포", price: "3300", img: "./imgs/second.DB/Tp.jpg" },
  ]);

  return (
    <>
      <div>
        <CartPageItem list={list} setList={setList} />
      </div>
    </>
  );
};

export default CartPageItemContainer;
// const ItemDtail = styled.div`
//   display: flex;
// `;
