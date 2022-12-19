import axios from "axios";
import { useState } from "react";

import AdminListComp from "./Comp";

const AdminListContainer = () => {
  const [list, setList] = useState([]);

  const listUp = async () => {
    await axios.get("http://localhost:8080/api/product/list").then((data) => {
      setList(data.data.list);
    });
  };

  const remove = async (productName) => {
    const data = await axios
      .post("http://localhost:8080/api/product/remove", {
        productName: productName,
      })
      .then((data) => {
        listUp();
      });
  };

  return <AdminListComp listUp={listUp} list={list} remove={remove} />;
};
export default AdminListContainer;
