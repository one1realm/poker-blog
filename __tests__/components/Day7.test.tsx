import { describe, expect, it, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Day7 from "@/components/Day7";

vi.mock("next/navigation");

const { mockDayHeader } = vi.hoisted(() => ({
  mockDayHeader: vi.fn(),
}));

vi.mock("@/components/DayHeader", () => {
  return {
    default: mockDayHeader,
  };
});

describe("Day7", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders", () => {
    render(<Day7 />);
    expect(screen.getByTestId("Day7")).toBeInTheDocument();
  });
});
