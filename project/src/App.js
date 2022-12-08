import "./App.css";
import ItemComponents from "./components/Search/itemList/Components";
import ItemHead from "./components/Search/itemHead/Components";
// import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
      <div>
        <ItemHead />
        <ItemComponents />
    </div>
    </>
    
  );
}
export default App;
