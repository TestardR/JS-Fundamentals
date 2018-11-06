// DATA ACCESS USING HTTP
// 1. HTTP Requests using XHR
// 2. HTTP Requests using jQuery
// 3. HTTP POST using jQuery

// 1. HTTP Requests using XHR
// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     console.log(this.reponseText);
//   }
// };
// xhttp.open('GET', 'http://5be1b76504cb600013a61f5d.mockapi.io/users', true);
// xhttp.send();

// 2. HTTP Requests using jQuery
// nom install jquery
// import $ from 'jquery';

// let promise = $.get('http://5be1b76504cb600013a61f5d.mockapi.io/users');
// promise.then(
//   data => console.log('success: ', data),
//   error => console.log('error: ', error)
// );

// 3. HTTP POST using jQuery
// import $ from 'jquery';
// let user = {
//   name: 'Romain Testard',
//   avatar: 'romain.jpg'
// };

// let promise = $.post('http://5be1b76504cb600013a61f5d.mockapi.io/users', user);
// promise.then(
//   data => console.log('data: ', data),
//   error => console.log('error: ', error)
// );