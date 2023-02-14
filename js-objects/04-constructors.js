/* object constructor functions are similar
to regular functions with two exceptions:
1- They're named with a capital letter
2- They should be executed with the "new" operator */

// lets build an anime record constructor function
function Anime(title, release) {
    // this = {}; (done implicitly)
    this.title = title;
    this.release = release;

    this.getAge = function() {
        currentDate = new Date();
        currentYear = currentDate.getFullYear()
        return currentYear - this.release;
    }

    // return this; (done implicitly)
}

let bna = new Anime("Brand New Animal", 2020);
console.log(bna);
console.log(bna.getAge());

/* anonymous constructors may be used for
one-time object creation */
let secret = new function() {
    // complex object structure
};

/* we can test whether a constructor function
was called with `new` or not.

iniside a function, using `new.target` will
return either the function
if the function was called with `new`
or `undefined` if it wasn't */
function funk() {
    console.log(new.target);
}

funk();
new funk();

/* constructors don't require `return` statements
as they will automatically return `this` at the end;
however, if one wishes to do an explicit `return`,
there are two rules:
1- if `return` is called with an object, the object is returned
2- if `return` is called with a primitive, the `return` is ignored */
