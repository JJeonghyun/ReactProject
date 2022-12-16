import axios from "axios";
import { useState } from "react";

import AdminComponent from "./Comp";

const AdminContainer = () => {
  const [list, setList] = useState([]);

  const listUp = async () => {
    const data = await axios.get("http://localhost:8080/api/product/list");
    setList(data.data.list);
  };
  return <AdminComponent listUp={listUp} />;
};
export default AdminContainer;
