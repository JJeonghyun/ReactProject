import styled from "styled-components";

import ItemHead from "../components/Search/itemHead/Comp";
import ItemList from "../components/Search/itemList/Comp";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";

const SearchPage = () => {
  return (
    <>
      <Header />
      <SearchBox>
        <ItemHead />
        <ItemList />
      </SearchBox>
      <Footer />
    </>
  );
};

export default SearchPage;

const SearchBox = styled.div`
  margin: 5% 0 0 0;
`;
