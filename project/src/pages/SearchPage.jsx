import styled from "styled-components";
import axios from "axios";
import queryString from "query-string";

import { useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Home/Header";
import ItemHead from "../components/Search/itemHead/Container";
import ItemComponents from "../components/Search/itemList/Container";
import Footer from "../components/Home/Footer";

const SearchPage = () => {
  const [list, setList] = useState([]);
  const location = useLocation();
  const result = queryString.parse(location.search);

  async function searchResult() {
    try {
      const temp = await axios.get("/api/search", {
        params: result,
      });
      setList(temp.data.returnValue);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <ItemHead result={result} searchResult={searchResult} />
      <Item>
        {list?.map((item, index) => (
          <ItemComponents
            key={`itemComponent-${index}`}
            price={item.productPrice}
            name={item.productName}
            account={item.productAccount}
            img={item.productImg}
            hoverImg={item.productHoverImg}
            searchResult={searchResult}
          />
        ))}
      </Item>
      <Footer />
    </>
  );
};

export default SearchPage;

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 94%;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  gap: 5%;
  font-size: x-large;
`;
