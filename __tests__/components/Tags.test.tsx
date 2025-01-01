import { describe, expect, it, vi, afterEach, beforeAll } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import Tags from "@/components/Tags";

const { mockTag } = vi.hoisted(() => ({
  mockTag: vi.fn(),
}));

vi.mock("@/components/Tag", () => {
  return {
    default: mockTag,
  };
});

describe("Tags", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders", () => {
    render(<Tags tagTypes={["General", "Mental game"]} />);
    expect(screen.getByTestId("Tags")).toBeInTheDocument();
    expect(mockTag).toHaveBeenCalledTimes(2);
    expect(mockTag).toHaveBeenCalledWith({ tagType: "General" }, undefined);
    expect(mockTag).toHaveBeenCalledWith({ tagType: "Mental game" }, undefined);
  });
});
