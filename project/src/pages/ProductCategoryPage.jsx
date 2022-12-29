import Header from "../components/Home/Header";
import ProductCategoryContainer from "../components/ProductCategory";
import Footer from "../components/Home/Footer";
import styled from "styled-components";

const ProductCategoryPage = (elem) => {
  return (
    <>
      <Header />
      <Item>
        <ProductCategoryContainer elem={elem} />
      </Item>
      <Footer />
    </>
  );
};
export default ProductCategoryPage;
const Item = styled.div`
  display: flex;
`;
