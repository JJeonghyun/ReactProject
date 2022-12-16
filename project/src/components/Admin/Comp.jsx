import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const AdminComponent = ({ listUp }) => {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [account, setAccount] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [tempSrc, setSrc] = useState("");
  const [check, setCheck] = useState(false);
  const fileInput = useRef();

  useEffect(() => {
    listUp();
  }, []);

  const setImg = (input) => {
    if (input.files && input.files[0]) {
      let readImg = new FileReader();

      readImg.onload = (e) => {
        setSrc(e.target.result);
        setCheck(true);
      };
      readImg.readAsDataURL(input.files[0]);
    }
  };

  const preveiwImg = (e) => {
    setImg(e.target);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("product_img", e.target.product_img.files[0]);
      formData.append("model", model);
      formData.append("color", color);
      formData.append("account", account);
      formData.append("price", price);
      formData.append("info", info);
      const data = await axios.post(
        "http://localhost:8080/api/upload/upload",
        formData
      );
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
    setName("");
    setModel("");
    setColor("");
    setAccount("");
    setPrice("");
    setInfo("");
    setCheck(false);
    fileInput.current.value = "";
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
        <form encType="multipart/form-data">
          <div>
            <div>
              상품명 :{" "}
              <input
                type={"text"}
                placeholder={"상품명"}
                name={"name"}
                value={name}
                onInput={(e) => {
                  setName(e.target.value);
                }}
                autoComplete={"off"}
              />
            </div>
            <div>
              상품 사진 :
              <input
                type={"file"}
                name={"product_img"}
                accept={"image/*"}
                onChange={preveiwImg}
                ref={fileInput}
              />
            </div>
            {check ? (
              <div>
                <img src={tempSrc} />
              </div>
            ) : (
              <></>
            )}
            <div>
              모델명 :{" "}
              <input
                type={"text"}
                placeholder={"모델명"}
                name={"model"}
                value={model}
                onInput={(e) => {
                  setModel(e.target.value);
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
                value={color}
                onInput={(e) => {
                  setColor(e.target.value);
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
                value={account}
                onInput={(e) => {
                  setAccount(e.target.value);
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
                value={price}
                onInput={(e) => {
                  setPrice(e.target.value);
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
                value={info}
                onInput={(e) => {
                  setInfo(e.target.value);
                }}
                autoComplete={"off"}
              />
            </div>
          </div>
          <div>
            <input type={"submit"} value={"업로드"} onSubmit={onSubmit} />
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
        & > img {
          width: 70%;
        }
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
