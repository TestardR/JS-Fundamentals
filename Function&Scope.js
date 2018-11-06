// FUNCTIONS AND SCOPE

// 1. Function & block scope
// 2. IIFE's
// 3. Closures
// 4. This keyword
// 5. call(), apply(), bind()
// 6. Arrow functions
// 7. Default parameters



// 1. Function & block scope
// A. Function

// function startCar(carId) {
//   let message = 'Starting...';
// }

// startCar(123);
// console.log(message); // error, let has block scope



// function startCar(carId) {
//   let message = 'Starting...';
//   let startFn = function turnKey() {
//     console.log(message); // 'Starting...' // JS will look for message in its parent function
//   };
//   startFn();
// }
// startCar(123);


// function startCar(carId) {
//   let message = 'Starting...';
//   let startFn = function turnKey() {
//     let message = 'Override'; // this definition is out of scope
//   };
//   startFn();
//   console.log(message);
// }
// startCar(123);



//B. Block Scope

// if(5 === 5) {
//   let message ="Equal";
// }
// console.log(message); // error

// let message = 'Outisde';
// if (5 === 5) {
//   let message = 'Equal';
//   console.log(message); // 'Equal'
// }
// console.log(message); // 'Outside'

// var message = 'Outisde';
// if (5 === 5) {
//   var message = 'Equal';
//   console.log(message); // 'Outside'
// }
// console.log(message); // 'Outside'



// 2. IIFE's
// Immediately Invoked Functions
// (function() {
//   console.log('in function');
// })();

// define a variable to use the return statement
// let app = (function() {
//   let carId = 123;
//   console.log('in function');
//   return {};
// })();
// console.log(app);



// 3. Closures
// When you want a function and variables to hang around and not go out of scope after completion
// let app = (function() {
//   let carId = 123;
//   let getId = function() {
//     return carId;
//   };
//   return {
//     // Closure : return an object with its property getId and its value is the function getId
//     getId: getId
//   };
// })();
// console.log(app.getId());




// 4. This keyword

// let fn = function() {
//   console.log(this);
//   console.log(this === window);
// };
// fn(); // true, false in strict mode


// let o = {
//   cardId: 123,
//   getId: function() {
//     console.log(this);
//     return this.cardId; // this refers to the object that holds the function
//   }
// };
// console.log(o.getId()); // 123



// 5. call(), apply(), bind()
// A. CALL AND APPLY
// call and bind aims at changing the value of this
// let o = {
//   carId: 123,
//   getId: function() {
//     return this.carId;
//   }
// };

// let newCar = { carId: 456 };
// console.log(o.getId.call(newCar)); // 456

// let o = {
//   carId: 123,
//   getId: function(prefix) {
//     return prefix + this.carId;
//   }
// };

// let newCar = { carId: 456 };
// console.log(o.getId.apply(newCar, ['ID: '])); // ID: 456

// call and apply does the same, except that apply accepts an array of arguments


//B. BIND makes a copy of a function and assigns a new context

// let o = {
//   carId: 123,
//   getId: function() {
//     return this.carId;
//   }
// };

// let newCar = { carId: 456 };
// let newFn = o.getId.bind(newCar);
// console.log(newFn()); // 456



// 6. Arrow functions
// Does not have its own this keyword

// let getId = () => 123;
// console.log(getId());

// let getId = (prefix, suffix) => {
//   return prefix + 123 + suffix;
// };

// console.log(getId('ID: ', '!')); // ID: 123!

// let getId = (prefix, suffix) => prefix + 123 + suffix;

// console.log(getId('ID: ', '!')); // ID: 123!



// 7. Default parameters

// let trackCar = function(carId, city = 'NY') {
//   // Default parameters has to be on the right
//   console.log(`Tracking ${carId} in ${city}.`);
// };

// console.log(trackCar(123));
// // Tracking 123 in NY

// console.log(trackCar(123, 'Chicago'));
// // Tracking 123 in Chicago