import { createContext, useState } from "react";
import "../index.css";
import AppS from "./App.module.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export const CartContext = createContext(null);

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className={AppS.container}>
      <CartContext value={{
        cartItems,
        setCartItems
      }}>
        <Header />
        <Outlet />
      </CartContext>
      <Footer />
    </div>
  );
}

export default App;
