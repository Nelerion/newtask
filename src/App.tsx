import Favorites from "./components/favorites/favorites";
import Header from "./components/header/header";
import List from "./pages/products_list/product_list";
import "./styles/style.scss";
import { useEffect } from "react";
import {  dispatch } from "./state/state";
import {Routes,Route} from "react-router-dom";
import Product from "./pages/product/product";
import { fetchProducts } from "./API/api";

const App = () => {
  const fetching = async () => {
    let result = await fetchProducts;
    try {
      if (!result.status) {
        throw new Error("Ошибка");
      }
      let json = await result.json();

      dispatch({ type: "fetchProducts", payload: json });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <>
      <Header />
      <div className="container content">
        <Favorites />
        <Routes>
          <Route path="/" element={<List />}/>
          <Route path="/product/:id" element={<Product />}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
