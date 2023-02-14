/* main JS data types:
- number
- bigint
- string
- boolean (`true` or `false`)
- the `null` value
- the `undefined` value
- object
- symbol
 */
let valNum = 13;
console.log(typeof(valNum));

let valBigNum = 13n;
console.log(typeof(valBigNum));

let valStr = 'Truth';
console.log(typeof(valStr));

let valBool = true;
console.log(typeof(valBool));

let valNull = null;
console.log(typeof(valNull));

let valUndef = undefined;
console.log(typeof(valUndef));

/* The result of typeof null is "object".
That’s an officially recognized error in typeof,
coming from very early days of JavaScript and kept for compatibility.
Definitely, null is not an object.
It is a special value with a separate type of its own.
The behavior of typeof is wrong here. */
