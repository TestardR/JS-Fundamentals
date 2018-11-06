// LANGUAGE FEATURES
// 1. Constant
// 2. let and var
// 3. Rest Parameters
// 4. Destructuring Arrays
// 5. Destructuring Objects
// 6. Spread Syntax
// 7. typeof()
// 8. Common Type Conversions
// 9. Controlling Loops



// 1. Constants

// const carId = 42;
// const card;
// // It has to be initialized.
// carId = 100;
// It cannot be changed.



// 2. let and var

// console.log(motoId); // will give error
// let motoId = 4;

// console.log(busId); // will give undefined
// var busId = 4;

// if (true) {
//   var foo = 9;
// }
// console.log(foo);

// if (true) {
//   let foo = 9;
// }
// console.log(foo); // will give error

// => let has block scoping and var does not.



// 3. Rest Parameters

// function sendCars(...allCarIds) {
//   allCarIds.forEach(id => console.log(id));
// }

// sendCars(100, 200, 555);

// => Rest converts into Array


// function sendMotos(day, ...allCarIds) {
//   allCarIds.forEach(id => console.log(id));
// }

// sendMotos('Monday', 100, 200, 555);

// => Elements can only be added before the rest operator




// 4. Destructuring Arrays

// To easly assign values within an array to variables

// let studentIds = [1, 2, 5];
// let [student1, student2, student3] = studentIds;
// console.log(student1, student2, student3); // 1 2 5

// let cookIds = [1, 2, 5];
// let cook1, remainingCooks;
// [cook1, ...remainingCooks] = cookIds;
// console.log(cook1, remainingCooks); // 1 [2, 5]

// let kidIds = [1, 2, 5];
// let remainingKids;
// [, ...remainingKids] = kidIds; // , to skip
// console.log(remainingKids); // [2, 5]

// Ex:
// let penIds = [100, 200, 300];
// let [pen1, pen2] = penIds;
// console.log(pen1, pen2);

// let penIds = [100, 200, 300];
// let [pen1, pen2, ...theRest] = penIds;
// console.log(pen1, pen2, theRest);

// let penIds = [100, 200, 300];
// let [, pen2, ...theRest] = penIds;
// console.log(pen2, theRest);




// 5. Destructuring Objects
// let car = { id: 5000, style: 'convertible' };
// let { id, style } = car;
// console.log(id, style);

// let car = { id: 5000, style: 'convertible' };
// let id, style;
// ({ id, style } = car);
// console.log(id, style);





// 6. Spread Syntax

// Takes elements from an Array and breaks down the array (spread the values)
// function reviewHouses(h1, h2, h3) {
//   console.log(h1, h2, h3);
// }
// let houseIds = [100, 300, 500];
// reviewHouses(...houseIds);

// function reviewCars(c1, c2, c3) {
//   console.log(c1, c2, c3);
// }
// let carCodes = 'abc';
// reviewHouses(...carCodes);

// Spread works on arrays OR strings !




// 7. typeof()

// typeof(1); // number
// typeof(true); // boolean
// typeof('Hello'); // string
// typeof( function(){}); // function
// typeof({}); // object
// typeof(null); // object
// typeof(undefined); // undefined
// typeof(Nan); // number



// 8. Common Type Conversions

// convert to string
// foo.toString();

// convert string to integer
// Number.parseInt('55');

// convert string to number
// Number.parseFloat('55.99');



// 9. Controlling Loops

// let i = 0;
// for (; i < 12; i++) {
//   if (i === 8) {
//     break; // stop the loop
//   }
// }
// console.log(i);

// for (let i = 0; i < 4; i++) {
//   if (i === 2) {
//     continue; // skips 2
//   }
//   console.log(i);
// }