import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Sweetalert2 from "sweetalert2";
import { action } from "../../../modules/cartDB";
import { Boxbox } from "../../Common/index";

import styled from "styled-components";

const ItemComp = ({ name, price, account, img, hoverImg, searchResult }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    searchResult();
  }, []);

  return (
    <ItemBody>
      <ItemBox>
        <ItemImgBox>
          <Boxbox ratio={1 / 1}>
            <img src={img} />
          </Boxbox>
          <Boxbox width={1} height={1}>
            <Link
              to={`/info?${name}`}
              state={{
                name: name,
                price: price,
                account: account,
                img: img,
                hoverImg: hoverImg,
              }}
            >
              <img src={hoverImg} />
            </Link>
            <button
              onClick={async () => {
                const data = await axios.post(
                  "http://localhost:8080/api/cart/list/",
                  {
                    payload: { name, price, account, img, hoverImg },
                  }
                );

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
                // dispatch(action.listAdd(name, price, account, img, hoverImg));
              }}
            >
              장바구니
            </button>
          </Boxbox>
        </ItemImgBox>
        <ItemDtailBox>
          <ItemDtailName>{name}</ItemDtailName>
          <ItemDtailPrice>{price}</ItemDtailPrice>
        </ItemDtailBox>
      </ItemBox>
    </ItemBody>
  );
};
export default ItemComp;

const ItemBody = styled.div`
  width: calc(90% / 3);
  margin-top: 50px;
`;
const ItemBox = styled.div`
  align-items: center;
  // text-align: center;
  border-collapse: collapse;
`;
const ItemImgBox = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80%;
  z-index: 2;
  & > div {
    // width: 100%;
    // height: 100%;

    & > img {
      // width: 100%;
      // height: 100%;
      object-fit: cover;
    }
  }

  & > div:last-child {
    display: none;
  }

  &:hover > div:first-child {
    display: none;
  }
  &:hover > div:last-child {
    display: block;
    cursor: pointer;
    object-fit: cover;

    & > button {
      position: absolute;
      font-size: 26px;
      width: 100%;
      height: 100px;
      background-color: rgba(245, 245, 242, 0.56);
      text-align: center;
      justiy-content: center;
      align-item: center;
      bottom: 0;
      left: 0;
      border: none;
      z-index: 7;
      cursor: pointer;
    }
    & > a > img {
      display: inherit;
      width: inherit;
    }
  }
`;
const ItemDtailBox = styled.div`
  display: flex;
  height: 20%;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  text-align: center;
  border-collapse: collapse;
`;
const ItemDtailName = styled.div`
  display: flex;

  flex-wrap: wrap;
`;
const ItemDtailPrice = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
