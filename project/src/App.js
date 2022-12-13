import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import AdminPage from "./pages/AdminPage";
import AdminListPage from "./pages/AdminListPage";
import CartPage from "./pages/CartPage";
import Appage from "./pages/Appage";
import ChartPage from "./pages/ChartPage";

import LogInContainer from "./components/User/LogIn/Container";
import LogInNextContainer from "./components/User/LogInNext/Container";
import RegistContainer from "./components/User/Regist/Container";
import RegistEmailContainer from "./components/User/RegistEmail/Container";
import ProductImgContainer from "./components/Products/ProductImg/Container";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/appage" element={<Appage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/adminlist" element={<AdminListPage />} />
        <Route path="info" element={<ProductImgContainer />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="chart" element={<ChartPage />} />
      </Routes>
      <UserBox>
        <Routes>
          <Route path="/login" element={<LogInContainer />} />
          <Route path="/loginnext" element={<LogInNextContainer />} />
          <Route path="/regist" element={<RegistContainer />} />
          <Route path="/registmail" element={<RegistEmailContainer />} />
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
    text-align: center;
    font-size: 13px;
    color: rgb(130, 130, 130);
  }
  .forget > span {
    cursor: pointer;
    text-decoration: underline;
    transition: 0.3s ease-in-out;
    margin: 0px 10px 0px 10px;
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
