import styled from "styled-components";

const ItemComponents = () => {
  return (
    <>
      <ItemBody>
        <ItemBox>
          <ItemImg>이미지</ItemImg>
          <ItemDtail>
            <ItemDtailName>상품명 이 들어가는곳</ItemDtailName>
            <ItemDtailPrice>상품가격 이 들어가는곳</ItemDtailPrice>
          </ItemDtail>
        </ItemBox>
      </ItemBody>
    </>
  );
};
export default ItemComponents;

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
  border: 1px solid black;
  border-collapse: collapse;
`;
const ItemImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  width: 90%;
  height: 80%;
`;
const ItemDtail = styled.div`
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
  border: 1px solid black;
  flex-wrap: wrap;
`;
const ItemDtailPrice = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
`;
