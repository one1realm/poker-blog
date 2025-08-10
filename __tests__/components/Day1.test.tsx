import { describe, expect, it, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Day1 from "@/components/Day1";

vi.mock("next/navigation");

const { mockDayHeader } = vi.hoisted(() => ({
  mockDayHeader: vi.fn(),
}));

vi.mock("@/components/DayHeader", () => {
  return {
    default: mockDayHeader,
  };
});

describe("Day1", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders", () => {
    render(<Day1 />);
    expect(screen.getByTestId("Day1")).toBeInTheDocument();
  });

  it("does not contain em dashes", () => {
    const { container } = render(<Day1 />);
    expect(container.innerHTML).not.toContain("—");
  });
});
