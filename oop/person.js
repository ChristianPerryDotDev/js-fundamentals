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
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}.`
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

const bob = new Employee('Bobbert', 'McMuffin', 9000, 'Winner', ['trophies'])
bob.fullName = 'Hugo Sanchez'

console.log(bob.getBio())
// bob.updateGrade(30)
// console.log(bob.getBio())


