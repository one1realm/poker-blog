import { describe, expect, it, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Day4 from "@/components/Day4";

vi.mock("next/navigation");

const { mockDayHeader } = vi.hoisted(() => ({
  mockDayHeader: vi.fn(),
}));

vi.mock("@/components/DayHeader", () => {
  return {
    default: mockDayHeader,
  };
});

describe("Day4", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders", () => {
    render(<Day4 />);
    expect(screen.getByTestId("Day4")).toBeInTheDocument();
  });

  it("does not contain em dashes", () => {
    const { container } = render(<Day4 />);
    expect(container.innerHTML).not.toContain("—");
  });
});
