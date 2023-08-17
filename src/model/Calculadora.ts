export class Calculadora {
    private num1 = 0;
    private num2 = 0;

    public soma(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;

        const soma = num1 + num2;

        return soma;
    }

    public subtrai(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;

        const soma = num1 - num2;

        return soma;
    }
}