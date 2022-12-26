import { useState } from "react";
import ProductComp from "./Comp";
import axios from "axios";
import Sweetalert2 from "sweetalert2";
import styled from "styled-components";

const ProductContainer = ({ name, price, img, hoverImg, account }) => {
  const cartCheckList = async () => {
    const data = await axios.post("http://localhost:8080/api/cart/list/", {
      payload: { name, price, account, img, hoverImg },
    });

    if (data.data.already) {
      Sweetalert2.fire({
        title: `이미 장바구니에
    담긴 상품입니다.`,
        text: `OK 누르시면
    이전페이지로 돌아갑니다.`,
        icon: "warning",
        denyButtonText: "확인",
      });
    } else {
      Sweetalert2.fire({
        title: `${name}
    상품이 장바구니에 담겼습니다.`,
        text: "OK를 누르시면 이전페이지로 돌아갑니다.",
        icon: "success",
      });
    }
  };
  return (
    <Item>
      <ProductComp
        name={name}
        price={price}
        img={img}
        hoverImg={hoverImg}
        account={account}
        cartCheckList={cartCheckList}
      />
    </Item>
  );
};
export default ProductContainer;
const Item = styled.div`
  display: flex;
  width: 30%;
  margin-right: 1.5rem;

  @media only screen and (max-width: 1060px) {
    width: 42%;
  }

  @media only screen and (max-width: 570px) {
    width: 100%;
  }
`;
