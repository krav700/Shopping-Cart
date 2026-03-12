import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import HeaderStyles from "./Header.module.css";
import { CartContext } from "../App/App.jsx";
import { useContext, useEffect, useState } from "react";
function Header() {
    const { cartItems } = useContext(CartContext);
    const [cartProductCount, setCartProductCount] = useState(0);
    useEffect(() => {
      console.log("CART UPDATED2");

      let cartProductCountSum = 0;
      cartItems.map((product) => {
        cartProductCountSum += Number(product.count);
      });
      setCartProductCount(cartProductCountSum);
    }, [cartItems])
    return (
        <>
            <h1>Header</h1>
            <div className={HeaderStyles.body}>
                <div className={HeaderStyles.links}>
                    <Link to="/" className={HeaderStyles.link}>
                        Home
                    </Link>
                    <Link to="shop" className={HeaderStyles.link}>
                        Shop
                    </Link>
                    <Link to="cart" className={HeaderStyles.link}>
                      Cart
                    </Link>
                </div>
                <Link to="cart" className={HeaderStyles["cart-link"]}>
                <div className={HeaderStyles.cart}>
                      <ShoppingCart size={40} />
                      <span className={HeaderStyles["cart-items"]}>
                          {cartProductCount}
                      </span>
                </div>
                </Link>
            </div>
        </>
    );
}

export default Header;
