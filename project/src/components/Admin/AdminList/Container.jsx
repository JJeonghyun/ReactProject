import axios from "axios";
import { useState } from "react";

import AdminListComp from "./Comp";

const AdminListContainer = () => {
  const [list, setList] = useState([]);
  const [_, render] = useState(false);

  const listUp = async () => {
    const data = await axios.get("http://localhost:8080/api/product/list");
    setList(data.data.list);
  };

  const remove = async (productName) => {
    console.log(productName);
    const data = await axios.post("http://localhost:8080/api/product/remove", {
      productName: productName,
    });
    console.log(data.data.text);
    render((state) => !state);
  };
  return <AdminListComp listUp={listUp} list={list} remove={remove} />;
};
export default AdminListContainer;
