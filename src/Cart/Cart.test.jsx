import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Cart from "./Cart.jsx";
import Product from "../Products/Product";
import { CartContext } from "../App/App";
import { useState } from "react";

function Wrapper() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext value={{ cartItems, setCartItems }}>
      <Product title="item" price={5} quantity={1} />
      <Cart />
    </CartContext>
  )
}

describe("Cart", () => {
    it("shows no items in the cart", () => {
        render(
            <MemoryRouter>
                <Cart />
            </MemoryRouter>
        );

        expect(screen.getByText(/no items in the cart/i));
    });
    it("shows items in the cart", async () => {
        render(
            <MemoryRouter>
              <Wrapper />
            </MemoryRouter>
        );

        const user = userEvent.setup();

        await user.click(screen.getByRole("button", { name: /add to cart/i}));

        expect(screen.getByText(/.+x.+/i)).toBeInTheDocument();
    });
});
