import { describe, expect, it, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { useParams } from "next/navigation";
import Day from "@/components/Day";

vi.mock("next/navigation");

const { mockDay1 } = vi.hoisted(() => ({
  mockDay1: vi.fn(),
}));

vi.mock("@/components/Day1", () => {
  return {
    default: mockDay1,
  };
});

describe("Day", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders <div>Not found</div> when userParams.id is '0'", () => {
    vi.mocked(useParams).mockReturnValue({ id: "0" });
    render(<Day />);
    expect(screen.getByTestId("Day")).toBeInTheDocument();
    expect(screen.getByTestId("Day")).toContainHTML("<div>Not found</div>");
  });

  it("renders <Day1 /> when userParams.id is '1'", () => {
    vi.mocked(useParams).mockReturnValue({ id: "1" });
    render(<Day />);
    expect(screen.getByTestId("Day")).toBeInTheDocument();
    expect(mockDay1).toHaveBeenCalledTimes(1);
  });
});
