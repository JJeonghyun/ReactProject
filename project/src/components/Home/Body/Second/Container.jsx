import { useState } from "react";
import axios from "axios";

import SecondComp from "./Comp";

const SecondContainer = () => {
  const [isOrder, setIsOrder] = useState(false);
  const [orderList, setOrder] = useState([]);
  const mainListUp = async (order) => {
    const data = await axios.post(
      "http://localhost:8080/api/product/orderlist",
      {
        order: order,
      }
    );
    console.log(data.data.list);
    setOrder(data.data.list);
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
