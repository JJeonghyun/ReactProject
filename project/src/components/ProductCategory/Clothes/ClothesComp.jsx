import styled from "styled-components";
import "./order.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductContainer from "../ProductList/Container";
const ClothesComp = () => {
  let [ClothesListT, setClothesListT] = useState([]);
  let [ClothesListJaket, setClothesListJaket] = useState([]);
  let [ClothesListCap, setClothesListCap] = useState([]);
  let [ClothesListSH, setClothesListSH] = useState([]);
  let [getList, setGetList] = useState([]);
  let [adminList, setAdminList] = useState([]);

  const getClothesList = async function () {
    try {
      setGetList([]);
      getList = await axios.get("http://localhost:8080/api/product/getlist");
      setGetList(getList.data.list);
      const t = getList.data.list.filter(
        (item) => item.productCategory == "clothesT"
      );
      const sh = getList.data.list.filter(
        (item) => item.productCategory == "clothesSH"
      );
      const jaket = getList.data.list.filter(
        (item) => item.productCategory === "clothesJaket"
      );
      const cap = getList.data.list.filter(
        (item) => item.productCategory === "clothesCap"
      );
      const admin = getList.data.list.filter(
        (item) => item.productCategory === "clothes"
      );
      setClothesListCap(cap);
      setClothesListT(t);
      setClothesListJaket(jaket);
      setClothesListSH(sh);
      setAdminList(admin);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getClothesList();
  }, []);

  return (
    <div>
      <Title>의류</Title>
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

      <SubTitle>티</SubTitle>
      <Item>
        {ClothesListT.map((item, index) => (
          <ProductContainer
            key={`itemComponent-${index}`}
            price={item.productPrice}
            name={item.productName}
            img={item.productImg}
            hoverImg={item.productHoverImg}
          />
        ))}
      </Item>

      <SubTitle>스웨트셔츠 & 후디</SubTitle>
      <Item>
        {ClothesListSH.map((item, index) => (
          <ProductContainer
            key={`itemComponent-${index}`}
            price={item.productPrice}
            name={item.productName}
            img={item.productImg}
            hoverImg={item.productHoverImg}
          />
        ))}
      </Item>

      <SubTitle>재킷</SubTitle>
      <Item>
        {ClothesListJaket.map((item, index) => (
          <ProductContainer
            key={`itemComponent-${index}`}
            price={item.productPrice}
            name={item.productName}
            img={item.productImg}
            hoverImg={item.productHoverImg}
          />
        ))}
      </Item>

      <SubTitle>모자</SubTitle>
      <Item>
        {ClothesListCap.map((item, index) => (
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
export default ClothesComp;

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
