import { expect, test } from "vitest";
import { lowercase } from "./lowercase";

test("lowercase()", () => {
  expect(lowercase("heLlO")).toBe("hello");
});
