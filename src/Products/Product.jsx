import ProductStyles from "./Product.module.css";
import { useContext, useState } from "react";
import { CartContext } from "../App/App.jsx";
import { Link } from "react-router";

function Product({ style, title, image, price }) {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [productCount, setProductCount] = useState(1);

    function addToCart() {
        if (productCount == 0) {
            alert("Please select more than 0 items!");
            return;
        }
        if (cartItems.find((item) => item.title == title)) {
            const cartItemsCopy = [...cartItems];
            cartItemsCopy.map((item) => {
                if (item.title == title) {
                    item.count += Number(productCount);
                    return;
                }
            });
            setCartItems(cartItemsCopy);
            return;
        }

        const productToAdd = {
            title,
            image,
            price,
            count: Number(productCount),
        };
        setCartItems((prev) => [...prev, productToAdd]);
        console.log("CART UPDATED");
    }

    return (
        <div className={style != "cart" ? ProductStyles.product : ProductStyles["cart-item"]}>
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
                                setProductCount(e.target.value);
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
                            <button onClick={addToCart}>Checkout</button>
                        </Link>
                    </div>
                </div>

            ) : (
                <>
                    <div>
                        <h3 className={[ProductStyles["cart-title"]]}>{title}</h3>
                        <p>{Number(price).toFixed(2)}$</p>
                        <input
                            onChange={(e) => {
                                setProductCount(e.target.value);
                            }}
                            className={ProductStyles["number-of-product"]}
                            type="number"
                            placeholder={1}
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
