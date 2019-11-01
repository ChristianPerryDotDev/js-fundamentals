const createCounter = () => {
    let count = 0
    return {
        increment() {
            count++
        }, decrement() {
            count--
        }, get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
counter.count = 0
console.log(counter.get())


// Adder
const add = (a, b) => a + b
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}
const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-90))


// Tipper

// 1. Create createTipper() which takes in base tip (.15 for 15%)
// 2. Set it up to return a function that takes in the bill amount
// 3. Call createTipper to generate functions for different percentages
// 4. Use the generated functions to calculate tips and print them

const createTipper = (tipPercent) => {
    return (billTotal) => {
        return billTotal * tipPercent
    } 
}

const tip15 = createTipper(.15)
const tip20 = createTipper(.20)
const tip25 = createTipper(.25)

console.log(tip15(100))
console.log(tip20(100))
console.log(tip25(100))