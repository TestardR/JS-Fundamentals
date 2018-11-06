// PROMISES AND ERROR HANDLING
// 1. Errors in JS
// 2. Error Handling using try and catch
// 3. finally
// 4. Developer Defined Erros
// 5. Creating a Promise
// 6. Setting a Promise

// 1. Errors in JS
// let car3 = newCar;
// console.log('continuing...'); // newCar is not defined

// 2. Error Handling using try and catch
// try {
//   let juice = newJuice;
// } catch (error) {
//   console.log('error: ', error);
// }
// console.log('continuing...');

// 3. finally
// try {
//   let juice = newJuice;
// } catch (error) {
//   console.log('error: ', error);
// } finally {
//   console.log('this always executes');
// }

// 4. Developer Defined Errors
// try {
//   // code here...
//   throw new Error('my custom error');
// } catch (error) {
//   console.log('error: ', error);
// } finally {
//   console.log('this always executes');
// }

// 5. Creating a Promise
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 100, 'someValue');
// });
// console.log(promise);

// 6. Setting a Promise

// let promise = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 100, 'someValue');
// });
// promise.then(
//   value => console.log('fulfilled: ' + value),
//   error => console.log('rejected: ' + error)
// );