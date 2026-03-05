import { useEffect, useState } from "react";
import ShopStyles from "./Shop.module.css"
import Product from "../Products/Product";

function Shop() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
              setProducts(data);
              console.log(data);
            });
      return (
        setProducts([])
      )
    }, []);

    useEffect(() => {
      console.log(products);
    }, [products]);

    return (
      <>
        <h1>Shop</h1>
        <div className={ShopStyles.products}>
        {products.map((product) => {
          return <Product key={product.id} title={product.title} image={product.image} price={product.price}/>
        })}
        </div>
      </>
    )
}

export default Shop;
