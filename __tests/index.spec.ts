import { Calculadora } from "../src/model/Calculadora";

describe("Efetuando testes iniciais", () => {
    beforeAll(() => {
        console.log("Iniciando os testes...");
    });

    it("testando soma entre dois números", () => {
        const calc = new Calculadora();

        expect(calc.soma(5, 5)).toBe(10);
    })

    it("testando a subtração entre dois números", () => {
        const calc = new Calculadora();

        expect(calc.subtrai(10, 5)).toBe(5);
    })
});