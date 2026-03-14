import { describe, it, expect, expectTypeOf } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
    it("renders", () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        expect(
            screen.getByRole("heading", { name: /shopaholic/i })
        ).toBeInTheDocument();
        expect(screen.getByText(/shopaholic@gmail.com/i));
    });
});
