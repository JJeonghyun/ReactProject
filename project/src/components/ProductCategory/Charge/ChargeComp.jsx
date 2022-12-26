import styled from "styled-components";
import "./order.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductContainer from "../ProductList/Container";

const ChargeComp = () => {
  let [chargeListHome, setChargeListHome] = useState([]);
  let [chargeListCar, setChargeListCar] = useState([]);
  let [chargeListParts, setChargeListParts] = useState([]);
  let [getList, setGetList] = useState([]);
  let [adminList, setAdminList] = useState([]);
  const getChargeList = async function () {
    try {
      setGetList([]);
      getList = await axios.get("http://localhost:8080/api/product/getlist");
      setGetList(getList.data.list);
      const home = getList.data.list.filter(
        (item) => item.productCategory == "chargeHome"
      );
      const car = getList.data.list.filter(
        (item) => item.productCategory == "chargeCar"
      );
      const part = getList.data.list.filter(
        (item) => item.productCategory === "chargeParts"
      );
      const admin = getList.data.list.filter(
        (item) => item.productCategory === "charge"
      );
      setChargeListParts(part);
      setChargeListHome(home);
      setChargeListCar(car);
      setAdminList(admin);
      // setChargeListParts(chargeListParts.data.list);
      // setChargeListHome(chargeListHome.data.list);
      // setChargeListCar(chargeListCar.data.list);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getChargeList();
  }, []);

  return (
    <div>
      <Title>충전</Title>
      <Item>
        {adminList.map((item, index) => (
          <ProductContainer
            key={`itemComponent-${index}`}
            price={item.productPrice}
            name={item.productName}
            img={item.productImg}
            hoverImg={item.productHoverImg}
            account={item.productAccount}
          />
        ))}
      </Item>
      <SubTitle>집에서 충전하기</SubTitle>
      <Item>
        {chargeListHome.map((item, index) => (
          <ProductContainer
            key={`itemComponent-${index}`}
            price={item.productPrice}
            name={item.productName}
            img={item.productImg}
            hoverImg={item.productHoverImg}
            account={item.productAccount}
          />
        ))}
      </Item>

      <SubTitle>운전 중 잠시 충전하기</SubTitle>
      <Item>
        {chargeListCar.map((item, index) => (
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
        {chargeListParts.map((item, index) => (
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

export default ChargeComp;

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
  // justify-content: center;
`;
