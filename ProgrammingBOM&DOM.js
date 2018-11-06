// PROGRAMMING IN THE BOM AND DOM
// 1. The window Object
// 2. Timers
// 3. The location Object
// 4. The document Object
// 5. Selection DOM Elements
// 6. Modifying DOM Elements

// 1. The window Object
// Properties: document, location, console, innerHeight, innerWidth, pageXOffset, pageYOffset
// Methods: alert(), back(), confirm()

// 2. Timers
// let timeoutId = setTimeout(function() {
//   console.log('1 second passed');
// }, 1000);
// // if need to cancle
// clearInterval(timeoutId);

// 3. The location Object
// Properties: href, hostname, port, pathname, search
// Methods: assign(), reaload()

// 4. The document Object
// Properties: body, forms, links
// Methods: createElement(), createEvent(), getElementById(), getElementsByClassName()
// Events: onload, onclick, onkeypress

// 5. Selection DOM Elements
// document.getElementById('elementId');
// document.getElementsByClassName('className');
// document.getElementsByTagName('tagName');

// 6. Modifying DOM Elements
// let element = document.getElementById('elementId');
// element.textContent = 'new text here';
// element.setAttribute('name', 'nameValue');
// element.classList.add('myClassName');
// element.style.color = 'blue';