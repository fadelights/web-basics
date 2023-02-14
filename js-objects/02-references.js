/* primitives are copied "by value",
meaning changing the value of the copy
will not affect the original */
let salute = "こんにちは";
let greet = salute;

greet = "grüßen";  // `salute` will not change
console.log(salute, greet);

/* as opposed to primitive types,
objects are stored and copied "by reference" */
let desktop = {
    cpu: "Intel",
    ram: 8,
};

let laptop = desktop;
laptop.ram += 8;  // `desktop.ram` will also change

console.log(laptop.ram, desktop.ram);

/* objects are equal "if and only if" they
reference the same thing */
let a = {name: "leo"};
let b = {name: "leo"};
let c = a;

console.log(a === b, a === c);

/* to copy an object by value, we need to
loop over all its properties and copy them
one by one */
let cabinet = {
    biscuit: 3,
    tuna: 1,
    chips: 2
};

let fridge = {};
for (let key in cabinet) {
    fridge[key] = cabinet[key];
}

fridge.chips -= 2;
console.log(cabinet.chips, fridge.chips);

/* we can also use the `Object.assign` method
to copy (by value) properties [of potentially multiple objects]
all at once:
```
Object.assign(dst, [src1, src2, ...])
``` */
let england = {pop: 68.5, lang: "en"};
let brazil = {democratic: true, lang: "br"};
let canada = {};

// merge `brazil` and `england` into `canada`
Object.assign(canada, brazil, england);
console.log(canada);

canada.pop = 38.3;
console.log(canada.pop, england.pop);

/* since `Object.assign` also returns the result
of the merge, we don't need to define a merge
variable beforehand */
let orig = {name: 'Polina', age: 30};
let clone = Object.assign({}, orig);

console.log(clone);

/* objects can be nested. in this case,
simple copying will still pass the nested object
by reference and deep cloning has to be used */
let kumho = {
    size: 4,
    type: "offroad",
};

let mustang1964 = {
    diff: "rwd",
    tire: kumho,
};

let mustangGT500 = Object.assign({}, mustang1964);

// changing the tire properties will change it for both vehicles
mustangGT500.tire.size -= 1;
console.log(mustang1964.tire.size, mustangGT500.tire.size);

/* deep cloning will be covered in later topics */

/* since object variables actually store
the "address" of that object in memory (not value),
variables declared using the `const` keyword
can still have their properties altered */
const star = {
    name: "UY Scuti",
    type: "red giant",
    constellation: "Scutum",
};

star.type = "red supergiant";  // no errors
console.log(star);
