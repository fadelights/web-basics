/* there are two types of equality operator in JS.
the `==` coerces types while the `===` respects them.
an equivalent `!==` for `!=` also exists */
console.log(`0 == ''`, 0 == '');  // true, types coerced
console.log(`0 === ''`, 0 === '');  // false, types respected

// a weird consequence of using `==`
console.log( "Boolean(0)", Boolean(0) );  // false
console.log( "Boolean('0')", Boolean('0') );  // true
console.log( "0 == '0'", 0 == '0' );  // true!

// JS supports exponentiation!
2**3 === 8;
4**(1/2) === 2;

/* unary operators
have a higher precedence than
their binary counterparts */
console.log(`-2 - -4 = ${-2 - -4}`);
console.log(`+'2' + -'10' = ${+'2' + -'10'}`);

/* all operators actually return a value.
the call `x = value` assigns `value` to `x`
*and then returns it* */
let a = 17;
let b = 3 + (a *= 2);
console.log(b);

/* this feature allows for chaining assignments
(although it is recommended not to) */
let x, y, z;
x = y = z = 42;

/* the list of JS bitwise operators:
    AND ( & )
    OR ( | )
    XOR ( ^ )
    NOT ( ~ )
    LEFT SHIFT ( << )
    RIGHT SHIFT ( >> )
    ZERO-FILL RIGHT SHIFT ( >>> )
 */

/* COMMA (,)
evaluates multiple operations, returns last.
has a lower precedence than `=`
 */
let n, i = 0;
n = i+=1, i+=2, i+=3, i+=4;
console.log(`n = ${n}, i = ${i}`);

i = 0;
n = (i+=1, i+=2, i+=3, i+=4);
console.log(`n = ${n}, i = ${i}`);

/* comparison operators
1- compare strings in lexical (dictionary) order
2- convert strings to numbers if compared with a number
3- `NaN` is not equal to, nor lesser/greater than anything;
    comparison with it always results in `false`
 */

// (1)
'Bee' > 'Be';  // true, longer strings are larger
'a' > 'A';  // true, lowercase is greater than uppercase
'21' > '3';  // false, '3' is greater than '2'

// (2)
21 > '3';  // true, converts '3' to number

// (3)
console.log('NaN === NaN', NaN === NaN);  // false
console.log('1 > NaN', 1 > NaN);  // false
console.log('1 < NaN', 1 < NaN);  // false

/* the curious case of `null` and `undefined`:
`null` and `undefined` only equal themselves and
each other when compared using == and never
anything else, a so called "sweet couple"
 */
console.log('null == null', null == null);  // true
console.log('undefined == undefined', undefined == undefined)  // true
console.log('null == undefined', null == undefined)  // true
console.log('null == 0', null == 0)  // false

/* however, when they are used in
`<`, `>`, `<=` and `>=`:
`null` converts to `0`, and 
`undefined` converts to `NaN`.

checking for null/undefined cases
separately is usually a good idea */
console.log('null > 0', null > 0);  // false
console.log('null == 0', null == 0);  // false
console.log('null >= 0', null >= 0);  // true
