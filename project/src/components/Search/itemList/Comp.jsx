import styled from "styled-components";

const ItemComp = ({ name, price, img, hoverImg }) => {
  return (
    <ItemBody>
      <ItemBox>
        <ItemImgBox>
          <div>
            <img src={img} />
          </div>
          <div>
            <img src={hoverImg} />
          </div>
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
  display: flex;
  width: 100%;
  margin-top: 50px;
  flex-wrap: wrap;
  border-collapse: collapse;
`;
const ItemBox = styled.div`
  display: flex;
  width: calc(100% / 3);
  height: 400px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  border-collapse: collapse;
`;
const ItemImgBox = styled.div`
  display: flex;
  justify-content: center;
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
