/* objects are used to store keyed collections
of various data and entities, much like dicts
in python */

/* an object can be created with figure brackets `{…}` with an optional list of properties. a property is a “key: value” pair, where `key` is a string (also called a “property name”), and `value` can be anything */

/* objects may be created using one of two synatxes */
let object_1 = new Object();  // "object constructor" syntax
let object_2 = {};  // "object literal" syntax

// adding object properties
let car = {
    brand       : "Mazda",
    model       : "RX-8",
    country     : "Japan",
    year        : 2003,
    "borked?"   : true,
};

console.log(car);

// accessing object properties
console.log(car.year);
console.log(car["brand"]);

// `delete` can be used to remove properties
delete car["borked?"];
console.log(car);

// adding new properties to an already existing object
car.color = "red";
console.log(car);

// property names can be computed too!
let item = "wallet"
let pocket = {
    [item]: "25$"
};

console.log(pocket.wallet);

// this is the same as the alternative notation
pocket[item] = "25$";
console.log(pocket);

// numbers are converted to strings when
// used as property keys
let zero = {
    0: "hero"
};

console.log(zero[0] === zero["0"]);

// testing whether a property exists
// "usually", `undefined` means that it does not exist
console.log(car.engine === undefined);
console.log("engine" in car);

// using the `in` operator is the safer way
// of checking whether an object exists
let character = {
    age: 30,
    ability: undefined,
};

console.log(character.ability === undefined);
console.log("ability" in character);

// the `in` keyword can be used with `for`
// to loop over all keys of an object
for (/* let */ property in car) {
    console.log(`${property}:`, car[property]);
}

// objects are sorted in a special manner
// integers properties are sorted numerically,
// others appear in creation order
let codes = {
    44  : "Iran",
    0   : "North Pole",
    32  : "Finland",
    "US": "United States",
    "BR": "Brazil",
};

console.log(codes);
