import ItemListComp from "./Comp";

const ItemListContainer = ({
  name,
  price,
  account,
  img,
  hoverImg,
  searchResult,
}) => {
  return (
    <ItemListComp
      name={name}
      price={price}
      account={account}
      img={img}
      hoverImg={hoverImg}
      searchResult={searchResult}
    />
  );
};
export default ItemListContainer;
