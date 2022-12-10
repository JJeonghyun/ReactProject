import "./App.css";
import { Route, Routes } from "react-router";

import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </>
  );
}
export default App;
