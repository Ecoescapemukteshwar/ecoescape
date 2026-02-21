import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Header } from "./Header";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: unknown) => <div {...(props as Record<string, unknown>)}>{children as React.ReactNode}</div>,
  },
  AnimatePresence: ({ children }: unknown) => <>{children as React.ReactNode}</>,
}));

// Mock react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    Link: ({ children, to, ...props }: unknown) => (
      <a href={to as string} {...(props as Record<string, unknown>)}>
        {children as React.ReactNode}
      </a>
    ),
  };
});

describe("Header", () => {
  it("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByText("Rooms")).toBeInTheDocument();
    expect(screen.getByText("Dining")).toBeInTheDocument();
    expect(screen.getByText("Garden")).toBeInTheDocument();
    expect(screen.getByText("Gallery")).toBeInTheDocument();
    expect(screen.getByText("Things to Do")).toBeInTheDocument();
    expect(screen.getByText("Reviews")).toBeInTheDocument();
  });

  it("renders phone number", () => {
    render(<Header />);
    expect(screen.getByText("+91 96678 46787")).toBeInTheDocument();
  });

  it("renders WhatsApp button", () => {
    render(<Header />);
    expect(screen.getByText("WhatsApp")).toBeInTheDocument();
  });

  it("opens mobile menu when menu button is clicked", async () => {
    render(<Header />);
    const menuButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(menuButton);
    await waitFor(() => {
      expect(menuButton).toHaveAttribute("aria-expanded", "true");
    });
  });

  it("has proper ARIA attributes", () => {
    render(<Header />);
    const menuButton = screen.getByLabelText("Toggle menu");
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(menuButton).toHaveAttribute("aria-controls", "mobile-menu");
  });
});
