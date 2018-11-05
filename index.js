// LANGUAGE FEATURES
// 1. Constant
// 2. let and var
// 3. Rest Parameters
// 4. Destructuring Arrays
// 5. Destructuring Objects
// 6. Spread Syntax

// 1. Constants

const carId = 42;
// const card;
// // It has to be initialized.
// carId = 100;
// It cannot be changed.

// 2. let and var

// console.log(motoId); // will give error
// let motoId = 4;

console.log(busId); // will give undefined
var busId = 4;

if (true) {
  var foo = 9;
}
console.log(foo);

if (true) {
  let foo = 9;
}
console.log(foo); // will give error

// => let has block scoping and var does not.

// 3. Rest Parameters

function sendCars(...allCarIds) {
  allCarIds.forEach(id => console.log(id));
}

sendCars(100, 200, 555);

// => Rest converts into Array

function sendMotos(day, ...allCarIds) {
  allCarIds.forEach(id => console.log(id));
}

sendMotos('Monday', 100, 200, 555);
// => Elements can only be added before the rest operator

// 4. Destructuring Arrays

// To easly assign values within an array to variables

let studentIds = [1, 2, 5];
let [student1, student2, student3] = studentIds;
console.log(student1, student2, student3); // 1 2 5

let cookIds = [1, 2, 5];
let cook1, remainingCooks;
[cook1, ...remainingCooks] = cookIds;
console.log(cook1, remainingCooks); // 1 [2, 5]

let kidIds = [1, 2, 5];
let remainingKids;
[, ...remainingKids] = kidIds; // , to skip
console.log(remainingKids); // [2, 5]

// Ex:
// let penIds = [100, 200, 300];
// let [pen1, pen2] = penIds;
// console.log(pen1, pen2);

// let penIds = [100, 200, 300];
// let [pen1, pen2, ...theRest] = penIds;
// console.log(pen1, pen2, theRest);

let penIds = [100, 200, 300];
let [, pen2, ...theRest] = penIds;
console.log(pen2, theRest);

// 5. Destructuring Objects
// let car = { id: 5000, style: 'convertible' };
// let { id, style } = car;
// console.log(id, style);

let car = { id: 5000, style: 'convertible' };
let id, style;
({ id, style } = car);
console.log(id, style);

// 6. Spread Syntax

// Takes elements from an Array and breaks down the array (spread the values)
function reviewHouses(h1, h2, h3) {
  console.log(h1, h2, h3);
}
let houseIds = [100, 300, 500];
reviewHouses(...houseIds);

function reviewCars(c1, c2, c3) {
  console.log(c1, c2, c3);
}
let carCodes = 'abc';
reviewHouses(...carCodes);

// Spread works on arrays OR strings !

// typeof()

// typeof(1); // number
// typeof(true); // boolean
// typeof('Hello'); // string
// typeof( function(){}); // function
// typeof({}); // object
// typeof(null); // object
// typeof(undefined); // undefined
// typeof(Nan); // number

// Common Type Conversions

// convert to string
foo.toString();

// convert string to integer
Number.parseInt('55');

// convert string to number
Number.parseFloat('55.99');

// Controlling Loops

let i = 0;
for (; i < 12; i++) {
  if (i === 8) {
    break; // stop the loop
  }
}
console.log(i);

for (let i = 0; i < 4; i++) {
  if (i === 2) {
    continue; // skips 2
  }
  console.log(i);
}

// OPERATORS
// 1. Equality Operators
// 2. Unary Operators
// 3. Logical Operators (boolean)
// 4. Relation Operators
// 5. Conditional Operators
// 6. Assignment Operators
// 7. Operator Precedence

// 1. Equality Operators

// if (var1 == var2) {
// } // type conversion
// if (va1 === var3) {
// } // no type conversion
// if (va1 != var3) {
// } // type conversion
// if (va1 !== var3) {
// } // no type conversion
// _;

// 2. Unary Operators

// ++var1; // incremented before being used
// var1++; // incremented after being used
// --var1;
// var1-- +
// var1 - // converts into number
//   var1; // converts into number & negate a number (positive or negative)

let year = '1967';
console.log(typeof +year);

// 3. Logical Operators (boolean)

// && and
// || or
// && has a higher precedence over ||
// !var1 : converts var1 into a boolean value true or false

// 4. Relation Operators

// > < >= <=
// "Zoo" < "alphabet" // gives true because uppercase letters come before lowercase letters

// 5. Conditional Operators

// var result = foo > 5 ? true : false;
// console.log(5 > 4 ? 'yes' : 'no');

// 6. Assignment Operators

// var1 += 10;
// var1 -= 10;
// var1 /= 10;
// var1 *= 10;
// var1 %= 10;
// var1 <<= 1; // shift the bytes operator to the left, shift its left operator by one byte
// var1 <<= 1; // shift the bytes operator to the right
// var >>>= 1 // shit the bytes operator to the right and keep the sign

// 7. Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

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

let message = 'Outisde';
if (5 === 5) {
  let message = 'Equal';
  console.log(message); // 'Equal'
}
console.log(message); // 'Outside'

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

// BIND makes a copy of a function and assigns a new context

let o = {
  carId: 123,
  getId: function() {
    return this.carId;
  }
};

let newCar = { carId: 456 };
let newFn = o.getId.bind(newCar);
console.log(newFn()); // 456

// 6. Arrow functions
// Does not have its own this keyword

let getId = () => 123;
console.log(getId());

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

// OBJECTS AND ARRAYS

// 1. Constructor Functions
// 2. Prototypes
// 3. Expanding Objects Using Proptotypes - Polyfills
// 4. JavaScript Object Notation - JSON
// 5. Array Iteration

// 1. Constructor Functions

// function Plane(id) {
//   this.planeId = id;
// }

// let plane = new Plane(123);

// console.log(plane.planeId); //123

// function Plane(id) {
//   this.planeId = id;
//   this.start = function() {
//     console.log('start: ' + this.planeId); // don't forget the this
//   };
// }

// let plane = new Plane(123);
// plane.start();

function Car() {
  console.log(this);
}
let vehicle = new Car();

// 2. Prototypes

// function Plane(id) {
//   this.planeId = id;
//   this.start = function() {
//     console.log('start: ' + this.planeId); // don't forget the this
//   };
// }

// let plane = new Plane(123);
// plane.start();

// To avoid creating a start() function each time we create a new plane from the constructor, we can use prototypes

function Plane(id) {
  this.planeId = id;
}

Plane.prototype.start = function() {
  console.log('start: ' + this.planeId);
};

let plane = new Plane(123);
plane.start();

// 3. Expanding Objects Using Proptotypes - Polyfills

String.prototype.hello = function() {
  return this.toString() + ' Hello';
};

console.log('foo'.hello()); // foo Hello

// 4. JavaScript Object Notation - JSON

// let submarine = {
//   id: 123,
//   style: 'waterproof'
// };

// console.log(JSON.stringify(submarine));

// let submarineIds = [{ subId: 123 }, { subId: 456 }, { subId: 789 }];

// console.log(JSON.stringify(submarineIds));

let jsonIn = `[{ "subId": 123 }, { "subId": 456 }, { "subId": 789 }]`;

let submarineIds = JSON.parse(jsonIn);
console.log(submarineIds);

// 5. Array Iteration

let shoeIds = [
  { shoeId: 123, style: 'sedan' },
  { shoeId: 456, style: 'suede' },
  { shoeId: 789, style: 'airforce' }
];

shoeIds.forEach(shoe => console.log(shoe));
shoeIds.forEach((shoe, index) => console.log(shoe, index));

let airforces = shoeIds.filter(shoe => shoe.style === 'airforce');
console.log(airforces);

let result = shoeIds.every(shoe => shoe.shoeId > 0);
console.log(result);

let shoe = shoeIds.find(shoe => shoe.shoeId > 500);

console.log(shoe);
