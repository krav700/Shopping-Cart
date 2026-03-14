import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { routerConfig } from "./routes.jsx";
import { CartContext } from "./App/App.jsx";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const makeRouter = (path = "/") =>
    createMemoryRouter(routerConfig, { initialEntries: [path] });

describe("Link navigation", () => {
    const user = userEvent.setup();
    
    beforeEach(() => {
        render(
            <CartContext value={{ cartItems: [], setCartItems: () => {} }}>
                <RouterProvider router={makeRouter("/")} />
            </CartContext>
        );
    });

    it("navigates to / when Home is clicked", async () => {
        await user.click(screen.getByRole("link", { name: /^home$/i }));

        expect(
            screen.getAllByRole("heading", { name: /home/i }, {level: 1})[0]
        ).toBeInTheDocument();
    });

    it("navigates to /shop when Shop is clicked", async () => {
        await user.click(screen.getByRole("link", { name: /shop$/i }));

        expect(
            screen.getAllByRole("heading", { name: /shop/i }, {level: 1})[0]
        ).toBeInTheDocument();
    });

    it("navigates to /cart when Cart is clicked", async () => {
        await user.click(screen.getByRole("link", { name: /cart$/i }));

        expect(
            screen.getAllByRole("heading", { name: /cart/i }, {level: 1})[0]
        ).toBeInTheDocument();
    });
});
