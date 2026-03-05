import ProductStyles from "./Product.module.css";
function Product({ title, image, price }) {

    return (
        <div className={ProductStyles.product}>
            <div className={ProductStyles["image-container"]}>
                <img className={ProductStyles.image} src={image} alt={image} />
            </div>
            <div className={ProductStyles["product-body"]}>
                <h3 className={ProductStyles.title}>{title}</h3>
                <div className={ProductStyles["product-numbers"]}>
                    <p>{price}$</p>
                    <input className={ProductStyles["number-of-product"]} type="number" placeholder={0} min={0} max={999}/>
                </div>
                <div className={ProductStyles["buy-buttons"]}>
                    <button>Add to Cart</button>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Product;