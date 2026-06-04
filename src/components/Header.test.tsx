import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

// Header uses useLocation(), so it must render inside a Router.
const renderHeader = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

describe("Header", () => {
  it("renders navigation links", () => {
    renderHeader();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Experiences")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Gallery")).toBeInTheDocument();
  });

  it("renders phone number", () => {
    renderHeader();
    // Phone shows in both the top contact bar and the desktop CTA button.
    expect(screen.getAllByText("+91 96678 46787").length).toBeGreaterThan(0);
  });

  it("renders WhatsApp button", () => {
    renderHeader();
    expect(screen.getByText("WhatsApp")).toBeInTheDocument();
  });

  it("opens mobile menu when menu button is clicked", async () => {
    renderHeader();
    const menuButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(menuButton);
    await waitFor(() => {
      expect(menuButton).toHaveAttribute("aria-expanded", "true");
    });
  });

  it("has proper ARIA attributes", () => {
    renderHeader();
    const menuButton = screen.getByLabelText("Toggle menu");
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(menuButton).toHaveAttribute("aria-controls", "mobile-menu");
  });
});
