import ProductImgComp from "./Comp";
import ProductInfoContainer from "../ProductInfo/Container";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
const ProductImgContainer = () => {
  const location = useLocation();

  return (
    <MainBox>
      <div>
        <ProductImgComp state={location} />
      </div>
      <div>
        <ProductInfoContainer state={location} />
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
