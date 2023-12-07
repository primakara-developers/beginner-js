// See the web document structure
console.log(document);

// DOM Selection

// Select element by ID
const title = document.getElementById('big-title');
console.log(title);

// Select element by Class
const description = document.getElementsByClassName('tagline');
// Why the return of description is an Array?
// Because if you select a element by Class is not a unique target like an ID
console.log(description[0]);

// Select element by Query Selector
const year = document.querySelector('#year');
console.log(year);

// DOM Manipulation

// Change the text value
title.innerHTML = 'PrimDev Web';

// Change the font style
description[0].style.fontStyle = 'italic';

// Change the text color
year.style.color = 'blue';
