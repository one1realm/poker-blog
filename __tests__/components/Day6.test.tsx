import { describe, expect, it, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Day6 from "@/components/Day6";

vi.mock("next/navigation");

const { mockDayHeader } = vi.hoisted(() => ({
  mockDayHeader: vi.fn(),
}));

vi.mock("@/components/DayHeader", () => {
  return {
    default: mockDayHeader,
  };
});

describe("Day6", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders", () => {
    render(<Day6 />);
    expect(screen.getByTestId("Day6")).toBeInTheDocument();
  });
});
