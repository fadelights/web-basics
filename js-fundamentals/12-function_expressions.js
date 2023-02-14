"use strict"

/* function expressions allow us to define
functions in the middle of an expression */
let bird = function(name, color="Red") {
    console.log(`${color}-hat ${name} is no joke.`);
    return;
};  // pay attention to the semicolon here!

/* function expressions are also how we
define anonymous functions in JS */

/* a function is a value (similar to python objects),
and thus, can be assigned to other variables, or
passed as the argument to another function */
let drib = bird;
drib("Franky", "Fancy");

/* a function declaration can be called earlier
than it is defined */
shout("It's the police!");

function shout(sentence) {
    console.log(sentence.toUpperCase());
}

/* a function expresssion, however, cannot */
// whisper("WHO ARE YOU?");  // ReferenceError: ...

let whisper = function(sentence) {
    console.log(sentence.toLowerCase());
}

/* in strict mode, a function declared inside
a block is only available within that block */
{
    function shoot() {
        console.log("I didn't want it to come to this...");
    }
    shoot();
}
// shoot();  // ReferenceError...

/* if we want our `shoot` function to be available
everywhere, we need to use function expressions
with a variable defined beforehand */
let shoot;
{
    shoot = function() {
        console.log("Hasta la vista, baby.");
    }
}
shoot();
