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

// function Car() {
//   console.log(this);
// }
// let vehicle = new Car();



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

// function Plane(id) {
//   this.planeId = id;
// }

// Plane.prototype.start = function() {
//   console.log('start: ' + this.planeId);
// };

// let plane = new Plane(123);
// plane.start();



// 3. Expanding Objects Using Proptotypes - Polyfills

// String.prototype.hello = function() {
//   return this.toString() + ' Hello';
// };

// console.log('foo'.hello()); // foo Hello



// 4. JavaScript Object Notation - JSON

// let submarine = {
//   id: 123,
//   style: 'waterproof'
// };

// console.log(JSON.stringify(submarine));

// let submarineIds = [{ subId: 123 }, { subId: 456 }, { subId: 789 }];

// console.log(JSON.stringify(submarineIds));

// let jsonIn = `[{ "subId": 123 }, { "subId": 456 }, { "subId": 789 }]`;

// let submarineIds = JSON.parse(jsonIn);
// console.log(submarineIds);



// 5. Array Iteration

// let shoeIds = [
//   { shoeId: 123, style: 'sedan' },
//   { shoeId: 456, style: 'suede' },
//   { shoeId: 789, style: 'airforce' }
// ];

// shoeIds.forEach(shoe => console.log(shoe));
// shoeIds.forEach((shoe, index) => console.log(shoe, index));

// let airforces = shoeIds.filter(shoe => shoe.style === 'airforce');
// console.log(airforces);

// let result = shoeIds.every(shoe => shoe.shoeId > 0);
// console.log(result);

// let shoe = shoeIds.find(shoe => shoe.shoeId > 500);

// console.log(shoe);