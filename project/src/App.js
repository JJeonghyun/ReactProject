import "./App.css";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
    </>
  );
}
export default App;
