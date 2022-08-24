import ProductsContainer from "./containers/Products";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductsContainer />
    </div>
  );
}

export default App;
