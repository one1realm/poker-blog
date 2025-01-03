import { describe, expect, it, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Day3 from "@/components/Day3";

vi.mock("next/navigation");

const { mockDayHeader } = vi.hoisted(() => ({
  mockDayHeader: vi.fn(),
}));

vi.mock("@/components/DayHeader", () => {
  return {
    default: mockDayHeader,
  };
});

describe("Day3", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders", () => {
    render(<Day3 />);
    expect(screen.getByTestId("Day3")).toBeInTheDocument();
  });
});
