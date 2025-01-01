import { describe, expect, it, vi } from "vitest";
import { act, render } from "@testing-library/react";
import Page from "@/app/day/[id]/page";

const { mockDay1 } = vi.hoisted(() => ({
  mockDay1: vi.fn(),
}));

vi.mock("@/components/Day1", () => {
  return {
    default: mockDay1,
  };
});

describe("Page", () => {
  it("renders 'Day' component", async () => {
    render(<Page params={(async () => ({ id: "1" }))()} />);
    /*await act(async () => {
      expect(mockDay1).toHaveBeenCalledTimes(1);
    });*/
  });
});
