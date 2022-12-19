import styled from "styled-components";
import "./order.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductContainer from "../ProductList/Container";
const AccComp = () => {
  let [accListBest, setaccListBest] = useState([]);
  let [accListInteria, setaccListInteria] = useState([]);
  let [accListWheel, setaccListWheel] = useState([]);
  let [accListOut, setaccListOut] = useState([]);

  let [accListParts, setaccListParts] = useState([]);

  const getaccList = async function () {
    try {
      accListBest = await axios.get(
        "http://localhost:8080/api/product/accBest"
      );
      accListInteria = await axios.get(
        "http://localhost:8080/api/product/accInteria"
      );
      accListWheel = await axios.get(
        "http://localhost:8080/api/product/accWheel"
      );
      accListOut = await axios.get("http://localhost:8080/api/product/accOut");
      accListParts = await axios.get(
        "http://localhost:8080/api/product/accParts"
      );
      setaccListParts(accListParts.data.list);
      setaccListBest(accListBest.data.list);
      setaccListWheel(accListWheel.data.list);
      setaccListOut(accListOut.data.list);

      setaccListInteria(accListInteria.data.list);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getaccList();
  }, []);

  return (
    <div>
      <Title>악세사리</Title>
      <SubTitle>베스트셀러</SubTitle>
      <Item>
        {accListBest.map((item, index) => (
          <ProductContainer
            key={`itemComponent-${index}`}
            price={item.productPrice}
            name={item.productName}
            img={item.productImg}
            hoverImg={item.productHoverImg}
          />
        ))}
      </Item>

      <SubTitle>인테리어</SubTitle>
      <Item>
        {accListInteria.map((item, index) => (
          <ProductContainer
            key={`itemComponent-${index}`}
            price={item.productPrice}
            name={item.productName}
            img={item.productImg}
            hoverImg={item.productHoverImg}
          />
        ))}
      </Item>

      <SubTitle>외부</SubTitle>
      <Item>
        {accListOut.map((item, index) => (
          <ProductContainer
            key={`itemComponent-${index}`}
            price={item.productPrice}
            name={item.productName}
            img={item.productImg}
            hoverImg={item.productHoverImg}
          />
        ))}
      </Item>

      <SubTitle>휠 및 타이어</SubTitle>
      <Item>
        {accListWheel.map((item, index) => (
          <ProductContainer
            key={`itemComponent-${index}`}
            price={item.productPrice}
            name={item.productName}
            img={item.productImg}
            hoverImg={item.productHoverImg}
          />
        ))}
      </Item>

      <SubTitle>파츠</SubTitle>
      <Item>
        {accListParts.map((item, index) => (
          <ProductContainer
            key={`itemComponent-${index}`}
            price={item.productPrice}
            name={item.productName}
            img={item.productImg}
            hoverImg={item.productHoverImg}
          />
        ))}
      </Item>
    </div>
  );
};

export default AccComp;

const Title = styled.h4`
  margin: 3rem 3rem 3rem 0;
`;

const SubTitle = styled.h5`
  margin: 3rem 3rem 1rem 0;
`;
const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 10rem;
`;
