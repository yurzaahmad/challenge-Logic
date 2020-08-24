export const PI = 22 / 7

export class MesinHitung {
    constructor() {
        this.value = 1
    }
    get x() {
        return this.value
    }

    set x(n) {
        this.value = n
    }
    add(n) {
        this.value += n
        return this
    }
    subtract(n) {
        this.value -= n
        return this
    }
    divide(n) {
        this.value /= n
        return this
    }
    multiply(n) {
        this.value *= n
        return this
    }
    squareRoot() {
        this.value = Math.sqrt(this.value)
        return this
    }
    exponent(n) {
        this.value = Math.pow(this.value, n)
        return this
    }
    square() {
        this.value = Math.pow(this.value, 2)
        return this
    }
    result(n) {
        console.log(this.value)
        return this
    }


}
