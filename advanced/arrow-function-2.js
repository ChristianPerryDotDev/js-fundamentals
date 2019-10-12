const add = () => {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

const addES5 = function() {
    return arguments[0] + arguments[1]
}

console.log(addES5(11, 22, 33, 44))

const car = {
    color: 'Radd',
    getSummary: function() {
        return `the car is ${this.color}`
    }
}
const carES5 = {
    color: 'Blieu',
    getSummary() {
        return `the car is ${this.color}`
    }
}

// const carES5 = {
//     color: 'Red',
//     getSummary: function() {
//         return `the car is ${this.color}`
//     }
// }

console.log(car.getSummary())
console.log(carES5.getSummary())