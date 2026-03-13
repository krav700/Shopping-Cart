import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App/App";
import CartStyle from "./Cart.module.css"
import Product from "../Products/Product";

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cartItems.map((item) => {
      sum += Number(item.count) * Number(item.price);
    })
    setTotal(sum);
  }, [cartItems]);

  function removeItem(title) {
    let cartItemsCopy = [...cartItems];
    cartItemsCopy = cartItemsCopy.filter(item => item.title != title);
    setCartItems(cartItemsCopy);
  }

  return (
  <>
    <h1>Cart</h1>
    <div className={CartStyle["cart-items-container"]}>
      <div className={CartStyle["product-section"]}>
        {cartItems.map((item, index) => {
          return (
            <>
              <button className={CartStyle["remove-item-btn"]} onClick={() => {removeItem(item.title)}}>x</button>
              <Product style={"cart"} key={index} title={item.title} image={item.image} price={item.price}/>
            </>
          )
        })}
      </div>
      <div className={CartStyle["checkout-section"]}>
        <div className={CartStyle["item-prices-calc"]}>
          {cartItems.map((item) => {
            return <p>{item.count} x {item.price}</p>
          })}
        </div>
        <h3 className={CartStyle.total}>Total: {Number(total).toFixed(2)} $</h3>
        <button>Checkout</button>
      </div>
    </div>
  </>
  )
}

export default Cart;
