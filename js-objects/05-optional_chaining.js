/* optional chaining `?.` is a safe way to access nested
object properties, even if an intermediate property doesn’t exist. */

let user = {}; // a user without "address" property
console.log(user.address); // undefined
// console.log(user.address.street); // error!

/* in many cases we would like the above line to return
`undefined` instead of an error; that's where optional chaining
comes into play */

/* an old way of doing this used to be this */
console.log(user.address ? user.address.street : undefined);
// or
console.log(user.address && user.address.street);

/* this gets ugly quickly, as we try to access deeply nested properties.
the new way, using optional chaining goes like this */
console.log(user?.address?.street);

/* The optional chaining ?. stops the evaluation if the value
before ?. is undefined or null and returns undefined. */

/* optional chaining is a syntax construct, so it can be used
with function calls (for functions that may not exist)
and square bracktes too */
user.isAdmin?.();
user.address?.["street"];

/* optional chaining can also be used for safe deletion */
delete user.address?.street;
