/* use `String` to convert to strings */
let strTrue = String(true)
console.log(strTrue, typeof strTrue);

/* use `Number` to convert to numbers.
use `BigInt` to convert to BigInt.
strings are automatically converted to 
numbers when applied to numerical operators
other than `+` */
let numStr = Number('666.13');
let bigintStr = BigInt('42');
let numAutoStr = '123' / '3';
let numFail = Number('This is impossible!');

console.log(numStr, typeof numStr);
console.log(bigintStr, typeof bigintStr);
console.log(numAutoStr, typeof numAutoStr);
console.log(numFail, typeof numFail);

/* numeric conversion rules:
Number(undefined)   ➡ NaN
Number(null)        ➡ 0
Number(true)        ➡ 1
Number(false)       ➡ 0
Number(someString)  ➡ whitespaces are removed from either side 
    empty strings becomes 0, errors return NaN.
 */

/* a shorthand for the `Number` function
is the unary `+` operator. */
addStr = +'.00007' + +'666.13' + +true;
console.log(addStr, typeof addStr);

// boolean conversion
/* "falsey" values all convert to `false`
0
null
empty strings
undefined
NaN
false
 */
let falseStr = Boolean("");
let trueStr = Boolean("0");
console.log(falseStr, typeof falseStr);
console.log(trueStr, typeof trueStr);
