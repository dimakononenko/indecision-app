class Person {
    constructor(name = 'Anonymus', age = 0) {
        this.name = name;
        this.age = age;
    }
    
    getGreeting() {
        return `Hi, I'm ${this.name}!`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

//Class Student *******************************************************************
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
    }
};


//Class Traveler *******************************************************************
class Traveler extends Person {
    constructor(name, age, hometown) {
        super(name, age);
        this.hometown = hometown;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hometown) {
            greeting += ` I'm visiting from ${this.hometown}.`
        }
        return greeting;
    }
};

const me = new Traveler('Dima Kononenko', 23, 'Kiev');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());