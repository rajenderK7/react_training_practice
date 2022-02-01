import "./App.css";
import ProductForm from "./components/product_form/ProductForm";
import UserCart from "./components/product_list/UserCart";

function App() {
  return (
    <div className="App">
      <ProductForm />
      <UserCart />
    </div>
  );
}

export default App;
