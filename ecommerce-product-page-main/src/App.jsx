import "./css/App.css";
import "./css/common.css";
import NavigationBar from "./components/navigation-bar";
import Product from "./components/product";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Product />
    </div>
  );
}

export default App;
