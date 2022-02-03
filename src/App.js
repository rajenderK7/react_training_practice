import "./App.css";
import ProductList from "./components/products/ProductList";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./UI/Header";
import Users from "./components/products/Users";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <ProductList></ProductList> */}

      <Routes>
        <Route path="/" element={<ProductList></ProductList>}></Route>
        <Route path="/products" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
      </Routes>
    </div>
  );
}

export default App;
