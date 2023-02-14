// use `typeof` to determine the type of an object
typeof 13;
typeof(13);

// `number` refers to both floats and ints
let floatType = typeof 2.71;
let intType = typeof 42;

console.log(floatType, intType);

// special numeric values
let valMax = Infinity;
let valNotANumber = NaN;

console.log(typeof valMax, typeof valNotANumber);

/* for integers outside the range of
±(2^53 - 1) we should use the `BigInt` type
by appending an `n` to the end of the number */
const veryBigNumber = 
    1234567890123456789012345678901234567890n;

console.log(typeof veryBigNumber)
