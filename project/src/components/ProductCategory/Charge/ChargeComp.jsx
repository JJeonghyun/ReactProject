import styled from "styled-components";
import "./order.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductContainer from "../ProductList/Container";

const ChargeComp = () => {
  let [chargeList, setChargeList] = useState([]);
  const getChargeList = async function () {
    try {
      chargeList = await axios.get("http://localhost:8080/api/product/charge");
      setChargeList(chargeList.data.list);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getChargeList();
  }, []);
  console.log(chargeList);
  return (
    <div>
      <Title>충전</Title>
      <SubTitle>집에서 충전하기</SubTitle>
      <Item>
        {chargeList.map((item, index) => (
          <ProductContainer
            key={`itemComponent-${index}`}
            price={item.price}
            name={item.name}
            img={item.path}
            hoverImg={item.hoverImg}
          />
        ))}
      </Item>
    </div>
  );
};

export default ChargeComp;

const Title = styled.h4`
  margin: 3rem 3rem 3rem 0;
`;

const SubTitle = styled.h5`
  margin: 3rem 3rem 3rem 0;
`;
const Item = styled.div`
  display: flex;
`;
