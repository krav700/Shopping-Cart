import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "./Footer";
import { MemoryRouter } from "react-router-dom";

describe("Footer", () => {
    it("exists", () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        expect(
            screen.getByRole("heading", { name: /shopaholic/i })
        ).toBeInTheDocument();
    });
});
