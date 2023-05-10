import { fatorial } from "../fatorial";

describe("fatorial", () => {
  it("deve retornar 1 para fatorial de 0", () => {
    expect(fatorial(0)).toBe(1);
  });

  it("deve retornar o valor correto para fatorial de número positivo", () => {
    expect(fatorial(5)).toBe(120);
  });

  it("deve lançar uma exceção com a mensagem de erro correta para fatorial de número grande", () => {
    expect(() => fatorial(50)).toThrowError("Número muito grande");
  });
});
