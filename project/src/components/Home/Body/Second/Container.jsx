import { useState } from "react";
import axios from "axios";

import SecondComp from "./Comp";

const SecondContainer = () => {
  const [isOrder, setIsOrder] = useState(false);
  const [orderList, setOrder] = useState([]);
  const mainListUp = (order) => {
    axios
      .post("http://localhost:8080/api/product/orderlist", {
        order: order,
      })
      .then((data) => {
        setOrder(data.data.list);
      });
  };

  return (
    <SecondComp
      mainListUp={mainListUp}
      orderList={orderList}
      isOrder={isOrder}
      setIsOrder={setIsOrder}
    />
  );
};
export default SecondContainer;
