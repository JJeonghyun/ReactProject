import ProductImgComp from "./Comp";
import ProductInfoContainer from "../../Products/ProductInfo/Container";
import styled from "styled-components";
const ProductImgContainer = () => {
  return (
    <MainBox>
      <div>
        <ProductImgComp />
      </div>
      <div>
        <ProductInfoContainer />
      </div>
    </MainBox>
  );
};

export default ProductImgContainer;

const MainBox = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  padding: 45px;
  > div:first-child {
    width: 65%;
  }

  > div:last-child {
    width: 35%;
  }
`;
