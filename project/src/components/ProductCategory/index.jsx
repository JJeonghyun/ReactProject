import ChargeContainer from "./Charge/ChargeContainer";
import ClothesContainer from "./Clothes/ClothesContainer";
import AccContainer from "./Acc/AccContainer";
import styled from "styled-components";
const ProductCategoryContainer = () => {
  return (
    <MainBox>
      <ChargeContainer />
      <ClothesContainer />
      <AccContainer />
    </MainBox>
  );
};

export default ProductCategoryContainer;
const MainBox = styled.div`
  padding: 3rem;
  margin-top: 50px;
`;
