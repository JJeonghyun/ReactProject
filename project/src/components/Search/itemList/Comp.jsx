import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Boxbox } from "../../Common/index";
import styled from "styled-components";

const ItemComp = ({
  name,
  price,
  account,
  img,
  hoverImg,
  searchResult,
  cartCheckList,
}) => {
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
                cartCheckList();
              }}
            >
              장바구니
            </button>
          </Boxbox>
        </ItemImgBox>
        <ItemDtailBox>
          <ItemDtailName>{name}</ItemDtailName>
          <ItemDtailPrice>
            {" "}
            ₩{`${price}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </ItemDtailPrice>
        </ItemDtailBox>
      </ItemBox>
    </ItemBody>
  );
};
export default ItemComp;
const ItemBody = styled.div`
  width: calc(90% / 3);
  margin-top: 50px;
  @media screen and (max-width: 1440px) {
    width: calc(90% / 3);
  }
  @media screen and (max-width: 1024px) {
    width: calc(90% / 2);
    margin-left: 10px;
  }
  @media screen and (max-width: 730px) {
    width: calc(90% / 2);
  }
  @media screen and (max-width: 425px) {
    width: calc(97%);
  }
`;
const ItemBox = styled.div`
  align-items: center;
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
  @media screen and (max-width: 1440px) {
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 425px) {
  }
  & > div {
    & > img {
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
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const ItemDtailName = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ItemDtailPrice = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
