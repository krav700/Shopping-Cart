import ProductStyles from "./Product.module.css";
import { useContext, useRef, useState } from "react";
import { CartContext } from "../App/App.jsx";
import { Link } from "react-router";

function Product({ style, id, title, image, price, quantity }) {
    const cartContext = useContext(CartContext);
    const cartItems = cartContext?.cartItems ?? [];
    const setCartItems = cartContext?.setCartItems ?? null;
    const productCount = useRef(1);

    function addToCart(functionality) {
        if (functionality != "cart") {
            if (productCount.current == 0) {
                alert("Please select more than 0 items!");
                return;
            }
            if (cartItems.find((item) => item.title == title)) {
                const cartItemsCopy = [...cartItems];
                cartItemsCopy.map((item) => {
                    if (item.title == title) {
                        item.count += Number(productCount.current);
                        return;
                    }
                });
                setCartItems(cartItemsCopy);
                return;
            }

            const productToAdd = {
                id,
                title,
                image,
                price,
                count: Number(productCount.current),
            };
            setCartItems((prev) => [...prev, productToAdd]);
        } else {
            const cartItemsCopy = [...cartItems];
            cartItemsCopy.map((item) => {
                if (item.title == title) {
                    item.count = Number(productCount.current);
                    return;
                }
            });
            setCartItems(cartItemsCopy);
            return;
        }
    }

    function removeItem(title) {
        let cartItemsCopy = [...cartItems];
        cartItemsCopy = cartItemsCopy.filter((item) => item.title != title);
        setCartItems(cartItemsCopy);
    }

    return (
        <div
            className={
                style != "cart"
                    ? ProductStyles.product
                    : ProductStyles["cart-item"]
            }
        >
            {style != "cart" ? (
                <div className={ProductStyles["image-container"]}>
                    <img
                        className={ProductStyles.image}
                        src={image}
                        alt={image}
                    />
                </div>
            ) : (
                <img
                    className={ProductStyles["cart-image"]}
                    src={image}
                    alt={image}
                />
            )}
            {style != "cart" ? (
                <div className={ProductStyles["product-body"]}>
                    <h3 className={ProductStyles.title}>{title}</h3>
                    <div className={ProductStyles["product-numbers"]}>
                        <p>{Number(price).toFixed(2)} $</p>
                        <input
                            onChange={(e) => {
                                productCount.current = e.target.value;
                            }}
                            className={ProductStyles["number-of-product"]}
                            type="number"
                            placeholder={1}
                            min={0}
                            max={999}
                        />
                    </div>
                    <div className={ProductStyles["buy-buttons"]}>
                        <button onClick={addToCart}>Add to Cart</button>
                        <Link to={"/cart"}>
                            <button
                                onClick={addToCart}
                                className={ProductStyles["checkout-btn"]}
                            >
                                Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    <div>
                        <button
                            className={ProductStyles["remove-item-btn"]}
                            onClick={() => {
                                removeItem(title);
                            }}
                        >
                            x
                        </button>
                        <h3 className={[ProductStyles["cart-title"]]}>
                            {title}
                        </h3>
                        <p>{Number(price).toFixed(2)}$</p>
                        <input
                            onChange={(e) => {
                                productCount.current = e.target.value;
                                addToCart("cart");
                            }}
                            defaultValue={quantity}
                            className={ProductStyles["number-of-product"]}
                            type="number"
                            min={0}
                            max={999}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default Product;
