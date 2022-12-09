import styled from "styled-components";
import Header from "../components/Home/Header";
import ItemHead from "../components/Search/itemHead/Comp";
import ItemComponents from "../components/Search/itemList/Comp";
const Search = () => {
  const tempArr = [
    {
      name: "트포",
      price: "3300",
      img: "./imgs/second.DB/wheel2.png",
      hoverImg: "./imgs/second.DB/wheel-2.png",
    },
    {
      name: "데캡",
      price: "3600",
      img: "./imgs/second.DB/wheel3.png",
      hoverImg: "./imgs/second.DB/wheel3-3.png",
    },
    {
      name: "보이드",
      price: "2800",
      img: "./imgs/second.DB/wheel7.png",
      hoverImg: "./imgs/second.DB/wheel7-7.png",
    },
  ];
  return (
    <>
      <Header />
      <ItemHead />
      <Item>
        {tempArr.map((item) => (
          <ItemComponents
            price={item.price}
            name={item.name}
            img={item.img}
            hoverImg={item.hoverImg}
          />
        ))}
      </Item>
    </>
  );
};

export default Search;

const Item = styled.div`
  display: flex;
`;
