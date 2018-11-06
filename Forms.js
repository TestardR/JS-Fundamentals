// FORMS
// 1. Prevent Form Submission
// 2. Accessing Form Fields
// 3. Showing Validation Errors
// 4. Posting from JS

// 1. Prevent Form Submission
// let form = document.getElementById('user-form');
// form.addEventListener('submit', event => {
//   // prevent the browser from submitting the form
//   event.preventDefault();
// });

// 2. Accessing Form Fields
// let form = document.getElementById('user-form');
// form.addEventListener('submit', event => {
//   let user = from.elements['user']; // input name="user"
//   let avatarFile = form.elements['avatar-file']; // input name="avatar-file"
//   console.log(user.value, avatarFile.value);
//   event.preventDefault();
// });

// 3. Showing Validation Errors (in the span id)
// let user = form.elements['user'];
// let userError = document.getElementById('user-error');

// if(user.value.length < 4){
// userError.textContent = 'Invalid entry';
// userError.style.color = 'red';
// user.style.borderColor = 'red';
// user.focus();
// }

// 4. Posting from JS
// import $ from 'jquery';

// let form = document.getElementById('user-form'); // <form id="user-form">
// form.addEventListener('submit', event => {
//   let user = form.nextElementSibling['user'];
//   let avatarFile = form.elements['avatar-file'];

//   let post = {
//     user: user.value,
//     avatarFile: avatarFile.value
//   };

//   let promise = $.post('http://5be1b76504cb600013a61f5d.mockapi.io/users');
//   promise.then(
//     data => console.log('data: ', data),
//     error => console.log('error: ', error)
//   );

//   event.preventDefault();
// });
