import { useSelector } from "react-redux";

import CartPageItem from "./Comp";

const CartPageItemContainer = () => {
  const cartList = useSelector((state) => state.cartDB);
  return <>{<CartPageItem cartList={cartList} />}</>;
};

export default CartPageItemContainer;
