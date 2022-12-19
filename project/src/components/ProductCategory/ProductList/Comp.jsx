import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../../../modules/cartDB";

import styled from "styled-components";

const ProductComp = ({ name, price, img, hoverImg, account }) => {
  const dispatch = useDispatch();

  return (
    <ItemBody>
      <ItemBox>
        <ItemImgBox>
          <div>
            <img src={img} />
          </div>
          <div>
            <img src={hoverImg} />
            <button
              onClick={() => {
                dispatch(action.listAdd(name, price, account, img, hoverImg));
              }}
            >
              장바구니에 바로 추가
            </button>
          </div>
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
  display: flex;
  width: 100%;
  scale: 1.2;
  margin-top: 100px;
  margin-left: 50px;
  flex-wrap: wrap;
  border-collapse: collapse;
  justify-content: space-between;
`;
const ItemBox = styled.div`
  display: flex;
  width: 100%;
  height: 400px;

  justify-content: center;
  align-items: self-start;
  font-size: 0.8rem;
  text-align: center;
  flex-direction: column;
  border-collapse: collapse;
`;
const ItemImgBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  align-items: center;
  flex-direction: column;
  width: 90%;

  height: 80%;
  z-index: 2;
  & > div {
    width: 100%;
    height: 100%;
    & > img {
      width: 100%;
      height: 100%;
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
    & > button {
      position: absolute;
      font-size: 26px;
      width: 100%;
      height: 100px;
      background-color: rgba(245, 245, 220, 1);
      text-align: center;
      justiy-content: center;
      align-item: center;
      top: 69.5%;
      left: 0;
      border: none;
      z-index: 7;
    }
  }
`;
const ItemDtailBox = styled.div`
  display: flex;

  justify-content: center;
  flex-direction: column;
  align-items: start;
  text-align: center;
  border-collapse: collapse;
  margin: 0;
`;
const ItemDtailName = styled.div`
  display: flex;

  flex-wrap: wrap;
`;
const ItemDtailPrice = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
