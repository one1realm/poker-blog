import { describe, expect, it, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Day5 from "@/components/Day5";

vi.mock("next/navigation");

const { mockDayHeader } = vi.hoisted(() => ({
  mockDayHeader: vi.fn(),
}));

vi.mock("@/components/DayHeader", () => {
  return {
    default: mockDayHeader,
  };
});

describe("Day5", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders", () => {
    render(<Day5 />);
    expect(screen.getByTestId("Day5")).toBeInTheDocument();
  });

  it("does not contain em dashes", () => {
    const { container } = render(<Day5 />);
    expect(container.innerHTML).not.toContain("—");
  });
});
