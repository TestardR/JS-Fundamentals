// CLASSES AND MODULES
// 1. Class Basics
// 2. Constructors and Properties
// 3. Methods
// 4. Inheritance
// 5. Creating a Module
// 6. Importing a Module



// 1. Class Basics

// class Apple {}

// let apple = new Apple();



// 2. Constructors and Properties

// class Apple {
//   constructor(id) {
//     this.id = id;
//   }
// }

// let apple = new Apple(123);
// console.log(apple.id);



// 3. Methods

// class Apple {
//   constructor(id) {
//     this.id = id;
//   }
//   identify(suffix) {
//     return `Apple Id: ${this.id} ${suffix}`;
//   }
// }

// let apple = new Apple(123);
// console.log(apple.identify('!!!'));



// 4. Inheritance

// class Vehicle {
//   constructor() {
//     this.type = 'car';
//   }
//   start() {
//     return 'Starting: ${this.type}';
//   }
// }

// class Car extends Vehicle {
// }

// let car1 = new Car();
// console.log(car1.type);

// class Vehicle {
//   constructor() {
//     this.type = 'car';
//   }
//   start() {
//     return 'Starting: ${this.type}';
//   }
// }

// class Car extends Vehicle {
//   constructor() {
//     super(); // to make a constructor out of another constructor class with have to use super() to call the constructor's properties.
//   }
// }

// let car1 = new Car();
// console.log(car1.type);

// class Vehicle {
//   constructor() {
//     this.type = 'car';
//   }
//   start() {
//     return `Starting: ${this.type}`;
//   }
// }

// class Car extends Vehicle {
//   start() {
//     return 'in Car start' + super.start();
//   }
// }

// let car1 = new Car();
// console.log(car1.start());




// 5. Creating a Module

// We created ./models/car.js and put the class Car in it
// let car2 = new Car(123);
// console.log(car2.id);

// 6. Importing a Module

// import { Car } from './models/car.js';
// let car2 = new Car(123);
// console.log(car2.id);