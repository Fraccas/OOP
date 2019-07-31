
// Object Literals
let p1 = {
    name: 'Brad',
    sayHello : function () {console.log(`Hello! My name is ${this.name}!`)}
}
let p2 = {
    name: 'Bekah',
    sayHello : function () {console.log(`Hello! My name is ${this.name}!`)}
}
let p3 = {
    name: 'Cameron',
    sayHello : function () {console.log(`Hello! My name is ${this.name}!`)}
}
let p4 = {
    name: 'James',
    sayHello : function () {console.log(`Hello! My name is ${this.name}!`)}
}
let p5 = {
    name: 'Mara',
    sayHello : function () {console.log(`Hello! My name is ${this.name}!`)}
}

p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();

// Pseudo Classes
function Friend (name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}

Friend.prototype.sayHello = function() {
    console.log(`Hey! My name is ${this.name} I am ${this.age} years old, and I live in ${this.city}!`);
}

let pe1 = new Friend("Brad", "Auburn", "27"); 
pe1.sayHello();
let pe2 = new Friend("Bekah", "Odinville", "24"); 
pe2.sayHello();
let pe3 = new Friend("Chris", "NYC", "27"); 
pe3.sayHello();
let pe4 = new Friend("James", "NO", "27"); 
pe4.sayHello();
let pe5 = new Friend("Mara", "Chattanoga", "27"); 
pe5.sayHello();

// ES6 Classes
class Friends {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    sayHello() {
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old, and I live in ${this.city}!`);
    }
}

let f1 = new Friends("Brad", "27", "Alex City");
f1.sayHello();

// Inheritance
class Vehicle {
    constructor(manufacturer, numWheels) {
        this.manu = manufacturer;
        this.numWheels = numWheels;
    }

    aboutVehicle() {
        console.log(`This is a vehicle, ${this.manu} made it, and it has ${this.numWheels} wheels!`);
    }
}

class Truck extends Vehicle {
    constructor(man, numWheels, numDoors, hasBed) {
        super(man, numWheels);
        this.numDoors = numDoors;
        this.hasBed = hasBed;
    }

    aboutVehicle() {
        console.log(`This is a truck, ${this.manu} made it, and it has ${this.numWheels} wheels! It has ${this.numDoors} doors, and it has a bed: ${this.hasBed}!`);
    }
}

class Sedan extends Vehicle {
    constructor(size, mpg) {
        this.size = size;
        this.mpg = mpg;
    }
}

class MotorCycle extends Vehicle {
    constructor(hasHandleBars, hasDoors) {
        this.hasHandleBars = hasHandleBars;
        this.hasDoors = hasDoors;
    }
}

let t1 = new Truck("Toyota", "4", "4", true);
t1.aboutVehicle();
