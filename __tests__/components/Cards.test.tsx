import { describe, expect, it, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Cards from "@/components/Cards";

vi.mock("next/navigation");

const { mockDayHeader } = vi.hoisted(() => ({
  mockDayHeader: vi.fn(),
}));

vi.mock("@/components/DayHeader", () => {
  return {
    default: mockDayHeader,
  };
});

describe("Cards", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders", () => {
    render(<Cards hand="AhKs" />);
    expect(screen.getByTestId("Cards")).toBeInTheDocument();
  });

  it("throws if the provided hand has invalid rank", () => {
    expect(() => render(<Cards hand="Xc" />)).toThrowError(
      "Failed to parse rank(s) of hand: Xc"
    );
  });

  it("throws if the provided hand has invalid suit", () => {
    expect(() => render(<Cards hand="Az" />)).toThrowError(
      "Failed to parse suit(s) of hand: Az"
    );
  });

  it("throws if no cards could be parsed from the provided hand", () => {
    expect(() => render(<Cards hand="" />)).toThrowError(
      "Failed to parse any cards of the provided hand"
    );
  });
});
