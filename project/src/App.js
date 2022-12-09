import "./App.css";
import HeadComponent from "./components/header/Components";
import ItemComponents from "./components/Search/itemList/Components";
import ItemHead from "./components/Search/itemHead/Components";
import Footer from "./components/bottem/Components";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <HeadComponent />
      <ItemHead />
      <ItemComponents />
      <Footer />
    </div>
  );
}

export default App;
