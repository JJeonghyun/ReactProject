import ItemListComp from "./Comp";
import axios from "axios";
import Sweetalert2 from "sweetalert2";

const ItemListContainer = ({
  name,
  price,
  account,
  img,
  hoverImg,
  searchResult,
}) => {
  const cartCheckList = async () => {
    const data = await axios.post("/api/cart/list/", {
      payload: { name, price, account, img, hoverImg },
    });

    if (data.data.already) {
      Sweetalert2.fire({
        title: `이미 장바구니에\n담긴 상품입니다.`,
        text: `OK 누르시면 이전 페이지로 돌아갑니다.`,
        icon: "warning",
        denyButtonText: "확인",
      });
    } else {
      Sweetalert2.fire({
        title: `${name}\n상품이 장바구니에 담겼습니다.`,
        text: "OK를 누르시면 이전 페이지로 돌아갑니다.",
        icon: "success",
      });
    }
  };
  return (
    <ItemListComp
      name={name}
      price={price}
      account={account}
      img={img}
      hoverImg={hoverImg}
      searchResult={searchResult}
      cartCheckList={cartCheckList}
    />
  );
};
export default ItemListContainer;
