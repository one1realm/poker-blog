import tailwind from "../tailwind.config";
import { describe, expect, it } from "vitest";

describe("tailwind.config", () => {
  it("has expected configuration", () => {
    expect(tailwind).toStrictEqual({
      content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
        extend: {
          colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
          },
        },
      },
      plugins: [],
    });
  });
});
