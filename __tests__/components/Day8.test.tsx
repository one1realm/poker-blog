import { describe, expect, it, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Day8 from "@/components/Day8";

vi.mock("next/navigation");

const { mockDayHeader } = vi.hoisted(() => ({
  mockDayHeader: vi.fn(),
}));

vi.mock("@/components/DayHeader", () => {
  return {
    default: mockDayHeader,
  };
});

describe("Day8", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders", () => {
    const { container } = render(<Day8 />);
    expect(container.innerHTML).not.toContain("—");
  });

  it("does not contain em dashes", () => {
    const { container } = render(<Day8 />);
    expect(container.innerHTML).not.toContain("—");
  });
});
