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
      const temp = await axios.get("http://localhost:8080/api/search/", {
        params: { result: result },
      });
      setList(temp.data.mainResult);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <ItemHead result={result} searchResult={searchResult} />
      <Item>
        {list.map((item, index) => (
          <ItemComponents
            key={`itemComponent-${index}`}
            price={item.price}
            name={item.name}
            img={item.path}
            hoverImg={item.hoverImg}
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
`;
