import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import HeaderStyles from "./Header.module.css";
import { CartContext } from "../App/App.jsx";
import { useContext, useEffect, useState } from "react";
function Header() {
    const cartContext = useContext(CartContext);
    const cartItems = cartContext?.cartItems ?? [];
    const [cartProductCount, setCartProductCount] = useState(0);
    useEffect(() => {
        let cartProductCountSum = 0;
        cartItems.map((product) => {
            cartProductCountSum += Number(product.count);
        });
        setCartProductCount(cartProductCountSum);
    }, [cartItems]);

    return (
        <div className={HeaderStyles.header}>
            <Link className={HeaderStyles.title}> Shopaholic </Link>
            <nav>
                <div className={HeaderStyles["nav-body"]}>
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
            </nav>
        </div>
    );
}

export default Header;
