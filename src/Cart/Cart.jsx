import { useContext, useEffect, useState } from "react";
import CartStyle from "./Cart.module.css";
import { CartContext } from "../App/App";
import { Link } from "react-router-dom";
import Product from "../Products/Product";
import { ShoppingCart } from "lucide-react";

function Cart() {
    const cartContext = useContext(CartContext);
    const cartItems = cartContext?.cartItems ?? [];
    const setCartItems = cartContext?.setCartItems ?? null;
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let sum = 0;
        cartItems.map((item) => {
            sum += Number(item.count) * Number(item.price);
        });
        setTotal(sum);
    }, [cartItems]);

    return (
        <>
            <h1>Cart</h1>
            {total == 0 ? (
                <main className={CartStyle["empty-cart"]}>
                    <ShoppingCart
                        size={300}
                        className={CartStyle["cart-image"]}
                    />
                    <div
                        className={`${CartStyle["cart-item"]} ${CartStyle["empty"]}`}
                    >
                        <h2>No items in the cart!</h2>
                        <Link to="/shop" className={CartStyle.link}>
                            Browse Products!
                        </Link>
                    </div>
                </main>
            ) : (
                <main>
                    <div className={CartStyle["cart-items-container"]}>
                        <div className={CartStyle["product-section"]}>
                            {cartItems.map((item) => {
                                return (
                                    <>
                                        <Product
                                            key={item.id}
                                            style={"cart"}
                                            title={item.title}
                                            image={item.image}
                                            price={item.price}
                                            quantity={item.count}
                                        />
                                    </>
                                );
                            })}
                        </div>
                        <div className={CartStyle["checkout-section"]}>
                            <div className={CartStyle["item-prices-calc"]}>
                                {cartItems.map((item) => {
                                    return (
                                        <p>
                                            {item.count} x{" "}
                                            {Number(item.price).toFixed(2)}
                                        </p>
                                    );
                                })}
                            </div>
                            <h3 className={CartStyle.total}>
                                Total: {Number(total).toFixed(2)} $
                            </h3>
                            <button
                                onClick={() => {
                                    alert("Items are on their way!");
                                    setCartItems([]);
                                }}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </main>
            )}
        </>
    );
}

export default Cart;
