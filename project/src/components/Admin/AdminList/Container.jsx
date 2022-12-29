import axios from "axios";
import { useState } from "react";

import AdminListComp from "./Comp";

const AdminListContainer = () => {
  const [list, setList] = useState([]);
  const [uploadArr, setUpload] = useState([]);

  const listUp = () => {
    axios.get("/api/product/list").then((data) => {
      setUpload(data.data.data);
      setList(data.data.list);
    });
  };

  const remove = (productName) => {
    axios
      .post("/api/product/remove", {
        productName: productName,
      })
      .then((data) => {
        listUp();
      });
  };

  return (
    <AdminListComp
      listUp={listUp}
      list={list}
      remove={remove}
      uploadArr={uploadArr}
    />
  );
};

export default AdminListContainer;
