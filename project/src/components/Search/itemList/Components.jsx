import styled from "styled-components";

const ItemComponents = () => {
  return (
    <>
      <ItemBody>
        <ItemBox>
          <ItemImg>img</ItemImg>
          <ItemDtail>
            <ItemDtailName>상품명</ItemDtailName>
            <ItemDtailPrice>상품가격</ItemDtailPrice>
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
`;
const ItemBox = styled.div`
  display: flex;
  width: calc(100% / 3);
  height: 400px;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
`;
const ItemImg = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border: 1px solid black;
  height: 60%;
`;
const ItemDtail = styled.div`
  display: flex;
  height: 35%;
  justify-content: center;
  flex-direction: column;
  text-align: center;
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
