const square = (num) => num * num

const squareLong = (num) => {
    return num * num;
}

console.log(square(5))

const people = [{
    name: 'Andrew',
    age: 27
},  {
    name: 'Vikram',
    age: 31
},  {
    name: 'Filbert',
    age: 22
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

const is22 = people.find((person) => person.age === 22)

console.log(is22.name)