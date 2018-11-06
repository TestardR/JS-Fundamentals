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
// +var1 // if string, converts into number
// -var1; // converts into number & negate a number (positive or negative)

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