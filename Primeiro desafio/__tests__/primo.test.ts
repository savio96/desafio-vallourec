import { nextNumPrime } from "../primo2";

describe("proximo primo", () => {
  it("deve retornar 2 para próximo primo de 2", () => {
    expect(nextNumPrime(2)).toBe(2);
  });

  it("deve retornar 13 para próximo primo de 12", () => {
    expect(nextNumPrime(12)).toBe(13);
  });

  it("deve retornar 59 para próximo primo de 54", () => {
    expect(nextNumPrime(54)).toBe(59);
  });
});
