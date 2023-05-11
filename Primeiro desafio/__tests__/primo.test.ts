import { nextPrime } from "../primo";

describe("proximo primo", () => {
  it("deve retornar 2 para próximo primo de 2", () => {
    expect(nextPrime(2)).toBe(2);
  });

  it("deve retornar 13 para próximo primo de 12", () => {
    expect(nextPrime(12)).toBe(13);
  });

  it("deve retornar 59 para próximo primo de 54", () => {
    expect(nextPrime(54)).toBe(59);
  });
});
