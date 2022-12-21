import ProductImgComp from "./Comp";
import ProductInfoContainer from "../ProductInfo/Container";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Header from "../../Home/Header";
import Footer from "../../Home/Footer";
const ProductImgContainer = () => {
  const location = useLocation();
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
      <Footer />
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
  }

  > div:last-child {
    width: 35%;
  }
`;
