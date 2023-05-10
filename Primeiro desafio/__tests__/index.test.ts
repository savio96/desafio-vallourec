import { soma } from "..";

describe("testing index file", () => {
  test("soma function", () => {
    expect(soma(5, 1)).toBe(6);
  });
});
