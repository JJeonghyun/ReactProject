import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const AdminComponent = () => {
  const [inputInfo, setInput] = useState([
    {
      name: "",
      productImg: "",
      model: "",
      color: "",
      account: "",
      price: "",
      info: "",
    },
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", inputInfo.name);
    formData.append("product_img", e.target.product_img.files[0]);
    formData.append("model", inputInfo.model);
    formData.append("color", inputInfo.color);
    formData.append("account", inputInfo.account);
    formData.append("price", inputInfo.price);
    formData.append("info", inputInfo.info);

    const data = axios.post(
      "http://localhost:8080/api/upload/upload",
      formData
    );
    alert(`나온다!! ${data.data}`);
  };
  return (
    <AdminBox>
      <div>
        <div>Admin</div>
        <div>
          <Link to={"/admin"}>Product Management</Link>
        </div>
        <div>
          <Link to={"/adminlist"}>Product List</Link>
        </div>
      </div>
      <div>
        <div>Product Upload</div>
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <div>
            <div>
              상품명 :{" "}
              <input
                type={"text"}
                placeholder={"상품명"}
                name={"name"}
                value={inputInfo.name}
                onInput={(e) => {
                  setInput(e.target.value);
                }}
                autoComplete={"off"}
              />
            </div>
            <div>
              상품 사진 :
              <input type={"file"} name={"product_img"} accept={"image/*"} />
            </div>
            <div>
              모델명 :{" "}
              <input
                type={"text"}
                placeholder={"모델명"}
                name={"model"}
                value={inputInfo.model}
                onInput={(e) => {
                  setInput(e.target.value);
                }}
                autoComplete={"off"}
              />
            </div>
            <div>
              색상 :{" "}
              <input
                type={"text"}
                placeholder={"색상"}
                name={"color"}
                value={inputInfo.color}
                onInput={(e) => {
                  setInput(e.target.value);
                }}
                autoComplete={"off"}
              />
            </div>
            <div>
              수량 :{" "}
              <input
                type={"text"}
                placeholder={"수량"}
                name={"account"}
                value={inputInfo.account}
                onInput={(e) => {
                  setInput(e.target.value);
                }}
                autoComplete={"off"}
              />
            </div>
            <div>
              가격 :{" "}
              <input
                type={"text"}
                placeholder={"가격"}
                name={"price"}
                value={inputInfo.price}
                onInput={(e) => {
                  setInput(e.target.value);
                }}
                autoComplete={"off"}
              />
            </div>
            <div>
              상품 설명 :{" "}
              <input
                type={"text"}
                placeholder={"설명"}
                name={"info"}
                value={inputInfo.info}
                onInput={(e) => {
                  setInput(e.target.value);
                }}
                autoComplete={"off"}
              />
            </div>
          </div>
          <div>
            <input type={"submit"} value={"업로드"} />
          </div>
        </form>
      </div>
    </AdminBox>
  );
};
export default AdminComponent;

const AdminBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 170px);
  & > div:first-child {
    width: 20%;
    border-right: 1px solid red;
    padding: 0 10px;
    height: 100%;
    & > div:first-child {
      border-bottom: 1px solid black;
    }
    & > div:nth-child(2),
    & > div:nth-child(3) {
      padding: 10px 0;
    }
    & > div:nth-child(2) > a,
    & > div:nth-child(3) > a {
      padding: 10px 5px;
      border-radius: 10px;
    }
    & > div:nth-child(2):hover > a,
    & > div:nth-child(3):hover > a {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  & > div:last-child {
    width: 79%;
    padding: 0 10px;
    height: 100%;
    & > form > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 35%;
      flex-wrap: wrap;
      & > div {
        width: 100%;
        padding: 5px 0;
      }
    }

    & > div:first-child {
      border-bottom: 1px solid black;
    }
    & > div:last-child {
      padding: 10px 0;
    }
    & > form > div:last-child > input {
      margin-top: 15px;
      padding: 5px 10px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
      }
    }
  }
`;
