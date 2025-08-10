import { describe, expect, it, vi, afterEach, beforeAll } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import DayHeader from "@/components/DayHeader";

const { mockTags } = vi.hoisted(() => ({
  mockTags: vi.fn(),
}));

vi.mock("@/components/Tags", () => {
  return {
    default: mockTags,
  };
});

describe("DayHeader", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders", () => {
    render(
      <DayHeader
        title="First day title"
        tagTypes={["General", "Mental game"]}
      />
    );
    expect(screen.getByTestId("DayHeader")).toBeInTheDocument();
    expect(mockTags).toHaveBeenCalledTimes(1);
    expect(mockTags).toHaveBeenCalledWith(
      {
        tagTypes: ["General", "Mental game"],
      },
      undefined
    );
  });
});
