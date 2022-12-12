import { useState } from "react";
import styled from "styled-components";
import CartPageItem from "./comp";
const CartPageItemContainer = () => {
  return (
    <>
      <ItemDtail>
        {useState.map((item) => (
          <CartPageItem setList={item.setList} />
        ))}
      </ItemDtail>
    </>
  );
};

export default CartPageItemContainer;
const ItemDtail = styled.div`
  display: flex;
`;
