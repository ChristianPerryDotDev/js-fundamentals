// Prototypal Inheritence
// myPerson --> Person.prototype --> Object.prototype --> null
// 


class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age} years olde.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}.`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        return `${this.firstName} is ${this.grade >= 70 ? 'passing' : 'failing'} the class.`
    }
    updateGrade(num) {
        this.grade += num
    }
}

const bob = new Student('Bobbert', 'McMuffin', 9000, 42, ['trophies'])
console.log(bob.getBio())
bob.updateGrade(30)
console.log(bob.getBio())
