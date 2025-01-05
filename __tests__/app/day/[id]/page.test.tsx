import { describe, expect, it, vi } from "vitest";
import { act, render } from "@testing-library/react";
import Page, { generateStaticParams } from "@/app/day/[id]/page";

const { mockDay1, mockDay2, mockDay3, mockDay4 } = vi.hoisted(() => ({
  mockDay1: vi.fn(),
  mockDay2: vi.fn(),
  mockDay3: vi.fn(),
  mockDay4: vi.fn(),
}));

vi.mock("@/components/Day1", () => {
  return {
    default: mockDay1,
  };
});

vi.mock("@/components/Day2", () => {
  return {
    default: mockDay2,
  };
});

vi.mock("@/components/Day3", () => {
  return {
    default: mockDay3,
  };
});

vi.mock("@/components/Day4", () => {
  return {
    default: mockDay4,
  };
});

describe("Page", () => {
  describe("generateStaticParams", () => {
    it("produces an array of 365 items", async () => {
      expect(await generateStaticParams()).toHaveLength(365);
    });
  });

  it("renders 'Day1' component", async () => {
    render(<Page params={(async () => ({ id: "1" }))()} />);
  });

  it("renders 'Day2' component", async () => {
    render(<Page params={(async () => ({ id: "2" }))()} />);
  });

  it("renders 'Day3' component", async () => {
    render(<Page params={(async () => ({ id: "3" }))()} />);
  });

  it("renders 'Day4' component", async () => {
    render(<Page params={(async () => ({ id: "4" }))()} />);
  });

  it("renders 'Day5' component", async () => {
    render(<Page params={(async () => ({ id: "5" }))()} />);
  });

  it("renders '<div>Not found</div>' component", async () => {
    render(<Page params={(async () => ({ id: "0" }))()} />);
  });
});
