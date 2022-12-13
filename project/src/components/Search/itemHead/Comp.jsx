import styled from "styled-components";
import RightComp from "../../Home/Header/RightBanners/Comp";
const ItemHeadComp = ({ search }) => {
  return (
    <>
      <ItemheadBox>"{search}"에 대한 결과</ItemheadBox>
      console.log(search);
    </>
  );
};

export default ItemHeadComp;

const ItemheadBox = styled.div`
  display: flex;
  margin-top: 100px;
  height: 40px;
  justify-content: center;
`;
