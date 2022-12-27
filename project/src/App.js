import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import AdminPage from "./pages/AdminPage";
import AdminListPage from "./pages/AdminListPage";
import CartPage from "./pages/CartPage";
import ChartPage from "./pages/ChartPage";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import RegistPage from "./pages/RegistPage";
import LogInPage from "./pages/LogInPage";
import MyPageBuy from "./pages/MyPageBuy";
import MyPageProfil from "./pages/MyPageProfil";
import ForgotPage from "./pages/ForgotPage";
import ProductInfoPage from "./pages/ProductInfoPage";
import MyPageBuyPage from "./pages/MyPageBuyPage";

import { action } from "./modules/userInfo";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (document.cookie.split("=").indexOf("user") == -1) {
      dispatch(action.logOut());
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/adminlist" element={<AdminListPage />} />
        <Route path="info" element={<ProductInfoPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="chart" element={<ChartPage />} />
        <Route path="all" element={<ProductCategoryPage elem={"all"} />} />
        <Route
          path="charge"
          element={<ProductCategoryPage elem={"charge"} />}
        />
        <Route path="acc" element={<ProductCategoryPage elem={"acc"} />} />
        <Route
          path="clothes"
          element={<ProductCategoryPage elem={"clothes"} />}
        />
        <Route path="/mypageprofil" element={<MyPageProfil />} />
        <Route path="/mypagebuy" element={<MyPageBuy />} />
        <Route path="/buypage" element={<MyPageBuyPage />} />
      </Routes>
      <UserBox>
        <Routes>
          <Route path="/login" element={<LogInPage />} />
          <Route path="/regist" element={<RegistPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
        </Routes>
      </UserBox>
    </>
  );
}
export default App;

const UserBox = styled.div`
  display: block;
  width: 350px;
  margin: auto;

  .forget > a {
    text-decoration-color: rgb(130, 130, 130);
    color: rgb(130, 130, 130);
    margin: 0 10px;
  }
  .wrapper {
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin: 1em 0;
  }
  .step {
    font-size: 13px;
    color: rgb(130, 130, 130);
  }
  .create {
    margin-top: 0;
  }
  h2 {
    font-weight: 500;
    font-size: 30px;
    margin-top: 70px;
  }
  .emailInput {
    margin-top: 15px;
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    width: 100px;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    text-align: center;
    color: rgb(10, 10, 10);
    margin: 0;
  }
  .info > span {
    color: white;
    background-color: #007aff;
    width: 17px;
    height: 17px;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
  }
  .infoHover {
    position: absolute;
    display: none;
    width: 380px;
    padding: 30px 20px;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-size: 12px;
    left: 400px;
    color: black;
    text-align: left;
    transition: 5s ease-in-out;
  }
  .info > span:hover .infoHover {
    display: block;
  }
  .error {
    font-size: 14px;
    font-weight: 600;
    color: #b73134;
  }
  .forget {
    font-size: 12px;
    color: rgb(130, 130, 130);
    padding-top: 10px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .forget > span {
    cursor: pointer;
    text-decoration: underline;
    transition: 0.3s ease-in-out;
  }

  .forget > span:hover {
    text-decoration: 2px underline;
    color: black;
  }

  input {
    width: 99%;
    height: 40px;
    border: none;
    border-radius: 5px;
    border: none;
    background-color: rgb(239, 239, 239);
    outline-color: rgb(180, 180, 180);
    padding: 10px;
  }

  hr {
    text-align: center;
  }

  .hr {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 350px;
    text-align: center;
    margin: 25px 0 0px;
  }

  .hr > hr {
    width: 350px;
    position: absolute;
    text-align: center;
  }

  .hr > p {
    position: relative;
    background-color: white;
    width: 50px;
    font-size: 13px;
  }
`;
