import axios from "axios";
import { useState } from "react";

import AdminListComp from "./Comp";

const AdminListContainer = () => {
  const [list, setList] = useState([]);

  const listUp = async () => {
    const data = await axios.get("http://localhost:8080/api/product/list");
    setList(data.data.list);
  };
  return <AdminListComp listUp={listUp} list={list} />;
};
export default AdminListContainer;
