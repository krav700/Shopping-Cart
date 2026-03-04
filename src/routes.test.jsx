import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { routerConfig } from "./routes.jsx";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const makeRouter = (path = "/") =>
    createMemoryRouter(routerConfig, { initialEntries: [path] });

beforeEach(() => {
    render(<RouterProvider router={makeRouter("/")} />);
});
describe("Link navigation", () => {
    const user = userEvent.setup();

    it("navigates to / when Home is clicked", async () => {
        await user.click(screen.getByRole("link", { name: /home/i }));

        expect(
            screen.getByRole("heading", { name: /home/i })
        ).toBeInTheDocument();
    });

    it("navigates to /shop when Shop is clicked", async () => {
        await user.click(screen.getByRole("link", { name: /shop/i }));

        expect(
            screen.getByRole("heading", { name: /shop/i })
        ).toBeInTheDocument();
    });

    it("navigates to /cart when Cart is clicked", async () => {
        await user.click(screen.getByRole("link", { name: /cart/i }));

        expect(
            screen.getByRole("heading", { name: /cart/i })
        ).toBeInTheDocument();
    });
});
