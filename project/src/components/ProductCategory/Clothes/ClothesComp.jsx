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

  const getClothesList = async function () {
    try {
      ClothesListT = await axios.get(
        "http://localhost:8080/api/product/ClothesT"
      );
      ClothesListJaket = await axios.get(
        "http://localhost:8080/api/product/ClothesJaket"
      );
      ClothesListCap = await axios.get(
        "http://localhost:8080/api/product/ClothesCap"
      );

      ClothesListSH = await axios.get(
        "http://localhost:8080/api/product/ClothesSH"
      );
      setClothesListCap(ClothesListCap.data.list);
      setClothesListT(ClothesListT.data.list);
      setClothesListJaket(ClothesListJaket.data.list);
      setClothesListSH(ClothesListSH.data.list);
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
