import { useEffect, useState } from "react";
import ShopStyles from "./Shop.module.css";
import Product from "../Products/Product";

function Shop() {
    const [products, setProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(true);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoadingProducts(false);
            });
        return setProducts([]);
    }, []);

    return (
        <>
            <h1>Shop</h1>
            {loadingProducts ? (
                <h1>Loading...</h1>
            ) : (
                <div className={ShopStyles.products}>
                    {products.map((product) => {
                        return (
                            <Product
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                price={product.price}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default Shop;
