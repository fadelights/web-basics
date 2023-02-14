// general syntax
function bird(name, color='Green') {
    /* body */
    console.log(`${name} is a bird with ${color.toLowerCase()} feathers.`);
    /* return */
    return `${color}-feathered ${name}`;
}

let nickname = bird('Bruno');
console.log(nickname);

/* if a default parameter is not defined and the
argument is not passed during the function call,
the respective param value will be `undefined` */

/* if a `return` is used without a value, the
function will return `undefined` */

/* functions have access to global variables.
to prevent accidental modification of the global
variable, always use the `let` statement with
your variable definitions inside a function */
let x = 1337;
let y = 777;
console.log(`Previous x: ${x}`);
console.log(`Previous y: ${y}`);

function manipulator() {
    x = 1667;  // unsafe; will manipulate global
    let y = 666;  // safe
}

manipulator();
console.log(`x is changed  : ${x}`);
console.log(`y is unchanged: ${y}`);

/* parameter vs argument:

- a parameter is the variable listed inside the parentheses
in the function declaration (it’s a declaration time term),
- an argument is the value that is passed to the function
when it is called (it’s a call-time term). */
