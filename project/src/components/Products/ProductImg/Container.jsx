import ProductImgComp from "./Comp";
import ProductInfoContainer from "../ProductInfo/Container";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Header from "../../Home/Header";

const ProductImgContainer = () => {
  const location = useLocation();
  console.log(location.state);
  window.scrollTo(0, 0);

  return (
    <>
      <Header />
      <MainBox>
        <div>
          <ProductImgComp state={location} />
        </div>
        <div>
          <ProductInfoContainer state={location} />
        </div>
      </MainBox>
    </>
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
    @media only screen and (max-width: 970px) {
      width: 100%;
    }
  }

  > div:last-child {
    width: 35%;
    @media only screen and (max-width: 970px) {
      width: 100%;
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 970px) {
    flex-direction: column;
    gap: 3rem;
    padding: 0;
  }
`;
