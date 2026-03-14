import { describe, it, expect, beforeEach, vi } from "vitest";
import {
    render,
    screen,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import Shop from "./Shop.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Shop", () => {
    beforeEach(() => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve([
                        {
                            id: 1,
                            title: "Test Product",
                            image: "img.jpg",
                            price: 5.0,
                        },
                    ]),
            })
        );
    });

    it("Shop test", async () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        );

        await waitForElementToBeRemoved(() => screen.queryByText(/loading.+/i));

        expect(
            screen.getByRole("heading", { name: /Test Product/i })
        ).toBeInTheDocument();
        expect(screen.getByText(/5.00.+/i)).toBeInTheDocument();
        expect(screen.getByText(/add to cart/i)).toBeInTheDocument();
        expect(screen.getByText(/checkout/i)).toBeInTheDocument();
    });
});
