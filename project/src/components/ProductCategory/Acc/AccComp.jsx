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
  let [getList, setGetList] = useState([]);
  let [adminList, setAdminList] = useState([]);

  const getaccList = async function () {
    try {
      setGetList([]);

      getList = await axios.get("http://localhost:8080/api/product/getlist");
      setGetList(getList.data.list);
      const best = getList.data.list.filter(
        (item) => item.productCategory == "accBest"
      );
      const wheel = getList.data.list.filter(
        (item) => item.productCategory == "accWheel"
      );
      const part = getList.data.list.filter(
        (item) => item.productCategory === "accParts"
      );
      const interia = getList.data.list.filter(
        (item) => item.productCategory === "accInteria"
      );
      const out = getList.data.list.filter(
        (item) => item.productCategory === "accOut"
      );
      const admin = getList.data.list.filter(
        (item) => item.productCategory === "acc"
      );
      setaccListParts(part);
      setaccListBest(best);
      setaccListWheel(wheel);
      setaccListOut(out);
      setaccListInteria(interia);
      setAdminList(admin);
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
      <Item>
        {adminList.map((item, index) => (
          <ProductContainer
            key={`itemComponent-${index}`}
            price={item.productPrice}
            name={item.productName}
            img={item.productImg}
            hoverImg={item.productHoverImg}
          />
        ))}
      </Item>
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
