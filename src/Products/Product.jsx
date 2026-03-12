import ProductStyles from "./Product.module.css";
import { useContext, useState } from "react";
import { CartContext } from "../App/App.jsx";

function Product({ title, image, price }) {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [productCount, setProductCount] = useState(1);


    function addToCart() {
        if (productCount == 0) {
            alert("Please select more than 0 items!");
            return;
        }
        if (cartItems.find(item => item.title == title)) {
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
        }
        setCartItems((prev) => [...prev, productToAdd]);
        console.log("CART UPDATED");
    }

    return (
        <div className={ProductStyles.product}>
            <div className={ProductStyles["image-container"]}>
                <img className={ProductStyles.image} src={image} alt={image} />
            </div>
            <div className={ProductStyles["product-body"]}>
                <h3 className={ProductStyles.title}>{title}</h3>
                <div className={ProductStyles["product-numbers"]}>
                    <p>{price}$</p>
                    <input
                        onChange={(e) => {setProductCount(e.target.value)}}
                        className={ProductStyles["number-of-product"]}
                        type="number"
                        placeholder={1}
                        min={0}
                        max={999}
                    />
                </div>
                <div className={ProductStyles["buy-buttons"]}>
                    <button onClick={addToCart}>Add to Cart</button>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Product;
