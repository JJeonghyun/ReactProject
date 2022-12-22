import ChargeContainer from "./Charge/ChargeContainer";
import ClothesContainer from "./Clothes/ClothesContainer";
import AccContainer from "./Acc/AccContainer";
import styled from "styled-components";

const ProductCategoryContainer = (elem) => {
  window.scrollTo(0, 0);
  return (
    <MainBox>
      {elem.elem.elem === "all" ? (
        <>
          <ChargeContainer />
          <AccContainer />
          <ClothesContainer />
        </>
      ) : (
        <></>
      )}
      {elem.elem.elem === "charge" ? <ChargeContainer /> : <></>}
      {elem.elem.elem === "acc" ? <AccContainer /> : <></>}
      {elem.elem.elem === "clothes" ? <ClothesContainer /> : <></>}
    </MainBox>
  );
};

export default ProductCategoryContainer;
const MainBox = styled.div`
  padding: 3rem;
  margin-top: 50px;
`;
