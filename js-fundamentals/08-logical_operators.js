/* the four horsemen of the apocalypse:
- NOT `!`
- AND `&&`
- OR `||`
- Nullish Coalescing `??`
 */

/* short circuit is a thing
around here
 */

/* in JS, logical operators also return a value.
the OR operator works as follows:
- evaluate from left to right
- for each operand, convert it to boolean. if the result is
true, **stop** and return the **original** value of that operand
- if it reaches the end, return the last operand
 */
let f1 = null, f2 = 0, f3 = false, t1 = 13, t2 = '0';
console.log(f1 || f2 || f3 || t1 || t2);
console.log(f1 || f2);

/* the AND operator returns the first falsey
value in a chain of ANDs, or the last operand
if all were true */
console.log(t1 && t2);
console.log(t1 && f1 && t2);

/* a shitty alternative to `Boolean()` is
a double NOT: `!!`, since the first `!` converts
the value to a boolean and then inverts it, and
the second `!` re-inverts it.
I genuinely hope you will go to hell if you ever
attempt to use this in real code.
 */
let personality = 'crazy';
console.log(!!personality, Boolean(personality));

let nothing = null;
console.log(!!null, Boolean(null));

/* Nullish Coalescing operator '??'
recent addition to JS. old browsers need polyfills.
 */

/* the `??` treats both `null` and `undefined` the same
way. the result of 
```
a ?? b;
```
is `a` if `a` is defined and `b` if not.
it is basically the same as writing
```
(a !== null && a !== undefined) ? a : b;
```
 */

/* the common use case for ?? is to provide a default value
for a potentially undefined variable. */
