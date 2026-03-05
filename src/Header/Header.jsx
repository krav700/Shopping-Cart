import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import HeaderStyles from "./Header.module.css"

function Header() {
  return (
    <>
      <h1>Header</h1>
      <div className={HeaderStyles.body}>
        <div className={HeaderStyles.links}>
          <Link to="/" className={HeaderStyles.link}>Home</Link>
          <Link to="shop" className={HeaderStyles.link}>Shop</Link>
          <Link to="cart" className={HeaderStyles.link}>Cart</Link>
        </div>
        <div className={HeaderStyles.cart}>
          <ShoppingCart size={40}/>
          <span className={HeaderStyles["cart-items"]}>1</span>
          </div>
      </div>
    </>
  );
}

export default Header;
