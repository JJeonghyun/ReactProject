import "./App.css";
import { Route, Routes } from "react-router";

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
