import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../../../modules/cartDB";
import axios from "axios";
import styled from "styled-components";
import { Boxbox } from "../../Common";
import { Link } from "react-router-dom";

const ProductComp = ({
  name,
  price,
  img,
  hoverImg,
  account,
  cartCheckList,
}) => {
  const dispatch = useDispatch();

  return (
    <ItemBody>
      <ItemBox>
        <ItemImgBox>
          <Boxbox ratio={1 / 1}>
            {img.includes("/imgs") ? (
              <img src={img} />
            ) : (
              <img src={`http://localhost:8080/upload/${img}`} />
            )}
          </Boxbox>
          <Boxbox width={1} height={1}>
            <Link
              to={`/info?${name}`}
              state={{ name: name, price: price, img: img, hoverImg: hoverImg }}
            >
              {hoverImg.includes("/imgs") ? (
                <img src={hoverImg} />
              ) : (
                <img src={`http://localhost:8080/upload/${hoverImg}`} />
              )}
            </Link>
            <button
              onClick={async () => {
                dispatch(action.listAdd(name, price, account, img, hoverImg));
                cartCheckList();
                // const templist = await axios.get(
                //   "http://localhost:8080/api/cart/list/",
                //   {
                //     name: name,
                //     price: price,
                //     account: account,
                //     img: img,
                //   }
                // );
              }}
            >
              장바구니에 바로 추가
            </button>
          </Boxbox>
        </ItemImgBox>
        <ItemDtailBox>
          <ItemDtailName>{name}</ItemDtailName>
          <ItemDtailPrice>₩{price}</ItemDtailPrice>
        </ItemDtailBox>
      </ItemBox>
    </ItemBody>
  );
};
export default ProductComp;

const ItemBody = styled.div`
  width: 100%;
  margin-top: 50px;
  float: left;
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
