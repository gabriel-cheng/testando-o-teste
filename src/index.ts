import { Calculadora } from "./model/Calculadora";

(function main(cal: Calculadora = new Calculadora()) {
    const a = cal.soma(5, 5);

    console.log(a);
})();