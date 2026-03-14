import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Product from "./Product.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Home", () => {
    it("creates product correctly", () => {
        render(
            <MemoryRouter>
                <Product title="item" price={5} quantity={1} />
            </MemoryRouter>
        );
        expect(
            screen.getByRole("heading", { name: /item/i, level: 3 })
        ).toBeInTheDocument();
        expect(screen.getByText(/^5.00.+/)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/1/)).toBeInTheDocument();
    });
});
