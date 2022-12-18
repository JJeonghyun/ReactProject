import CartPageItem from "./Comp";

import { useSelector } from "react-redux";
const CartPageItemContainer = () => {
  const cartList = useSelector((state) => state.cartDB);
  return <>{<CartPageItem cartList={cartList} />}</>;
};

export default CartPageItemContainer;
