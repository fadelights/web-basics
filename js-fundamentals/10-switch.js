// just as a reminder that you can do this
"use strict"

// the general syntax
let x = 'sunday';

switch (x) {
    case 'saturday':
        console.log('Ugh...');
        break;

    case 'thursday':
        console.log('Yay!');
        break;

    default:
        console.log('Meh...');
        break;
}

// cases can be grouped (OR behavior)
switch (x) {
    case 'thursday':
    case 'friday':
        console.log('Yay! 😎')
        break;

    default:
        console.log('Yuck. 😒');
        break;
}

/* the equality check in `switch` statements
is "strict", i.e. uses the `===` operator */
