import "./App.css";
import MainPage from "./pages/MainPage";
import Search from "./pages/SearchPage";
import { Route, Routes } from "react-router";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </>
  );
}
export default App;
