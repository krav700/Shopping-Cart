import { Link } from "react-router"

function Header() {
    return (
        <>
            <h1>Header</h1>
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>
            <Link to="cart">Cart</Link>

        </>
    )
}

export default Header;