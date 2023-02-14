/* only two primitive types may serve as object property keys:

    string type, or
    symbol type.

if one uses another type, such as number,
it is autoconverted to a string */

/* a symbol represents a "unique" identifier
with an optional name useful for debugging purposes */
let id   = Symbol(); // no name specified
let id_2 = Symbol("id"); // name specified
let id_3 = Symbol("id"); // this is different from id_2

console.log(id_2 === id_3);

/* symbols do NOT autoconvert to strings */
console.log(id_2);
console.log(id_2.toString());
console.log(id_2.description);

/* to use a symbol in an object literal {...},
we must wrap it around square brackets so it
will not be confused with a string */
let user = {
    name: "Bob",
    [id]: 123
};

console.log(user);

/* symbols do not participate in `for...in` loops */
/* Object.keys(...) also ignores them */
/* Object.assign(...) does NOT ignore them */

/* the Global Symbol Registry can create symbols
and access them later */
let oldID = Symbol.for("identity");  // reads/creates if doesn't exist
let newID = Symbol.for("identity");

console.log(oldID === newID);

/* Symbol.keyFor(sym) does the reverse: returns a name by a global symbol
this only works for global symbols */
console.log(Symbol.keyFor(oldID));
console.log(Symbol.keyFor(id_2)); // undefined

/* but all symbols have the `description` property */
console.log(oldID.description);
console.log(id_2.description);
