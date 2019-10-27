const add = () => {
    return arguments[0] + arguments[1]
}

const car = {
    color: 'Red',
    getSummary() {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())