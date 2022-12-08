import "./App.css";
import HeadComponent from "./components/header/Components";
import ItemComponents from "./components/Search/itemList/Components";
import ItemHead from "./components/Search/itemHead/Components";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <HeadComponent />
      <ItemHead />
      <ItemComponents />
    </div>
  );
}

export default App;
