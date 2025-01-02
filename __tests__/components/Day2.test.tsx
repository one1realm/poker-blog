import { describe, expect, it, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Day2 from "@/components/Day2";

vi.mock("next/navigation");

const { mockDayHeader } = vi.hoisted(() => ({
  mockDayHeader: vi.fn(),
}));

vi.mock("@/components/DayHeader", () => {
  return {
    default: mockDayHeader,
  };
});

describe("Day2", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders", () => {
    render(<Day2 />);
    expect(screen.getByTestId("Day2")).toBeInTheDocument();
  });
});
