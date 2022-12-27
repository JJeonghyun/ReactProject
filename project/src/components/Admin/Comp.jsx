import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRef, useState } from "react";

const AdminComponent = ({
  preveiwImg,
  tempSrc,
  tempSrcHover,
  check,
  setCheck,
  checkHover,
  setCheckHover,
}) => {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [category, setCategory] = useState("");
  const [account, setAccount] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");

  const fileInput = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { product_img } = e.target;

      const formData = new FormData();

      formData.append("name", name);
      formData.append("product_img", product_img.files[0]);
      formData.append("product_img", product_img.files[1]);
      formData.append("model", model);
      formData.append("account", account);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("info", info);
      const data = await axios.post(
        "http://localhost:8080/api/upload/upload",
        formData
      );
    } catch (error) {
      console.log(error);
    }
    setName("");
    setModel("");
    setCategory("");
    setAccount("");
    setPrice("");
    setInfo("");
    setCheck(false);
    setCheckHover(false);
    fileInput.current.value = "";
  };
  return (
    <AdminBox>
      <div>
        <div>Product</div>
        <div>
          <Link to={"/admin"}>Management</Link>
        </div>
        <div>
          <Link to={"/adminlist"}>List</Link>
        </div>
      </div>
      <div>
        <div>Upload</div>
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <div>
            <div>
              <div>상품명 : </div>
              <div>
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
            </div>
            <div>
              <div>상품 사진 :</div>
              <div>
                <input
                  type={"file"}
                  name={"product_img"}
                  accept={"image/*"}
                  onChange={preveiwImg}
                  ref={fileInput}
                  multiple
                />
              </div>
            </div>
            <PreviewImgBox>
              {check ? (
                <div>
                  <img src={tempSrc} />
                </div>
              ) : (
                <></>
              )}
              {checkHover ? (
                <div>
                  <img src={tempSrcHover} />
                </div>
              ) : (
                <></>
              )}
            </PreviewImgBox>
            <div>
              <div>모델명 : </div>
              <div>
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
            </div>

            <div>
              <div>수량 : </div>
              <div>
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
            </div>
            <div>
              <div>가격 : </div>
              <div>
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
            </div>
            <div>
              <div>상품 설명 : </div>
              <div>
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
              <div>카테고리 : </div>
              <div>
                <select
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <option value="undefined">카테고리</option>
                  <option value="charge">충전</option>
                  <option value="accessory">악세사리</option>
                  <option value="apparel">의류</option>
                </select>
              </div>
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
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  & > div:first-child {
    width: 20%;
    padding: 0 10px;
    & > div:first-child {
      width: 100%;
      border-bottom: 1px solid black;
      padding: 10px 15px;
      font-size: 1.5rem;
      font-weight: 900;
    }
    & > div:nth-child(2),
    & > div:nth-child(3) {
      padding: 10px 0;
      font-weight: 900;
      width: fit-content;
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
  @media screen and (max-width: 425px) {
    & > div:first-child {
      width: 35%;
    }
  }
  & > div:last-child {
    width: 79%;
    padding: 0 10px;
    border-left: 1px solid black;

    & > form {
      width: 100%;
      padding: 10px 15px;
      & > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        flex-wrap: wrap;
        & > div {
          display: flex;
          width: 100%;
          padding: 5px 0;
          justify-content: flex-start;
          align-items: center;

          & > div {
            &:first-child {
              display: flex;
              justify-content: flex-end;
              width: 10%;
              padding: 0 10px 0 0;
              font-size: 1rem;
              @media screen and (max-width: 1024px) {
                &:first-child {
                  width: 13%;
                }
              }
              @media screen and (max-width: 425px) {
                &:first-child {
                  width: 100%;
                  justify-content: flex-start;
                }
              }
            }
            &:last-child {
              width: 35%;
            }
            @media screen and (max-width: 425px) {
              &:last-child {
                width: 100%;
              }
            }
          }
          &:nth-child(3) {
            width: 100%;
          }
          & > img {
            width: 70%;
          }
          & > select {
            display: inline-block;
            width: fit-content;
            padding: 5px 10px;
            border-radius: 10px;
          }
        }
        @media screen and (max-width: 425px) {
          & > div {
            flex-wrap: wrap;
          }
        }
      }
    }

    & > div:first-child {
      width: 100%;
      border-bottom: 1px solid black;
      padding: 10px 15px;
      font-size: 1.5rem;
      font-weight: 900;
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
  @media screen and (max-width: 425px) {
    & > div:last-child {
      width: 64%;
    }
  }
`;
const PreviewImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 48%;
    padding: 0 1%;
    & > img {
      width: 100%;
    }
  }
`;
