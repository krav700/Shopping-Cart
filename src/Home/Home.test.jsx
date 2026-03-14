import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Home", () => {
    it("contains welcome text", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(
            screen.getByRole("heading", { name: /Welcome.+/i, level: 2 })
        ).toBeInTheDocument();
    });
});
