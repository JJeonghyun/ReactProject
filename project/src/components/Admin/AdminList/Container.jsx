import axios from "axios";
import { useState } from "react";

import AdminListComp from "./Comp";

const AdminListContainer = () => {
  const [list, setList] = useState([]);
  const [uploadArr, setUpload] = useState([]);

  const listUp = async () => {
    await axios.get("http://localhost:8080/api/product/list").then((data) => {
      setUpload(data.data.data);
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

  const cartAdd = async () => {
    const data = await axios.post("http://localhost:8080/api/cart/list/", {
      payload: { name, price, account, img, hoverImg },
    });

    if (data.data.already) {
      Sweetalert2.fire({
        title: `이미 장바구니에
      담긴 상품입니다.`,
        text: `OK 누르시면
      이전페이지로 돌아갑니다.`,
        icon: "warning",
        denyButtonText: "확인",
      });
    } else {
      Sweetalert2.fire({
        title: `${name}
      상품이 장바구니에 담겼습니다.`,
        text: "OK를 누르시면 이전페이지로 돌아갑니다.",
        icon: "success",
      });
    }

    return (
      <AdminListComp
        listUp={listUp}
        list={list}
        remove={remove}
        uploadArr={uploadArr}
        cartAdd={cartAdd}
      />
    );
  };
};
export default AdminListContainer;
